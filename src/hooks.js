import { useRef, useEffect } from 'react'
import { elementInView, updateImgSrc, throttle } from './utils'

export function useResizing(opts = {}) {
  const {
    containerId,
    namespace = 'g-',
  } = opts

  const ref = useRef()
  const waiting = useRef(true)
  const observer = useRef()
  const throttleRef = useRef({ timeout: null, previous: 0 })

  useEffect(() => {
    waiting.current = waiting.current && !!window.IntersectionObserver

    function onIntersectionChange(entries) {
      // There may be multiple entries relating to the same container
      // (captured at different times)
      const isIntersecting = entries.reduce((memo, entry) => {
        return memo || entry.isIntersecting
      }, false)
      if (isIntersecting) {
        waiting.current = false
        update()
      }
    }

    function update() {
      const container = ref.current.querySelector(`#${containerId}`)
      const artboards = container.querySelectorAll(`.${namespace}artboard[data-min-width]`)
      const width = Math.round(container.getBoundingClientRect().width)
      artboards.forEach(el => {
        const minwidth = +el.getAttribute('data-min-width')
        const maxwidth = +(el.getAttribute('data-max-width') || Infinity)
        if (minwidth <= width && maxwidth >= width) {
          if (!waiting.current) {
            el.querySelectorAll(`.${namespace}aiImg`).forEach(updateImgSrc)
          }
          el.style.display = 'block'
        } else {
          el.style.display = 'none'
        }
      })

      if (waiting.current && !observer.current) {
        if (elementInView(container)) {
          waiting.current = false
          update()
        } else {
          observer.current = new IntersectionObserver(onIntersectionChange, {})
          observer.current.observe(container)
        }
      }
    }

    update()
    const onResize = throttle(update, 200, throttleRef)
    document.addEventListener('DOMContentLoaded', update)
    window.addEventListener('resize', onResize)

    return () => {
      document.removeEventListener('DOMContentLoaded', update)
      window.removeEventListener('resize', onResize)
      if (observer.current) observer.current.disconnect()
    }
  }, [containerId, namespace])

  return ref
}

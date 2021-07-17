export function elementInView(el) {
  const bounds = el.getBoundingClientRect()
  return bounds.top < window.innerHeight && bounds.bottom > 0
}

// Replace blank placeholder image with actual image
export function updateImgSrc(img) {
  const src = img.getAttribute('data-src')
  if (src && img.getAttribute('src') != src) {
    img.setAttribute('src', src)
  }
}

export function throttle(func, wait) {
  const run = () => {
    throttleRef.current.previous = Date.now()
    throttleRef.current.timeout = null
    func()
  }
  return function() {
    const { timeout, previous } = throttleRef.current
    const remaining = wait - (Date.now() - previous)
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout)
      run()
    } else if (!timeout) {
      throttleRef.current.timeout = setTimeout(run, remaining)
    }
  }
}

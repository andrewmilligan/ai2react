import React from 'react'
import styled from 'styled-components'
import camelCase from 'camelcase'
import { useResizing } from './hooks'

export function makeAi2React(opts = {}) {
  const {
    html,
    styles,
    containerId,
    namespace = 'g-',
    name = containerId,
  } = opts

  const Wrapper = styled.div`
    ${styles}
  `

  function Component(props) {
    const ref = useResizing({ containerId, namespace })
    const __html = (typeof html === 'function') ? html(props) : html
    return (
      <Wrapper ref={ref} dangerouslySetInnerHTML={{ __html }} />
    )
  }

  Component.displayName = camelCase(name, { pascalCase: true })

  return Component
}

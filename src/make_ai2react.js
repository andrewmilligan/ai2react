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

  function Component() {
    const ref = useResizing({ containerId, namespace })
    return (
      <Wrapper ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
    )
  }

  Component.displayName = camelCase(name, { pascalCase: true })

  return Component
}

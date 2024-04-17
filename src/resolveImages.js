const getValue = (val) => {
  if (typeof val === 'string') return val
  if (val === 0) return '0'
  if (!val) return ''
  if ('src' in val) return `${val.src}`
  return `${val}`
}

export function resolveImages(strings, ...values) {
  let src = '';
  strings.forEach((s, i) => {
    src += s;
    if (i < values.length) {
      src += getValue(values[i])
    }
  })
  return src;
}

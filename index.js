import vsbl from 'vsbl'

export default function lazim (attr = 'data-src') {
  return function bind () {
    const nodes = document.querySelectorAll('[' + attr + ']')

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      const img = node.nodeName === 'IMG' ? node : node.getElementsByTagName('img')[0]
      const src = node.getAttribute(attr)

      img.onload = () => {
        node.classList.add('is-loaded')
      }

      node.removeAttribute(attr)

      vsbl(node)(() => {
        node.classList.add('is-visible')
        img.src = src
      }).update()
    }
  }
}

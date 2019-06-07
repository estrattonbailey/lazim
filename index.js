import vsbl from 'vsbl'

let srrafInstance

export function update () {
  srrafInstance && srrafInstance.update()
}

export function bind (attr = 'data-src') {
  let images
  const nodes = document.querySelectorAll('[' + attr + ']')

  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i]
    const img = node.nodeName === 'IMG' ? node : node.getElementsByTagName('img')[0]
    const src = node.getAttribute(attr)

    img.onload = () => {
      node.classList.add('is-loaded')
    }

    node.removeAttribute(attr)

    images = vsbl(node)(() => {
      node.classList.add('is-visible')
      img.src = src
    })
  }

  if (images) {
    images.update()
    if (!srrafInstance) srrafInstance = images
  }
}

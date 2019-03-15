# lazim
Super tiny and simple image lazy load library. **300 bytes gzipped.**

## Install
```bash
npm i lazim --save
```

## Usage
`lazim` doesn't really care about your markup. This works:
```html
<img data-src='/image.jpg' />
```
But so does this:
```html
<div data-src='/image.jpg'>
  <img />
</div>
```
And so does this:
```html
<div data-src='/image.jpg'>
  <div
    <img />
  </div>
  <h2>silly image</h2>
</div>
```

### Instantiating
To run lazim, just pass it the attribute your're using to define your image URLs:
```javascript
import lazim from 'lazim'

const bindImages = lazim('data-src')
```
And call `bindImages` to kick things off:
```javascript
bindImages()
```

### Re-binding
If you're using a PJAX library like
[operator](https://github.com/estrattonbailey/operator), you'll need to re-bind
new images that are added to the DOM on each page load. In that case, just call
`bindImages` whenever the page updates:
```javascript
router.on('after', () => {
  bindImages()
})
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)

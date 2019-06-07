# lazim
Super tiny and simple image lazy load library. **350 bytes gzipped.**

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
To run lazim, import `bind` and call it:
```javascript
import { bind } from 'lazim'

bind()
```

You can also pass a different attribute, if you don't like `data-src`:
```javascript
bind('data-url')
```

`lazim` checks if there are images in the viewport on initial load, but in the
event you need to run this again when adding/animating elements:
```javascript
import { update } from 'lazim'

update()
```

Once bound, `lazim` removes the `data-src` attribute to prevent duplicate event
listeners.

### Animation
`lazim` adds a couple helper classes to the element you defined `data-src` on:

When visible in the viewport, it will receive an `is-visible` class. When the
image loads, it receives an `is-loaded` class.
```html
<div class='is-visible is-loaded'>
  <img src='/image.jpg' />
</div>
```

### Re-binding
If you're using a PJAX library like
[operator](https://github.com/estrattonbailey/operator), you'll need to re-bind
new images that are added to the DOM on each page load. In that case, just call
`bind` again whenever the page updates:
```javascript
router.on('after', () => bind())
```

## License
MIT License © [Eric Bailey](https://estrattonbailey.com)

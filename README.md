# papir.css

[![Build Status][ci-img]][ci]

Sensible print stylesheet.

## Install

```sh
npm install papir.css --save
```

## Usage

```css
@import url('papir.css');
```

To keep usability and display problems at minimum, it’s best to use this package only with [Normalize](http://necolas.github.io/normalize.css/) and [Rationalize](https://github.com/niksy/rationalize.css), without additional style reset, such as [Eric Meyer’s Reset CSS](http://meyerweb.com/eric/tools/css/reset/).

## Similar projects

* [Hartija](https://github.com/vladocar/Hartija---CSS-Print-Framework) - Universal printing stylesheet or best printing CSS practices all in one.
* [Gutenberg](https://github.com/BafS/Gutenberg) - Modern framework to print the web correctly.

## Test

For manual tests, run `npm run test:manual:local` and open <http://localhost:9000/> in your browser.

## Browser support

Tested in IE9+ and all modern browsers.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/papir.css
[ci-img]: https://travis-ci.org/niksy/papir.css.svg?branch=master

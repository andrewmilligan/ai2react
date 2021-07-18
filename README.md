ai2react
========

A rough and opinionated riff on [the OG `ai2html`][ai2html] ([documentation
here][ai2html-docs]) that outputs a JS module that exports a React component
rather than a plain HTML snippet. The raw HTML that `ai2html` gives you is
great because it's self-contained and super portable, but I wanted a way to
integrate it a little more seamlessly into a React workflow with a modern build
process. Part of the inspiration for this comes from [the Reuters Graphics port
of `ai2html`][reuters-ai2html], which includes `ai2svelte.js` as a way to
accomplish a similar goal.

This is designed more as a utility library for the
[`ai2react-loader`][ai2react-loader] Webpack loader than anything. If you plan
to use it directly your mileage may vary.

## Installing

Install `ai2react` from NPM using whichever package manager you like. For
instance, yarn:

```
yarn add ai2react
```

or npm:

```
npm install ai2react
```

## Usage

The heart and soul of `ai2react` really boils down to [`ai2html`][ai2html] with
a few small tweaks to the final output. Responsiveness is enforced
unyieldingly, but otherwise most of the configurations and options that
`ai2html` provides should be available.

You are welcome to install and use the `ai2react.js` Illustrator script
directly, but as I mentioned above, this package is really made to be used in
conjunction with [`ai2react-loader`][ai2react-loader]. If you do want to use
the script directly, [refer to the `ai2html` docs][ai2html-docs]; running the
script through Illustrator is exactly the same process.

Best of luck.

[ai2html]: https://github.com/newsdev/ai2html
[ai2html-docs]: http://ai2html.org/
[ai2react-loader]: https://github.com/andrewmilligan/ai2react-loader
[reuters-ai2html]: https://github.com/reuters-graphics/ai2html

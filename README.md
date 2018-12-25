# [scrollnav.js][1]

[![npm](https://img.shields.io/npm/v/scrollnav.svg)](https://www.npmjs.com/package/scrollnav)
[![Build Status](https://travis-ci.org/jimmynotjim/scrollnav.svg?branch=master)](https://travis-ci.org/jimmynotjim/scrollnav)
[![Codecov](https://img.shields.io/codecov/c/github/codecov/example-python.svg)](https://codecov.io/gh/jimmynotjim/scrollnav)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/jimmynotjim/scrollnav/blob/master/LICENSE-MIT)

## Introduction

scrollnav.js is a small (2.4kb gzipped), dependency free JavaScript plugin
for auto generating single page navigation with active highlighting. Useful
for creating a Table of Contents for a large document (think Wikis),
navigation for a single page website, or anything else you might think of.

scrollnav works by scanning a block of content for section landmarks
(typically heading elements) and generating a list of links from those
landmarks. It then tracks the scroll location of the document and highlights
the appropriate link. While previous versions injected wrappers within the
content, the current version (ver 3) takes a much lighter approach, only
changing the DOM as necessary. Visit the live demo at [scrollnav.com][1]
to see for yourself.

## Browser Compatibility

To keep scrollnav small, default support starts with
[ES6 compatible browsers](https://caniuse.com/#feat=arrow-functions). To support
[ES5 compatible browsers](https://caniuse.com/#feat=es5) you must provide your
own polyfills or rely on a third party library like pollyfills.io. I personally
use the following
[polyfill.io](https://github.com/Financial-Times/polyfill-service) feature
parameters to support scrollnav in IE 10 & 11.

```hmlt
<script src="https://cdn.polyfill.io/v3/polyfill.min.js?features=default,NodeList.prototype.forEach,Array.prototype.includes"></script>
```

To add your own polyfills you will need to build the project from source.

## Getting Started

The compiled, production ready plugin is available in the `dist` directory.
Please don't use the `src` directory unless you plan to build the entire
source.

### Install

#### Download

[scrollnav@v3.0.2](https://unpkg.com/scrollnav@3.0.2/dist/scrollnav.min.umd.js)

```html
<script src="[your assets directory]/scrollnav.min.umd.js"></script>
```

#### CDN

```html
<script src="https://unpkg.com/scrollnav@3.0.2/dist/scrollnav.min.umd.js"></script>
```

#### Package manager

[Yarn][13]: `yarn add scrollnav`

It's the new hotness, it's also better at managing dependencies than all it's predecesors.

[NPM][12]: `npm install scrollnav`

Good'ol NPM, it's always there, except when it isn't. Things have settled down a bit, but it was dicey there for a while. Even still, there's a reason even Yarn uses the NPM registry.

[Bower][11]: `bower install scrollnav --save`

The folks from Bower no longer recommend using Bower. Luckily they've provided a guide on [how to migrate to Yarn](https://bower.io/blog/2017/how-to-migrate-away-from-bower/). If you don't want to or can't migrate, scrollnav will continue to be available on Bower as long as it continues to run.


### Usage

scrollnav works by scanning the given [HTML Node Element][25] for section
landmarks, by default `h2` elements, that it then uses to generate the nav.
If we were to look at a typical document, it might look like this:

```html
  <div class="main-content">
    <h2>First section</h2>
    ...
    <h2>Second section</h2>
    ...
    <h2>Third section</h2>
    ...
  </div>
```

#### Initialize

First, initialize scrollnav with the  HTML Element. In this example we'll use
`.querySelector()` but you could also use `.getElementByID()` or
`.getElementByClassName()`.

```js
const content = document.querySelector('.main-content');
scrollnav.init(content);
```

scrollnav will then loop through the the `h2` elements, add an ID if they don't
already have one, build the nav, and then inject it just before the content
Node. The result for our example document would look like this:

```html
<nav class="scroll-nav">
  <ol class="scroll-nav__list">
    <li class="scroll-nav__item">
      <a class="scroll-nav__link" href="#scroll-nav__1">
        First heading
      <a>
    </li>
    ...
  </ol>
</nav>
<div class="main-content">
  <h2 id="scroll-nav__1">First Heading</h2>
  ...
</div>
```

#### Styles

To keep the plugin simple there are no styles added to the navigation, that's
all up to you ([view the demo site][1] for exmaples of the most common use
cases). The nav structure provides [BEM Methodology][23] class names for each
of the elements to provide consistent styling hooks (for a good overview read
[MindBEMding - getting your head 'round BEM syntax][24]). As the user scrolls
the document, scrollnav adds a `scroll-nav__item--active` modifier for the
item's relative section that currently intersects with the activation
threshold ([enable `debug` mode](#additional-options) to highlight the
threshold).

### Settings and options

scrollnav includes some default settings that work for most situations, but if
your project requires a bit more customization, scrollnav can most likely meet
those. To modify either, pass in a single object (include settings and options
as one object) as the second argument like this:

```js
  scrollnav.init(content, {
    key: value
  });
```

#### Default settings

The following settings are editable to overwrite the default.

```js
{
  sections: 'selector',
  // string
  //
  // Sets the querySelector for the content's section landmarks, by default
  // it's 'h2'.

  insertTarget: targetNode,
  // HTML Node
  //
  // Sets the target Node for injecting the navigation, by default it's the
  // content Node passed to scrollnav.

  insertLocation: 'relativeLocation'
  // string
  //
  // Sets the injection location relative to the insertTarget, by default it's
  // 'before'.
  //
  // available options are 'append', 'prepend', 'after', or 'before'

  easingStyle: 'easingName',
  // string
  //
  // Sets the easing type for the scroll animation that is triggered by the
  // click event on a nav item, by default it's 'easeOutQuad'.
  //
  // available options are 'linear' 'easeInQuad', 'easeOutQuad',
  // 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic',
  // 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint',
  // 'easeOutQuint', easeInOutQuint

  updateHistory: true
  // boolean
  //
  // Sets the history behavior when a nav item is clicked, by default it's true
}
```

#### Additional options

These additional options are editable but are not set by default.

```js
{
  subSections: '...',
  // string
  //
  // Sets the querySelector for the content's sub-section landmarks.

  onScroll: function() {...},
  // function
  //
  // Sets the callback to be triggered after the window scrolls when triggered
  // by the click event on a nav item.

  onInit: function() {...},
  // function
  //
  // Sets the callback to be triggered after the .init() method has completed.

  onUpdatePositions: function() {...},
  // function
  //
  // Sets the callback to be triggered after the .updatePositions() method
  // has completed.

  onDestroy: function() {...},
  // function
  //
  // Sets the callback to be triggered after the .destroy() method has
  // completed.

  debug: false
  // boolean
  //
  // Enables scrollnav's built in debug mode to log errors to the console and
  // display the active area threshold on screen, helpful for when you've hit a
  // snag you can't easily identify.
}
```

#### Available methods

In addition to the `.init()` method scrollnav provides two additional public
methods.

#### destroy()

To remove the current instance of scrollnav call the destroy method. If you
need to trigger a callback after scrollnav has been removed, use the
`onDestroy` option described above (passed either in the original init or with
the destroy method).

```js
scrollnav.destroy();
```

#### updatePositions()

scrollnav doesn't track outside DOM changes. If your page's content is dynamic
and updates after scrollnav is initialized you'll need to recalcuate the
position data with the updatePositions method. If you need to trigger a
callback after the position data has been recalculated, use the
`onUpdatePositions` option described above (passed either in the original init
or with the updatePositions method).

```js
scrollnav.updatePositions();
```

## Issues

Please read and understand the [Contributing Guidelines][4] prior to [opening
an issue][2]. Ensuring your issue conforms to the guidelines gives it a better
chance I'll be able to help address it.

## Questions
For questions about using scrollnav in your own project, your best bet is to
post it to [Stack Overflow][21]. The community there is great at lending a hand
and can often respond faster than I can, plus it becomes searchable for future
developers who may run into the same question. If you're still stuck, please
feel free to reach out to me to ask for help or clarification, I'm [@jimmynotim
on Twitter][22].

## Changelog

v3.0.2 is the current stable release. For detailed changes in each release
please refer to the [release notes][5]. Please be sure you understand the
changes before updating, v3 is a complete re-write of the plugin (as is v2
compared to v1 before it).

## Contributions

scrollnav is built and maintained by [James Wilson (@jimmynotjim)][31].
I wouldn't be able to continue this project without a lot of help from the
Open Source community. I welcome feedback and enhancements, but first, please
make sure to read the [Contributing Guide][4].

Thank you to everyone who has already contributed to scrollnav!

* [Chris Garcia (@pixelbandito)][43]
* [Eric Clemmons (@ericclemmons)][32]
* [Felix Borzik (@Borzik)][39]
* [Jeff Byrnes (@jeffbyrnes)][33]
* [Jeff Coburn (@coburnicus)][34]
* [Jen Germann (@germanny)][35]
* [Jim Schmid (@sheeep)][44]
* [Marc Amos (@marcamos)][38]
* [Masud Rahman (@frutiger)][40]
* [Meghdad Hadidi (@MeghdadHadidi)][37]
* [Michael Benin (@michael-benin-CN)][45]
* [Rob Loach (@RobLoach)][41]
* [Thomas Guillary @thomasguillory][46]
* [Will Moore (@willthemoor)][42]
* [Wizcover (@wizcover)][36]

## License

scrollnav is Copyright &copy; 2012-2018 James Wilson, released under the
[MIT license][3]. This means you can re-create, edit or share the plugin as
long as you maintain the same open licensing.


[1]: http://scrollnav.com
[2]: https://github.com/jimmynotjim/scrollnav/issues
[3]: https://github.com/jimmynotjim/scrollnav/blob/master/LICENSE-MIT
[4]: https://github.com/jimmynotjim/scrollnav/blob/master/CONTRIBUTING.md
[5]: https://github.com/jimmynotjim/scrollnav/blob/master/CHANGELOG.md

[11]: https://bower.io/
[12]: https://www.npmjs.com/package/scrollnav
[13]: https://yarnpkg.com/en/package/scrollnav

[21]: https://stackoverflow.com/questions
[22]: https://twitter.com/jimmynotjim
[23]: http://bem.info/method/
[24]: http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
[25]: https://developer.mozilla.org/en-US/docs/Web/API/Element

[31]: http://github.com/jimmynotjim
[32]: https://github.com/ericclemmons
[33]: https://github.com/jeffbyrnes
[34]: https://github.com/coburnicus
[35]: https://github.com/germanny
[36]: https://github.com/wizcover
[37]: https://github.com/MeghdadHadidi
[38]: http://github.com/marcamos
[39]: http://github.com/borzik
[40]: http://github.com/frutiger
[41]: http://github.com/RobLoach
[42]: http://github.com/willthemoor
[43]: http://github.com/pixelbandito
[44]: http://github.com/sheeep
[45]: http://github.com/michael-benin-CN
[46]: http://github.com/thomasguillory


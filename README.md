# [jQuery scrollNav][1]

A jQuery plugin for building a scrolling side navigation menu

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jimmynotjim/scrollNav/master/dist/scrollNav.min.js
[max]: https://raw.github.com/jimmynotjim/scrollNav/master/dist/scrollNav.js

## Examples

*Check out [the homepage][1] to see it in action.*

## Features

* ### Simple to set up

	With a single file import and function in your footer, you're on your way.

* ### Fully customizable

	Very little styling is set for you, but the bit that is, is fully customizable.

* ### Tiny Size

	At 1.5kb min'd and GZip'd, scrollNav is pretty unintrusive. If you use Ajax to import and initiate it, it's almost negligable.

## Requirements
* For in-page usage jQuery 1.7.0 or greater
* To build source Node 0.10.0 or greater and grunt 0.4.0 or greater

## Usage

### Import

Start by importing the script to your page, the best location is in the footer, but no matter what, make sure it follows your jquery file.

```html
<script src="jquery.scrollNav.min.js"></script>
```

### Build your page

Include a class or id hook on the element you want to apply the plugin to and include an `<h2>` for each section you want to inlcude in the navigation.

```html
<div class="main">
	<article class="post__article">
		<header class="post__header">
			<h1 class="post__heading">This is the main heading for the article</h1>
			<p class="post__sub-headling">This is a sub-heading for the article</p>
		</header>
		<p>Yada yada yada...</p>
		<h2>This is a section heading</h2>
		<p>More yada yada...</p>
		<h2>Another section heading</h2>
		<p>More more yada...</p>
	</article>
</div>
```

### Initialize

Now initialize the plugin with your hook for the article

```
$('.post__article').scrollNav();
```

and the plugin scans the article, grabs all the `<h2>`s, adds them to the navigation list and inserts the list before the article. It's that easy...well almost.

### Styling

To keep the plugin simple there are no styles added to the navigation, that's all up to you. The nav structure looks like this and includes class names in the [BEM Methodology][3] style (for a good overview read [MindBEMding - getting your head 'round BEM syntax][4]):

```html
<nav class="scroll-nav">
	<div class="scroll-nav__wrapper">
		<span class="scroll-nav__heading">
		<ol class="scroll-nav__list">
			<li class="scroll-nav__item">
				<a class="scroll-nav__link">
```

An `active` class is attached to the nav item matching the section that is the highest within the view bounds. An `in-view` class is attached to all nav items whose section is within the view bounds. If you have short sections at the end of your page and dislike that the last nav itmes are never activated, you can use the `in-view` hook to style all sections with in the view.

There are loading hooks added to the body element (similar to how Typekit handles font loading) to allow for css transitions or any other changes in css you'd need. When the plug-in starts `sn-loading` is added to the body class and is replaced by `sn-active` when the plugin is successful or `sn-failed` if it fails.

## Default `options`

There are a few customizable options in scrollNav using key : value pairs. Here are the defaults.

```
$('.post-article').scrollNav({
	sections: 'h2',
	subSections: false,
	showHeadline: true,
	headlineText: 'Scroll To',
	showTopLink: true,
	topLinkText: 'Top',
	fixedMargin: 40,
	scrollOffset: 40,
	animated: true,
	speed: 500,
	location: 'insertBefore',
	arrowKeys: false
});
```

### Sections

As mentioned, the script automatically searches for `<h2>`s within the target article. If your page structure differs, feel free to target another selector, like a `<h3>` or `<h4>` or even a class, like `.scroll-headline`.

### Sub-Sections

The plugin supports nesting sub-sections within each section in the final nav. Available selectors are the same as Sections.

### Show Headline

Set this to `false` to remove the Headline Text entirely.

### Headline Text

scrollNav's default title text is 'Scroll To', but feel free to modify it to whatever works for you, like 'Article Sections' or 'Page Navigation'.

### Show Top Link

Set this to `false` to remove the Top Link nav item entirely.

### Top Link Text

scrollNav's default return to the top link is 'Top', but feel free to modify it to whatever works for you.

### Fixed Margin

This is the `top` dimension you set for the `.scroll-nav.fixed` class, which is applied as the user scrolls down the page and is removed as they scroll above the article. You definitely want to set this if you don't use the default 40px, otherwise the nav will jump around as the user scrolls past the top of the article.

### Scroll Offset

This option affects two things. First is the "active state" boundries within the viewport. The bounderies are within a distance from the top and bottom of the viewport equal to this amount. Second is the destination when animating the page scroll. This will place the heading of the section right at the top of the "active state" boundry.

### Animated Scrolling

The plugin animates the page scroll when clicking on a nav link by default. Set this to `false` if you do not wish to animate the scroll.

### Scrolling Speed

Change this to either increase or decrease the animated page scroll speed.

### Insertion Location

You can pass any of the following jQuery insertion methods to change where scrollNav is inserted in relation to the targeted container. `insertBefore`, `prependTo`, `appendTo`, or `insertAfter`

### Arrow Key Navigation

Set this to `true` to allow up/down arrow keys to jump through each section.

## Errors

The plugin will refuse to build and log an error message if it doesn't find your desired container or any sections within the container. If the nav doesn't show up on load, check your browser's console.

## Issues

There are a few known issues, including poor location updating when scrolling on touch devices. If you find any others please submit them to [the issue tracker][5].

## License

scrollNav is Copyright &copy; 2013 James Wilson, released under the [MIT license][6]. This means you can re-create, edit or share the plugin as long as you maintain the same open licensing.

## Version

Latest stable version is 2.0.0. Make sure to view [the changelog][14] before updating, v2 is a complete re-write of the plugin.

## Testing

Tests are written using QUnit. To run the test suite with PhantomJS, run `$ grunt qunit` or `$ grunt watch`.

## Developers

Please read the [contributing guidelines][13] and [issue tracker][5] before starting on code.

In order to build and test scrollNav.js, you'll need to install its dev dependencies ($ npm install) and have grunt-cli globally installed ($ npm install -g grunt-cli). Below is an overview of the available Grunt tasks that'll be useful in development.

* grunt jshint – Runs source and test files through JSHint.
* grunt qunit – Runs the test suite with PhantomJS.
* grunt watch – Rebuilds from source whenever a file is modified.
* grunt concat - Builds the source to /dist.
* grunt uglify - Minifies the source to /dist.

## Author

[James Wilson (@jimmynotjim)][7]

## With Help From

* [Eric Clemmons (@ericclemmons)][8]
* [Jeff Byrnes (@jeffbyrnes)][9]
* [Jeff Coburn (@coburnicus)][10]
* [Jen Germann (@germanny)][11]
* [Wizcover (@wizcover)][12]

[1]: http://scrollnav.com
[2]: #
[3]: http://bem.info/method/
[4]: http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
[5]: https://github.com/jimmynotjim/scrollNav/issues
[6]: https://github.com/jimmynotjim/scrollNav/blob/master/LICENSE-MIT
[7]: http://github.com/jimmynotjim
[8]: https://github.com/ericclemmons
[9]: https://github.com/jeffbyrnes
[10]: https://github.com/coburnicus
[11]: https://github.com/germanny
[12]: https://github.com/wizcover
[13]: https://github.com/jimmynotjim/scrollNav/blob/master/CONTRIBUTING.md
[14]: https://github.com/jimmynotjim/scrollNav/blob/master/CHANGELOG.md




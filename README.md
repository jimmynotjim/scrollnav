# [jQuery scrollNav][1]

A jQuery plugin for building a scrolling side nav

*Check out [the homepage][1] to see it in action.*

## Features ##

*	### Simple to set up

	With a single file import and function in your footer, you're on your way.

*	### Fully customizable

	Very little styling is set for you, but the bit that is, is fully customizable.

*	### Tiny Size

	At 1.8kb min'd, scrollNav is pretty unintrusive. If you use Ajax to import and initiate it, it's almost negligable.

## Usage

### Import

Start by importing the script to your page, the best location is in the footer, but no matter what, make sure it follows your jquery file.

```html
<script src="jquery.scrollNav.min.js"></script>
```

### Build your page

Include a class or id hook on the element you want to apply the plugin to and include an `<h3>` for each section you want to inlcude in the navigation.

```html
<div class="main">
	<article class="post-article">
		<h1 class="post-heading">This is the main heading for the article</h1>
		<h2 class="post-sub-headling">This is a sub-heading for the article</h2>
		<p>Yada yada yada...</p>
		<h3>This is a section heading</h3>
		<p>More yada yada...</p>
		<h3>Another section heading</h3>
		<p>More more yada...</p>
	</article>
</div>
```

### Initialise

Now initialise the plugin with your hook for the article

```
$('.post-article').scrollNav();
```

and the plugin scans the article, grabs all the `<h3>`s, adds them to the navigation list and inserts the list before the article. It's that easy...well almost.

### Styling

To keep the plugin simple there are no styles added to the navigation, that's all up to you. The nav structure looks like this and includes class names in [@csswizardry's][3] [inuit.css][4] framework style:

```html
<nav class="scroll-nav">
	<span class="scroll-nav-heading">
	<ol class="scroll-nav-list">
		<li class="scroll-nav-item">
			<a class="scroll-nav-link">
```

There are also loaded and loading hooks added to the body element (similar to how Typekit handles font loading) to allow for css transitions or any other changes in css you'd need.

```html
<body class="sn-loading">
```

turns into

```html
<body class="sn-active">
```

## Options

There are a few customizable options in scrollNav using key : value pairs. Here are the defaults.

```
$('.post-article').scrollNav({
	sections: 'h3',
	titleText: 'Jump To',
	fixedMargin: 40,
	animated: true,
	speed: 500,
	showHeadline: true,
	showTopLink: true,
	topLinkText: 'Top',
	location: 'insertBefore'
});
```

### Sections

As mentioned, the script automatically searches for `<h3>`s within the target article. If your page structure differs, feel free to target another element, like a `<h2>` or `<h4>` or even a class, like `.scroll-headline`.

### Title Text

scrollNav's default title text is 'Scroll To', but feel free to change it to whatever works for you, like 'Article Sections' or 'Page Navigation'

### Fixed Margin

This is the `top` dimension you set for the `.scroll-nav.fixed` class, which is applied as the user scrolls down the page and is removed as they scroll above the article. You definitely want to set this if you don't use the default 40px, otherwise the nav will jump around as the user scrolls past the top of the article.

### Animated Scrolling

The plugin animates the page scroll when clicking on a nav link by default. Set this to `false` if you do not wish to animate the scroll.

### Scrolling Speed

Change this to either increase or decrease the animated page scroll speed.

### Show Headline

Set this to `false` to remove the `titleText` entirely.

### Show Top Link

Set this to `false` to remove the `Top` nav item entirely.

### Top Link Text

scrollNav's default return to the top link is 'Top', but feel free to change it to whatever works for you.

### Location

You can pass any of the following jQuery insertion methods to change where scrollNav is inserted in relation to the targeted container. `insertBefore`, `prependTo`, `appendTo`, or `insertAfter`

## Errors

The plugin will refuse to build and log an error message if it doesn't find your desired container or any sections within the container. If the nav doesn't show up on load, check your browser's console.

## Issues

There are a few known issues, including poor location updating when scrolling on touch devices. If you find any others please submit them to the issue tracker.

## License

scrollNav is Copyright &copy; 2012 James Wilson, released under the [MIT license][6]. This means you can recreate, edit or share the plugin as long as you maintain the same open licensing.

## Authors

Written by [James Wilson (@jimmynotjim)][7]

With a bit of guidance from [Eric Clemmons (@ericclemmons)][8]

[1]: http://scrollnav.com
[2]: #
[3]: https://twitter.com/csswizardry
[4]: http://inuitcss.com/
[6]: https://github.com/jimmynotjim/scrollNav/blob/master/LICENSE-MIT
[7]: http://jimmynotjim.com
[8]: https://github.com/ericclemmons



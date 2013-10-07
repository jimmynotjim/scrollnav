# Changelog

Releases are be numbered in the semantic versioning format:

`<major>.<minor>.<patch>`

And constructed with these guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.

## v2.0.0 - October 7, 2013

v2 is a complete re-write of scrollNav and includes better code organization, new options, updated options, grunt integration, and bugfixes. This update will most like break your options and markup from v1, please read through the following changes and reference the [readme](https://github.com/jimmynotjim/scrollNav/blob/master/README.md) for further details.

* Updated to wrap each section in a `section` tag and support for sub-sections.
* Fixed the active state when scrolling, no longer switches to the next nav item as the page finishes scrolling.
* There are now two classes added to the nav item when scrolling, `active` and `in-view`. All sections within the view bounds are marked as `in-view` and the topmost section is marked as `active`.
* Added grunt workflow. Edits to the plugin should be made in `/src/scrollNav.js` with tests to support them and jshint, qunit, concat and uglify should be run before submitting PRs.
* Added parsing of url for an element hash. This fixes inbound urls with a hash not scrolling to the section if plugin loading is delayed.
* Added arrow key navigation option. When enabled, users can jump from section to section using the up/down arrow keys.
* Updated the class names of scrollNav elements to follow BEM conventions.

## v1.2.0

Added topLinkText option to customize the top link text (Thanks to [Wizcover][11]).

## v1.1.4

Updated Readme to include new options.

## v1.1.3

Added option for insertion location.

## v1.1.2

Added option to remove Top Link from the nav.

## v1.1.1

Fixed html rather than text being added to nav elements where heading contains nested elems.

## v1.1.0

Added options for showing Headline Text and animation speed.

## v1.0.1

Added ARIA support to nav elem (Thanks to [Jeff Coburn][10]).

## v1.0.0

Initial Release of scrollNav

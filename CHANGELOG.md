# Changelog

Releases are be numbered in the semantic versioning format:

`<major>.<minor>.<patch>`

And constructed with these guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.

## v2.7.1 - February 18, 2015

* Fixed package.json

## v2.7.0 - February 11, 2015

* Add `activeClass` setting for custom styles
* Add `__focused-section` when a section is scrolled to

## v2.6.0 - February 19, 2015

* Added in-view and active logic to sub-sections

## v2.5.0 - January 18, 2015

* Add scrollToHash setting

## v2.4.0 - November 13, 2014

* Adds a new resetPos public function for updating the section positions when the page's content changes. Refer to the Readme for more details.

## v2.3.1 - October 30, 2014

* Patched an active section bug where no sections were active when a section matched the exact pixel offset calculated

## v2.3.0 - October 9, 2014

* Updated min Node to 0.10.*
* Updated all Node plugins to latest

## v2.2.0 - March 14, 2014

* Added option to change the classname used throughout the plugin.
* Updated jQuery dep to 1.9.*

## v2.1.1 - December 13, 2013

Added `scrollNav` namespace to event listeners to avoid crashing in to user defined event listeners.

## v2.1.0 - November 15, 2013

v2.1 adds support for public methods, a new destroy method, custom callbacks for init, render and destroy, and small bugfixes.

* Reorganized core to allow for new public methods
* Added destroy method to core to allow for breaking down the plugin and it's dom * changes
* Added the option to add callback functions to init, render and destroy
* Squashed a bug when wrapping sub-sections in their div
* Updated core init in test for easier reuse
* Fixed Grunt test:browser task to only run in the browser
* Added destroy tests to core module and a new module for the callbacks

## v2.0.2 - October 31, 2013

Double releasing to include changelog and readme updates in Bower. One day I'll figure all this out :)

## v2.0.1 - October 31, 2013

Bugfixes for the following:

* package.json now includes semver: Ooops, sorry
* Moved jQuery dependency from package.json to bower.json and updated jQuery dep to v1.8.*
* Removed unneeded build dirs from bower install
* Updated gitignore to ignore bower_components

## v2.0.0 - October 11, 2013

v2 is a complete re-write of scrollNav and includes better code organization, new options, updated options, grunt integration, and bugfixes. This update will most like break your options and markup from v1, please read through the following changes and reference the [readme](https://github.com/jimmynotjim/scrollNav/blob/master/README.md) for further details.

* Updated to wrap each section in a `section` tag and support for sub-sections (as well as an option to change the wrapping element).
* Fixed the active state when scrolling, no longer switches to the next nav item as the page finishes scrolling.
* There are now two classes added to the nav item when scrolling, `active` and `in-view`. All sections within the view bounds are marked as `in-view` and the topmost section is marked as `active`.
* Added grunt workflow. Edits to the plugin should be made in `/src/scrollNav.js` with tests to support them and jshint, qunit, concat and uglify should be run before submitting PRs.
* Added parsing of url for an element hash. This fixes inbound urls with a hash not scrolling to the section if plugin loading is delayed.
* Added arrow key navigation option. When enabled, users can jump from section to section using the up/down arrow keys.
* Added option to change insertion target.
* Added Bower support for easy project dependency management.
* Updated the class names of scrollNav elements to follow BEM conventions.
* Updated existing settings option naming for the following (*this may break your current setups*):
  * `titleText` -> `headlineText`
  * `location` -> `insertLocation`

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

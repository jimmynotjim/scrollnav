# Contributing Guideline

Thanks for contributing to scrollNav. Without you and the Open Source community
this project wouldn't be possible. Before you get started, please familiarize
yourself with the project and its standards.

## Issue Reports

If you're looking for a way to contribute to this project, your best bet is
to [start with the current issues][1]. Whether it's a new feature you'd like
added, a bug you've found, or a question about using the plugin, there's always
a chance you're not alone. Take a look through both the open and closed issues
before creating a new one yourself.

### Improvements/features

Before working on a new feature please submit an issue suggesting the feature
and ensure that it is greenlighted. I'd hate for you to spend your time
building a new feature that doesn't fit the project's scope or intentions.

### Bugs

Before submitting a bug report, please create a reproducable test, either as a
failing unit test on your own fork, or by forking the starter demo from Codepen
and adjusting as necessary. It's a whole lot easier to address issues if I can
understand the situation. If it's not obvious what's broken in your demo,
include step-by-step instructions on how to reproduce the problem within the
issue description.

## Pull Requests

You've found a bug or had a feature greenlighted and you're ready to dig in and
get to work. Congrats! This project was built and continues to improve from
direct contributions from folks like you. Before you get too far, please be
sure to read through and understand the steps below.

### Important notes

Please don't edit files in the `dist` subdirectory as they are generated via
NPM script. You'll find source code in the `src` subdirectory.

### Code style

This project utilizes [Prettier][11] to ensure a consistent code style. Write
your changes however you prefer but be sure to run `npm run format` prior to
submitting a Pull Request. Don't worry about making a lot of small commits,
your changes will be squashed within Github when the Pull Request is merged.

### Testing

This project uses [Jest][12] for its unit tests. Prior to submitting a
Pull Request, please ensure new functionality is tested and adjustments to
previous functionality continue to pass. A failing test is better than no
test at all and gives me a place to start reviewing.

Additionally, it's a good idea to ensure your changes work in actual browsers.
Including a demo on [Codepen][13] is a great way to ensure your changes are
reviewed and merged in a timely manner. I've [created a base Pen][2] for you
to fork and edit.

### Modifying the code

First, ensure that you are working with [Node.js][14] version 8 or later and
[npm][15] version 5 or later. Older versions of Node are supported but it's
best to work with the Long Term Support (LTS), currently version 8.

1. Fork and clone the repo.
1. Run `npm install` to install the development dependencies.
1. Create a new branch that's appropriately named. Please don't work directly
   in your `master` branch, it makes testing locally difficult.
1. Add failing tests for the change you want to make in the `test/tests`
   directory. Run `npm test` to see the tests fail.
1. Edit the source files in the `src` directory.
1. Run `npm test` to see if the tests pass. Repeat steps 2-4 until done.
1. Run `npm run build` to generate the transpiled files in the `dist`
   directory.
1. Update the documentation to reflect any changes in functionality.
1. Commit and push your the branch to Github.
1. Navigate to your branch on Github and then to the
   `dist/scrollNav.min.js` file.
1. Select the "Raw" button and copy the file URL.
1. Fork the starter demo in Codepen and then click settings.
1. Under "Add External Scripts/Pens" replace the existing
   `dist/scrollNav.min.js` file URL with your raw file URL.
1. Test the interactions and ensure your intended changes work as expected.
1. Submit a Pull Request making sure to write a descriptive comment and
   include your forked Codepen URL.

**Note: If none of this makes sense, it's ok. Any contribution is a useful one,
even if it's not accepted. Please feel free to reach out to me to ask for help
or clarification, I'm [@jimmynotim on Twitter][21].**

To view all available build tasks run `npm run` without any arguments.

[1]: https://github.com/jimmynotjim/scrollNav/issues
[2]: https://codepen.io/jimmynotjim/pen/OZKeyd

[11]: https://prettier.io/
[12]: https://facebook.github.io/jest/
[13]: https://codepen.io/
[14]: http://nodejs.org/
[15]: http://npmjs.org/

[21]: https://twitter.com/jimmynotjim

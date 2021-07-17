ai2react
========

## Installing

The `ai2react` library is available on [our internal NPM registry on
Artifactory][ap-npm], so you should set up your package manager to use that
registry if you haven't already. Using your package manager of choice:

```
yarn config set registry https://artifactory.ap.org/api/npm/npm/ --global
```

or:

```
npm config set registry https://artifactory.ap.org/api/npm/npm/ --global
```

Once you have that set up you can install the package like normal. Again, you
can use whichever package manager you like. For instance, yarn:

```
yarn add ai2react
```

or npm:

```
npm install ai2react
```

## Contributing

To contribute to this project, start by cloning this repository, navigating
into the cloned directory, and installing all the dependencies (e.g., `yarn
install`). This project uses [Storybook][] to [demonstrate individual
components][proj-storybook] in isolation rather than in the context of a whole
app, and you can start a Storybook server locally for live feedback during
development with:

```
yarn storybook
```

That should open up the project's stories in your browser where you can see
changes you make in realtime. As you change an existing component make sure its
stories still work and make sense; if you're adding a new component try to add
stories for it as well!

This project also uses [ESLint][] to maintain code quality and consistency.
The linter is automatically run on merge requests, but you can run it locally
with:

```
yarn lint
```

Note that running `yarn lint --fix` will automatically fix any linting errors
that can be fixed without you input.

Please do any development on a feature branch and submit a merge request when
you're ready for a second set of :eyes:

Once a new version of the library is ready to publish you can publish it with:

```
yarn release
```

That will prompt you for a new version number, build the library, and publish
it to our internal NPM.

Enjoy! :heart:

[ap-npm]: https://artifactory.ap.org/webapp/#/artifacts/browse/tree/General/npm
[Storybook]: https://storybook.js.org/
[ESLint]: https://eslint.org/

# Github Action Template

Use this template to bootstrap the creation of a TypeScript action.

## Features

* 🪄️ All of the code is written in TypeScript
* ✨ Fully customized [eslint](https://eslint.org/) configuration based on the config by [Antfu](https://github.com/antfu/eslint-config)
* 🧪 Write tests quickly and conveniently with [vitest](https://vitest.dev/)
* 🤝 Supports [conventional commits](https://www.conventionalcommits.org/)
* 💅 Generate beautiful changelogs with [changelogen](https://github.com/unjs/changelogen)
* ♾️ GitHub CI for your build
* 📢 Issue templates
* 📝 Pull request template
* 🤖 Ready configuration for [renovatebot](https://github.com/apps/renovate) with [renovate-config](https://github.com/hywax/renovate-config)
* 🚀 Action releases with just one command

## Get started

### GitHub Template

This is a template repo. Click the green [Use this template](https://github.com/hywax/github-action-template/generate) button to get started.

### Git Clone

```shell
git clone https://github.com/hywax/github-action-template.git
cd github-action-template
pnpm install
```

## Usage

The template contains the following scripts:

* `build` - Build for production
* `release` - Generate changelog and npm publish
* `lint` - Checks your code for any linting errors
* `test` - Run all tests
* `test:watch` - Run all tests with watch mode
* `test:coverage` - Run all tests with code coverage report
* `typecheck` - Run TypeScript type checking
* `prepare` - Script for setting up husky hooks

## Used by

If you are using this template, feel free to open a PR to add your project to the list.

## License

This template was created under the [MIT License](LICENSE).

TODO:
Section about the package json: what is behind the scenes and why particularly with eslint to maintain team rules, prettier to maintain team formatting without enforcing certain in-development practices, and an explanation of tailwind

# Project Template

## What it is

A static workflow template for quickly spinning up a one-off project or a larger scale application.

## How to use it

#### Installing the project

1. Clone the projectTemplate repo to your local environment

```
$ git clone https://github.com/gorsuchtim/projectTemplate
```

2. Change directories into your new project folder

3. Install the npm packages

```
$ npm install
```

4. Open/run your local environment

```
$ npm start
```

### Create a new project using this template

1.  Create a new repo in your github profile

2.  In the root projects folder, clone the new repo to the local environment

```
$ git clone (url for new project repo)
```

3.  Copy all files (_excluding `node_modules`, `readme.md`, and `package-lock.json` files if applicable_) from the local `projectTemplate` repository and paste within the new project folder

4.  **_Exclude the `node_modules` and `package-lock.json` files if applicable_**

5.  Follow steps 2-5 in the `Installing the project` section of this README to install and spin up the new project local environment

### Git workflow (feature, bugfix, experiment branches)

This project uses [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) as a model for handling project version control. Develop is the root/main branch. Any new features or enhancements, bug fixes, or hot fixes are included into the project via branches. Branch names are prefixed by the general nature of the task (feature, bugfix, hotfix).

New features or enhancements are added via `feature/` branches, bug fixes are implemented with a `bugfix/`, and any hot fix to be pushed directly to production should be preceded with `hotfix/`.

#### Creating a branch

_Before creating a new branch be sure the local version of develop is up-to-date with the most recent remote (github/online) version of develop_

Create a new branch for the task. This can be done easily at the command line using the git command:

```
$ git checkout -b mybranchname
```

A good practice is to iterate the `feature/` branch prefix to help track project progress and/or better define tasks. The preferred naming convention is to abbreviate the repo name (ex: projectTemplate could be "PT") and then number the task followed by a brief semantic description as follows:

```
$ git checkout -b feature/PT-001_updates-readme-content
```

### Branch commit best practices

To help streamline the pull request/review process AND as a manner of keeping branches clean a great practice to follow is to regularly commit branch code with brief, semantic commit messages.

A good rule of thumb is to split the overall tasks into sections of completion, work toward a particular goal (even if it's a minor change), commit, and then move to the next section/goal of completing the task for that branch.

```
$ git commit -m "updates name handler to use lower case"
```

To keep commit messages short & semantic consider beginning each message with a verb to describe what was completed for this commit.

```
$ git commit -m "updates readme with commit practices"
```

_Following this practice will also help keep commits separate and clean._

### Pull requests & reviews

The projectTemplate repository settings are pre-defined to require approval from at least 1 other developer before a new branch can be merged into the develop branch. This can be updated to require more/less reviews in the remote repository in Settings -> Branches -> Branch Protection Rules.

When a branch's code is complete it should be reviewed by the team with a pull request before attempting to merge into develop. A pull request is more than a formality. It is an opportunity to ensure new code adheres to team guidelines & best practices, is error-free, and has no conflicts with other projects. It is also an open forum for discussion; an opportunity for a reviewer to ask "why" or "how" and to spark a conversation about the code.

_Pull requests and code reviews are also great opportunities for kudos and appreciation!_

When creating a pull request the developer has an opportunity to use the comment section to communicate to the team and should follow a few good practices:

1. The topic sentence should be a single sentence that clearly communicates the scope and purpose of the branch (what was done)
2. Any additional information should be provided after the topic sentence in a list format (how it was done)
3. Images are helpful! If applicable a screenshot of the project and before/after pictures do a lot to communicate what was accomplished.

### Code rules & consistency

The project template is designed to allow a developer to easily spin up a local server that supports modern development and is live-loaded on update in the browser. It is also designed to support a certain set of code-behavior rules & best practices without enforcing a strict method of development upon every developer who handles it.

#### Format script

It is important (particularly for a team) to develop projects following a set standard of code quality and style/formatting. Forcing a developer to write in a particular way, however, can create conflict and decrease productivity. It is important to allow a developer to work to the best of their ability & in their own way.

To maintain consistency in production code this template uses an `npm run format` script to handle auto-formatting a developer's code via [eslint](https://github.com/gorsuchtim/projectTemplate/wiki/Eslint) and Prettier.

The format script can be run at the developer's discretion to validate code in development and it is also run in the build process when preparing code for production.

```
$ npm run format
```

#### Build script

The build script prepares the development/branch code for production by ensuring it has passed linting & formatting requirements and outputting the code into production files. If any code does not pass the requirements outlined by the template (or updated by the team) the build will fail.

```
$ npm run build
```

#### ESlint

ESLint is a code analysis tool for identifying problematic patterns found in JavaScript code. Defining what is "problematic" is configurable: customized rules can be defined and loaded. ESLint covers both code quality and coding style issues.

If any development code has failed to meet the standard of quality & style set in the `eslintrc` file the build will fail and the user will be pointed to where the code failed and can work toward fixing it.

#### Prettier

Prettier is an opinionated code formatter. It enforces a consistent style by parsing code and re-printing it with its own rules (ex: line length, indent spacing, single or double quotes).

Prettier is available as an extension in editors but the formatting that is preferred among developers can vary greatly. Because of this, the overall consistency of code for production can suffer. This template does not enforce the use of prettier OR a certain set of prettier rules in development but DOES format the code via Prettier by a defined set of rules when preparing it for production.

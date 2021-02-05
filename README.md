TODO:
Section about the package json: what is behind the scenes and why particularly with eslint to maintain team rules, prettier to maintain team formatting without enforcing certain in-development practices, and an explanation of tailwind

# Project Template

## What it is

A static workflow template for creating a one-off project or larger scale application.

## How to use it

### Installing the project

1. Clone this repo to your local environment

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

### Creating a new project for this template

1.  Create a new repo in your github profile (no need to add a `README` file if you're cloning this template)
2.  In the root projects folder, clone the new repo to the local environment

```

$ git clone (url for new project repo)

```

3.  Copy all files from the local `projectTemplate` repository and paste within the new project folder
    **_Exclude the `node_modules` and `package-lock.json` files if applicable_**
4.  Follow steps 2-5 above in the `Installing the project` section of this README to install and spin up the new project local environment

### Git workflow (feature, bugfix, experiment branches)

This project uses [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) as a model for handling project version control. Develop is the root/main branch. Any new features or enhancements, bug fixes, or hot fixes are included into the project via branches. Branch names are prefixed by the general nature of the task (feature, bugfix, hotfix).

New features or enhancements are added via `feature/` branches, bug fixes are implemented with a `bugfix/`, and any hot fix to be pushed directly to production should be preceded with `hotfix/`.

#### Creating a branch

**_Before creating a new branch be sure the local version of develop is up-to-date with the most recent remote (github/online) version of develop_**

1. **Making the branch**
   Once the most recent version of develop has been pulled to the local repository, create a new branch for the task. This can be done easily at the command line using the git command:

```

$ git checkout -b mybranchname

```

2. **Branch naming conventions**
   A good practice is to iterate the `feature/` branch prefix to help track project progress and/or better define tasks. The preferred naming convention is to abbreviate the repo name (ex: projectTemplate could be "PT") and then number the task followed by a brief semantic description as follows:

```

$ git checkout -b feature/PT-001_updates-readme-content

```

3. **Branch commit practices**
   To help streamline the pull request/review process AND as a manner of keeping branches clean a great practice to follow is to regularly commit branch code with brief, semantic commit messages. A good rule of thumb is to split the overall tasks into sections of completion, work toward a particular goal (even if it's a minor change), commit, and then move to the next section/goal of completing the task for that branch.

   ```

   $ git commit -m "updates name handler to use lower case"

   ```

4. **Branch commit messages**
   To keep commit messages short & semantic consider beginning each message with a verb to describe what was completed for this commit.

   ```

   $ git commit -m "updates readme with commit practices"

   ```

   _Following this practice will also help keep commits separate and clean._

#### Pull requests & code reviews

The projectTemplate repository settings are pre-defined to require approval from at least 1 other developer before a new branch can be merged into the develop branch. This can be updated to require more/less reviews in the remote repository in Settings -> Branches -> Branch Protection Rules.

When a branch's code is complete it should be reviewed by the team with a pull request before attempting to merge into develop. A pull request is more than a formality. It is an opportunity to ensure new code adheres to team guidelines & best practices, is error-free, and has no conflicts with other projects. It is also an open forum for discussion; an opportunity for a reviewer to ask "why" or "how" and to spark a conversation about the code.

_Pull requests and code reviews are also great opportunities for kudos and appreciation!_

When creating a pull request the developer has an opportunity to use the comment section to communicate to the team and should follow a few good practices:

1. The topic sentence should be a single sentence that clearly communicates the scope and purpose of the branch (what was done)
2. Any additional information should be provided after the topic sentence in a list format (how it was done)
3. Images are helpful! If applicable a screenshot of the project and before/after pictures do a lot to communicate what was accomplished.

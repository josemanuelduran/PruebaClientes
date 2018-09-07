# Contributing to PruebaClientes

As a contributor, here are the guidelines we would like you to follow:

 - [Code of Conduct](#coc)
 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)
 - [Branches](#branches)
 - [Commit Message Guidelines](#commit)

## <a name="coc"></a> Code of Conduct

Help us keep PruebaClientes open and inclusive. Please read and follow our [Code of conduct](CODE_OF_CONDUCT.md).

## <a name="question"></a> Got a Question or Problem?
 
Please ask to any other team member for general support questions.

## <a name="issue"></a> Found a Bug?

If you find a bug in the source code, you can [submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Missing a Feature?

Please ask to [Jose Manuel Durán](mailto:josemanuelduran@gmail.com) to request a new feature.

## <a name="submit"></a> Submission Guidelines

### <a name="submit-issue"></a> Submitting an Issue

Please follow these steps before submitting an issue.

1. Before you submit an issue, please search the issue tracker, maybe an issue for
 your problem already exists and the discussion might inform you of workarounds readily available.
2. If you need to create an issue, submit that issue before to commit and push your changes.
3. If possible, include in the issue the necessary steps to reproduce it (with screenshots).

### <a name="submit-pr"></a> Submitting a Pull Request (PR)

Before you submit your Pull Request (PR) consider the following guidelines:

> All the git commands described below can be performed using [SourceTree](https://www.sourcetreeapp.com/) or any
 other Git GUI client, E.g. [GitKraken](https://www.gitkraken.com/).
 
1. Fork the PruebaClientes repo.
1. Follow our [Coding Rules](#rules).
1. Make your changes in a new git branch (follow our [branch name convention](#branches)):

     ```shell
     git checkout -b my-fix-branch develop
     ```

1. Create your patch, **including appropriate test cases**.
1. Run the full test suite and ensure that all tests pass.
1. Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit).

     ```shell
     git commit -a
     ```
    > Note: the optional commit `-a` command line option will automatically "add" and "rm" edited files.

1. Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

1. In GitHub, send a pull request to `PruebaClientes:develop`.
  * The PR title format should be **Short description**. E.g.:
    _Add new customer_
  * You should considere add labels to classify the PR: bug, feature, enhancement...
  * If we suggest changes then:
    * Make the required updates.
    * Re-run the Angular test suites to ensure tests are still passing.
    * Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

      ```shell
      git rebase develop -i
      git push -f
      ```

That's it!

#### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

* Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

    ```shell
    git push origin --delete my-fix-branch
    ```

* Check out the develop branch:

    ```shell
    git checkout develop -f
    ```

* Delete the local branch:

    ```shell
    git branch -D my-fix-branch
    ```

* Update your develop branch with the latest upstream version:

    ```shell
    git pull --ff upstream develop
    ```

As we commented above, all these actions can be performed with [SourceTree](https://www.sourcetreeapp.com/).
Here you have some useful links to the SourceTree manual where these actions are explained.

* [Pull changes from a remote repository](https://confluence.atlassian.com/get-started-with-sourcetree/pull-changes-from-a-remote-repository-git-847359111.html)

* [Commit and push a change](https://confluence.atlassian.com/get-started-with-sourcetree/commit-and-push-a-change-git-847359114.html)

* [Create and push a branch to the remote repository](https://confluence.atlassian.com/get-started-with-sourcetree/create-and-push-a-branch-to-the-remote-repository-git-847359118.html)

* [Merge changes from one branch to another](https://confluence.atlassian.com/get-started-with-sourcetree/merge-changes-from-one-branch-to-another-git-847359121.html)

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**.
* Docs have been added/updated (for bug fixes/features)
* Commit message follows our [Commit Message Guidelines](#commit)
* Make sure lint and unit tests pass.
* Make sure not to introduce any compiler warnings.
* Follow our [Coding guidelines](CODING_GUIDELINES.md), but wrap all code at
  **140 characters**.

## <a name="branches"></a> Branches

* Use GitFlow.

* Choose *short* and *descriptive* names:

  ```shell
  # good
  $ git checkout -b add_new_customer

  # bad - too vague
  $ git checkout -b fix_error
  ```

* Use *underscores* to separate words.

* Use the following naming convention:

 ```shell
 $ git checkout -b feature/32_oauth_migration   # Performs the feature #32
 $ git checkout -b hotfix/15_login_error        # Fix the issue #15
 ```

* When several people are working on the *same* feature, it might be convenient
  to have *personal* feature branches and a *team-wide* feature branch.
  Use the following naming convention:

  ```shell
  $ git checkout -b feature/32/master               # team-wide branch (for task #32)
  $ git checkout -b feature/32/440_oauth_migration  # personal branch to perform the subtask #440
  $ git checkout -b feature/32/441_login_layout     # personal branch to perform the subtask #441
  ```

  Merge at will the personal branches to the team-wide branch.
  Eventually, the team-wide branch will be merged to "develop".

* Delete your branch from the upstream repository after it's merged, unless
  there is a specific reason not to.

  Tip: Use the following command while being on "develop", to list merged
  branches:

  ```shell
  $ git branch --merged | grep -v "\*"
  ```

## <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more readable messages**
that are easy to follow when looking through the **project history**. But also, we can use the git commit messages to
**generate the change log**. (Ok you got us, it's basically [Angular's commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)).

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 72 characters! This allows the message
to be easier to read on GitHub as well as in various git tools.

Samples:

```
docs(changelog): update change log to beta.5
```

```
chore: bump version number & generate CHANGELOG (#12247)
```

```
fix(release): need to depend on latest rxjs & zone.js

The version in our package.json gets copied to the one we publish, and
users need the latest of these.
```

#### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by
the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`,
where the hash is the SHA of the commit being reverted.

#### Type

Must be one of the following:

* **fix**: A bug fix
* **feat**: A new feature
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **build**: Changes that affect the build system or external dependencies (example scopes: rollup, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **chore**: Other changes that don't modify `src` or `test` files

#### Scope
The scope could be anything specifying place of the commit change.

The following is the list of supported scopes:

* **app**
* **customer**
* **contact**
* **task**
* **core**
* **shared**
* **i18n**
* **package**
* **boilerplate**
* **angular**
* **ionic**
* **cordova**
* **lint**

#### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period (.) at the end
* entire length of the commit message must not go over 72 characters

#### Body
* Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
* The body should include the motivation for the change and contrast this with previous behavior.
* It should also provide any pointers to related resources (eg. link to the corresponding issue in a bug tracker):

 ```
 Short (72 chars or fewer) summary of changes

 More detailed explanatory text, if necessary. Wrap it to
 72 characters. In some contexts, the first
 line is treated as the subject of an email and the rest of
 the text as the body.  The blank line separating the
 summary from the body is critical (unless you omit the body
 entirely); tools like rebase can get confused if you run
 the two together.

 Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Use a hyphen or an asterisk for the bullet,
   followed by a single space, with blank lines in
   between

 Source http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html
 ```

* Ultimately, when writing a commit message, think about what you would need to know if you run across the commit in a year from now.

#### Footer
The footer should contain any information about **Breaking Changes** and is also
the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or
two newlines. The rest of the commit message is then used for this.

##### Resolve issues automatically when users push code

Footer should contain a closing reference to an issue, you can configure
[GitHub](https://help.github.com/articles/closing-issues-via-commit-messages/)
to resolve tickets automatically when people push updates through to your GitHub
repository. Users specify commands and issues in a commit message, for example:

```
fix(i18n): change "Tirar" to "Arrastrar"

(resolving #169)
```

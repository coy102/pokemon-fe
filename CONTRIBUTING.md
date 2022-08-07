# Contributing to any Project with this repo

## Found bug / issue?

If you happen to find any bug or issue related to the code, you can raise an issue [here](https://github.com/zebraxid/next-ts-boilerplate/issues/new). Please state the issue description clearly and how to reproduce (if applicable). Don't forget to put a proper related tag to it.

## Code contribution

1. Take a task from [Jira Board](https://zebrax.atlassian.net/secure/RapidBoard.jspa?rapidView=44)
2. Start a new feature in your local repository. We use [git flow](https://danielkummer.github.io/git-flow-cheatsheet/) approach for this.

   ```
   git flow feature start <task_name>
   ```

3. Start coding and follow the [code convention](#code-convention)
4. Push the feature

   ```
   git flow feature publish <task_name>
   ```

5. Create a pull request in GitHub

## Raising a pull request

Once you submit a pull request, you **SHOULD ALWAYS** review it first:

- Make sure you have put the correct JIRA ticket no in your pull request title, e.g ZX-123.
- Confirm that the changes address every part of the JIRA ticket mentioned.
- Make sure you have tested the app and make sure **IT IS RUNNING AS EXPECTED** in your local.
- Make sure you have tested the app, not only for the best case scenario, but also on every possible user flow.
- Review the content for technical accuracy (logic error, ESlint error, console error, typo, [convention](#code-convention), etc).
- Make sure that your pull request is up to date with the base branch.
- If there is any failing SonarQube check, please re-check for any code smell or bugs, and troubleshoot them until they're all passing.
- If the SonarQube check does not show after sonar scanning finished, please re-check if there is any failed unit test in your code, and troubleshoot them until they're all passing.

## Reviewing a pull request

When reviewing a pull request, you should:

- Check every point mentioned above in [Raising a pull request](#raising-a-pull-request).
- Make sure you **UNDERSTAND** clearly the requirement, the flow, and what exactly your peer is doing in the code. Otherwise, please ask.
- If there is any concern, or you know another better approach in doing so, you are most welcome to review and raise it.

## Code convention

### General

- Please make sure ESlint and prettier are running well in your code editor.
- Always use LF line endings.
- Always use `.ts` extension by default, or `.tsx` ONLY if there is any react code.
- Always use clear, non-ambiguous (not overly abbreviated) and relevant variable, function, and file name.
- Avoid using hard-coded constants, if possible. Instead, put it in config / local variable depends on the usage.
- Always use `UpperFirstCamelCase` for Component name.
- Avoid using global `eslint-disable`, disable ESlint line-per-line if really needed.
- Always use native function first, ONLY use helper libraries (`lodash-es`, `classnames`, etc) if there is too much complexity when doing with native JavaScript.
- Avoid using mutating function such as `push`, `pop`, etc.
- Avoid using import all (`import *`), import as you need instead.
- Hooks file return should always be categorized into `data` and `methods`.
- Imports will be categorized into:
  1. import from (in following order): React, React DOM, Prop Types, React Router family, React Redux family
  2. import from another package
  3. import within current project
  4. relative import
  5. import within same folder
- Each import category must be separated with a blank line
- Each import category (no 2 to 5) must be sorted alphabetically using the import source (`from`), and then the variable imported.
- All hooks return, function object parameters, and spreaded variables should also be sorted alphabetically.
- Immediately return if no other statement in the function.

### Unit Test

- Unit test file should always be inside `/tests` folder and reflect the actual directory in the `/src`.
- Unit test file should always end with `.test.ts` or `.test.tsx` ONLY if there is any react code.
- If there is any new helper, hooks, schema, or any new functions in config / utils, please make sure you include the unit test.
- If there is any change in the file that has existing unit test included, please make sure you update the unit test according to your changes.
- Unit test should at least cover best case scenario, empty scenario, and edge cases scenario (if any).

### GraphQL Queries

- Always put `query` before `mutation`.
- Always use related query field name as the query name, unless there is similarity with the main query but with a different purpose, e.g. `mlExpDetail` are used in both `mlExpDetail` and experiment detail summary, thus in experiment detail summary, we will use `mlExpResultSummary` instead.
- Always use `lowerFirstCamelCase` for `query`, `mutation`, and `fragment` name.

### Styles

- Always use singular term instead of plural term (`useStyle` vs `useStyles`, `style` vs `styles`), both in variable naming for style file, and the file name.
- All import should be from `@material-ui/core/styles` when possible (`createStyles`, `makeStyles`, `Theme`).
- Only put type assertion `<Theme, Props>` if there is props needed in the style file.
- Always put type in the function parameter, e.g `(theme: Theme) => {}`.
- Always use theme object first when possible (font weight, palette color), otherwise colors can be imported from `~/styles/theme`.
- Before adding new colors, please make sure it does not exist yet in `frontend-kit`.

 # Git Commit Conventions
These are the conventions for git commits made for this repo, Type is mandatory for all commits, optional scope defines where changes/additions originate.
All Commits follow rules stated below.

## Rules

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Use the body to explain what and why vs. how

---

## Commit Message Stucture

```
<type>[optional scope]: <Subject Line>

[optional body]

[optional footer]
```

Type is mandetory, Pick a respective type listed below.

## Commit Message Types

* Fix
* Feat
* Chore
* Docs
* Style
* Refactor
* Test
* Revert

## Example Commit Message

```
$ git commit -m "Fix: Typo in introduction to user guide"
```

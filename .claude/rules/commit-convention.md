# Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Format
```
<type>[optional scope]: <description>

[optional body]
[optional footer]
```

## Types
| Type | Use |
|------|-----|
| `feat` | New feature (SemVer MINOR) |
| `fix` | Bug fix (SemVer PATCH) |
| `docs` | Documentation only |
| `refactor` | Code change, no feature/fix |
| `test` | Adding or updating tests |
| `chore` | Build, deps, tooling |

## Breaking Changes
Append `!` after type or add `BREAKING CHANGE:` footer → SemVer MAJOR.

## Examples
```
feat(auth): add login page
fix(api): handle 404 on missing anime
feat(routing)!: migrate to Next.js App Router

BREAKING CHANGE: removes React Router entirely
```

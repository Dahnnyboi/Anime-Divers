# PR Convention

## Title
Same format as commits:
```
<type>(scope): short description
```
Examples:
```
feat(routing): migrate React Router to Next.js App Router
fix(scss): replace InputGroup.Append for react-bootstrap v2
feat(api)!: remove Redux and Axios
```

## Body
```markdown
## What
- What changed and why (bullets)

## How
- Key implementation decisions
- e.g. why server vs client component, why a package was chosen

## Testing
- Manual steps or commands to verify the change works
```

## Rules
- One batch = one PR
- No closing keywords (`closes #123`) — no ticketing system
- Breaking changes get `!` in the title
- Open as Draft while in progress; mark Ready when Notion batch checklist passes

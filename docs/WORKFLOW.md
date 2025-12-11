# Git Workflow (ACP & PR)

## Goals

- Keep `main` clean and production-ready.
- Develop on feature branches and merge via PRs.

## Branching

- Create from `main`: `feat/*`, `fix/*`, `chore/*`.
- Example: `feat/footer-mastery`.

## ACP Loop

```bash
# work on feature branch
git add -A
git commit -m "feat: implement footer"
git push -u origin HEAD
```

## Pull Request

- Open PR: feature branch → `main`.
- Prefer squash merge.
- After merge: `git switch main && git pull --ff-only`.

## Cleanup

```bash
git branch -D feat/footer-mastery
git push origin --delete feat/footer-mastery
```

## Notes

- Do not commit directly to `main`.
- `workbench/` contains learning docs and architecture; include it in repo, but avoid shipping unfinished experiments.

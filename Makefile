.PHONY: lint acp acp_branch

lint:
	npm run lint

acp:
	npm run lint && git add . && git commit -m "$(m)" && git push

acp_branch:
	npm run lint && git add . && git commit -m "$(m)" && git push -u origin $$(git branch --show-current)

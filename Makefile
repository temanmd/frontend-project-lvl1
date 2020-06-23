install:
	npm install

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

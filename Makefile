help:
	cat Makefile

watch:
	watchmedo shell-command --command nbdoc_build --pattern="*.ipynb" --recursive --drop

nb: .FORCE
	jupyter lab docs

update: .FORCE
	nbdoc_update
	nbdoc_build

test:
	nbdoc_test
	yarn run build

docs: .FORCE
	yarn start

build: .FORCE
	yarn build

deploy: .FORCE
	GIT_USER="hamelsmu" yarn deploy

install: install-docs
	pip install -Ur requirements.txt
	jupyter labextension install @jupyterlab/vega5-extension

install-docs: .FORCE
	npm install -g npm@">=8.4.1"
	npm install --global yarn
	yarn install --frozen-lockfile

.FORCE:

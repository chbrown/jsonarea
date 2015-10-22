BIN := node_modules/.bin

all: index.js

$(BIN)/babel:
	npm install

index.js: index.jsx $(BIN)/babel
	BABEL_ENV=production $(BIN)/babel --stage 0 $< >$@

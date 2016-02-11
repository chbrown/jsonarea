BIN := node_modules/.bin
TYPESCRIPT := $(shell jq -r '.files[]' tsconfig.json | grep -Fv .d.ts)

all: index.js index.d.ts

$(BIN)/tsc:
	npm install

%.js %.d.ts: %.tsx $(BIN)/tsc
	$(BIN)/tsc -d

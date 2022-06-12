include ../makefiles/env.mk

init-tsconfig:
	npx tsc --init

start:
	${activate_env}; yarn start

clean:
	rm -rf .parcel-cache node_modules dist
	${activate_env}; yarn cache clean

install:
	${activate_env}; yarn

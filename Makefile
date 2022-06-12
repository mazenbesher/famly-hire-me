# the only requirement is conda
include ./makefiles/env.mk

create-env:
	conda create -n ${env_name} nodejs=16

enable-yarn:
	${activate_env}; corepack enable

init-frontend:
	mkdir frontend
	${activate_env}; cd frontend; yarn init -y

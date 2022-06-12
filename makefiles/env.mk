env_name = node16
SHELL=/bin/bash
activate_env = source $$(conda info --base)/etc/profile.d/conda.sh ; conda activate ; conda activate ${env_name}

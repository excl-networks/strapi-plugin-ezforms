#!/bin/bash
echo PS1='\"$ \"' >> ~/.bashrc
cd /workspaces
yarn create strapi-app strapi-wrapper --quickstart --no-run
cd strapi-wrapper/config
cp -r /workspaces/strapi-plugin-ezforms/.devcontainer/plugins.js .
mkdir -p /workspaces/strapi-wrapper/src/plugins
# symlink /workspaces/strapi-plugin-ezforms to /workspaces/strapi-wrapper/src/plugins/strapi-plugin-ezforms
ln -s /workspaces/strapi-plugin-ezforms /workspaces/strapi-wrapper/src/plugins/strapi-plugin-ezforms 
cd /workspaces/strapi-plugin-ezforms
yarn install

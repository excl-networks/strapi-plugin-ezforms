#!/bin/bash
cd /workspaces
yarn create strapi-app strapi-wrapper --quickstart --no-run
cd strapi-wrapper/config
cp -r /workspaces/strapi-plugin-ezforms/.devcontainer/config/plugins.js .
mkdir -p /workspaces/strapi-wrapper/src/plugins
# symlink /workspaces/strapi-plugin-ezforms to /workspaces/strapi-wrapper/src/plugins/strapi-plugin-ezforms
ln -s /workspaces/strapi-plugin-ezforms /workspaces/strapi-wrapper/src/plugins/strapi-plugin-ezforms 
cd /workspaces/strapi-wrapper
yarn develop

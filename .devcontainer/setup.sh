#!/bin/bash
cd /workspaces
yarn create strapi-app strapi-wrapper --quickstart --no-run
cd strapi-wrapper/config
cp -r /workspaces/strapi-plugin-ezforms/.devcontainer/config/plugins.js .
mkdir -p /workspaces/strapi-wrapper/src/plugins
mv /workspaces/strapi-plugin-ezforms/ /workspaces/strapi-wrapper/src/plugins/strapi-plugin-ezforms
cd /workspaces/strapi-wrapper
yarn develop

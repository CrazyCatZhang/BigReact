#!/usr/bin/env bash
echo "┏━━━ 🕵️‍♀️ LINT: eslint src --ext ts,js,tsx,jsx ━━━━━━━"
yarn eslint --ext .js,.ts,.jsx,.tsx --fix --quiet ./packages
# lerna run lint --stream --concurrency 1
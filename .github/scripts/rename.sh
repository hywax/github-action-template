#!/usr/bin/env bash

set -euo pipefail

GITHUB_REPOSITORY=${1?Error: Please pass username/repo, e.g. hywax/github-actions-template}
GITHUB_REPOSITORY_OWNER=${2?Error: Please pass username, e.g. hywax}
GITHUB_REPOSITORY_DESCRIPTION=${3:-""} # If null then replace with empty string

echo "GITHUB_REPOSITORY: $GITHUB_REPOSITORY"
echo "GITHUB_REPOSITORY_OWNER: $GITHUB_REPOSITORY_OWNER"
echo "GITHUB_REPOSITORY_DESCRIPTION: $GITHUB_REPOSITORY_DESCRIPTION"

JQ_OUTPUT=`jq \
  --arg NAME "@$GITHUB_REPOSITORY" \
  --arg AUTHOR_NAME "$GITHUB_REPOSITORY_OWNER" \
  --arg URL "https://github.com/$GITHUB_REPOSITORY_OWNER" \
  --arg DESCRIPTION "$GITHUB_REPOSITORY_DESCRIPTION" \
  '.name = $NAME | .description = $DESCRIPTION | .author |= ( .name = $AUTHOR_NAME | .url = $URL )' \
  package.json
`

echo "$JQ_OUTPUT" > package.json

sedi () {
  sed --version >/dev/null 2>&1 && sed -i -- "$@" || sed -i "" "$@"
}

sedi "s|hywax/github-actions-template|"${GITHUB_REPOSITORY}"|;" "README.md"
sedi "s|Hywax|"${GITHUB_REPOSITORY_OWNER}"|;" "LICENSE.md"

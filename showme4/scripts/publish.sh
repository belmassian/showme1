source $OKTA_HOME/$REPO/scripts/setup.sh

REGISTRY="https://artifacts.aue1d.saasure.com/artifactory/api/npm/npm-okta"

export TEST_SUITE_TYPE="build"

if [ -n "$action_branch" ];
then
  echo "Publishing from bacon task using branch $action_branch"
  TARGET_BRANCH=$action_branch
else
  echo "Publishing from bacon testSuite using branch $BRANCH"
  TARGET_BRANCH=$BRANCH
fi

if ! npm run ci-update-package -- --branch ${TARGET_BRANCH}; then
  echo "ci-update-package failed! Exiting..."
  exit $FAILED_SETUP
fi

# Remove shrinkwrap before publishing - in new versions of npm the shrinkwrap
# is included in package.json (which results in extraneous modules downstream)
rm $OKTA_HOME/$REPO/npm-shrinkwrap.json
if ! npm publish --registry ${REGISTRY}; then
  echo "npm publish failed! Exiting..."
  exit $PUBLISH_ARTIFACTORY_FAILURE
fi

DATALOAD=$(npm run ci-pkginfo:dataload --silent)
if ! artifactory_curl -X PUT -u ${ARTIFACTORY_CREDS} ${DATALOAD} -v -f; then
  echo "artifactory_curl failed! Exiting..."
  exit $PUBLISH_ARTIFACTORY_FAILURE
fi

exit $SUCCESS

#!/usr/bin/env bash

git rev-parse --show-toplevel

npm run test:once
SUCCESS=$?

if [ $SUCCESS -eq 0 ]
then
  npm run build
  firebase deploy

  echo " ____    _   _    ____    ____   _____   ____    ____  "
  echo "/ ___|  | | | |  / ___|  / ___| | ____| / ___|  / ___| "
  echo "\___ \  | | | | | |     | |     |  _|   \___ \  \___ \ "
  echo " ___) | | |_| | | |___  | |___  | |___   ___) |  ___) |"
  echo "|____/   \___/   \____|  \____| |_____| |____/  |____/ "
fi

exit $SUCCESS

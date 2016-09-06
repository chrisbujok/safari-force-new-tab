#!/usr/bin/env sh

# cd because of impossibility to run xarjs for .safariextension outside current working directory
cd dist
xarjs create force-new-tab.safariextz --cert ../certs/cert.pem --cert ../certs/apple-intermediate.pem --cert ../certs/apple-root.pem --private-key ../certs/privatekey.pem force-new-tab.safariextension

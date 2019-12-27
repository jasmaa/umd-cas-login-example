# UMD CAS Login Example

Simple PoC demonstration of a web app using UMD CAS login system

**NOTE**: Since CAS needs a URL as a service, the example
needs to redirect to a dummy url. To test the example, copy the GET params
from the redirect and paste them in as `localhost:3000/login?<params here>`

## Setup and Run
    yarn install
    node ./server.js

## More info
  - https://umd.service-now.com/kb_view.do?sysparm_article=KB0013650
  - https://apereo.github.io/cas/4.2.x/protocol/CAS-Protocol-Specification.html
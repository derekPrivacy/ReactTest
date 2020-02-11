This ReactTest project serve as front-end GUI interface for the NodejsTest project

1. set up NodejsTest project according to the instruction given in https://github.com/derekPrivacy/NodejsORM readme.md

2. pull this repo and do command 
   `yarn`  \
   in the same directory , this will install all the dependency and pacakges required to run

3.  `yarn start` \
    do it at the same directory , then should see the console message:
    Starting the development server...
    followed by http://localhost:3000/ opened using default browser

4. now it's ready to try this react project 

5. For Unit test , it use react in build testing library and jest which already been composed into this project , so in order to run all the tests in /src/atom/__test__/Button.test.js just simply do command  `yarn test` or to test individual question : \
        >  `yarn test -t 'reactTest1'` \
        >  `yarn test -t 'reactTest2'`

it's good to keep monitor the api endpoint result in http://localhost/phpmyadmin/ which provides GUI interface for mysql database

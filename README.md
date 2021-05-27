## PRISMA + EXPRESS + MYSQL boilerplate project

##### Project creation and install
``` bash
$ npm install
$ node src/index.js
```


##### Database creation and migration

``` bash
$ npx prisma migrate dev --create-only 
```

##### Example GraphQL query request
```
curl --location -g --request GET 'http://localhost:3000/graphql?query={users{email,firstName,lastName}}'
```

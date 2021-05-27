import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import schema from './schema/index.js'

var app = express();


app.use('/graphql', graphqlHTTP({  
  schema,
}));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash.merge';
import userSchema from './user/index.js'

// const roleSchema = require('./role')

// Multiple files to keep your project modularised
const schema = makeExecutableSchema({
    typeDefs: [
        userSchema.typeDefs, // First defines the type Query
        // roleSchema.typeDefs, // Others extends type Query
    ],
    resolvers: merge(
        userSchema.resolvers,
        // roleSchema.resolvers,
    )
})

export default schema;
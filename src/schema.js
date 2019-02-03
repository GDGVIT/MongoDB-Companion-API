const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        listCollections: [String!]
    }
    type Mutation {
        createCollection(collectionName: String): String
    }
`;
module.exports = typeDefs;
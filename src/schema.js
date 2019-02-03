const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        collections: [Collection!]
        documents(collectionName: String): [Document]
    }
    type Mutation {
        createCollection(collectionName: String): String
    }
    type Collection {
        name: String!
        documents: [Document]
    }
    type Document {
        data: String
    }
`;
module.exports = typeDefs;
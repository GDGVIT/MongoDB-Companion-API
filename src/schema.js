const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        collection(name: String): Collection
        collections: [Collection!]
    }
    type Mutation {
        createCollection(name: String): Collection
    }
    type Collection {
        name: String!
        document(id: String): Document
        documents: [Document]
        createDocument(data: String): Document
        deleteDocument(id: String): String
    }
    type Document {
        data: String
    }
`;

module.exports = typeDefs;
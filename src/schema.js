const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        collection(name: String): Collection
        collections: [Collection!]
    }
    type Mutation {
        createCollection(name: String): Collection
        createDocument(collectionName: String, data: String): Document
        editDocument(collectionName: String, documentId: ID, data: String): String
        deleteDocument(collectionName: String, documentId: ID): String
    }
    type Collection {
        name: String!
        document(id: String): Document
        documents: [Document]
    }
    type Document {
        data: String
    }
`;

module.exports = typeDefs;
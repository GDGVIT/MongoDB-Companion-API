const { listCollections, createCollection } = require('../controllers/collection');
const { listDocuments } = require('../controllers/document');

module.exports = {
    Query: {
        collections: async(_, {}, context) => {
            return await listCollections();
        },
        documents: async(_, {collectionName}, context) => {
            return await listDocuments(collectionName);
        },
    },
    Mutation: {
        createCollection: async(_, {collectionName}, context) => {
            return await createCollection(collectionName);
        },
    },
    Collection: {
        documents: async(collection, {}, context) => {
            return await listDocuments(collection.name);
        },
    }
}
const { listCollections, createCollection } = require('../controllers/collection');
const { listDocuments } = require('../controllers/document');

module.exports = {
    Query: {
        listCollections: async(_, {}, context) => {
            return await listCollections();
        },
        listDocuments: async(_, {collectionName}, context) => {
            return await listDocuments(collectionName);
        },
    },
    Mutation: {
        createCollection: async(_, {collectionName}, context) => {
            return await createCollection(collectionName);
        },
    }
}
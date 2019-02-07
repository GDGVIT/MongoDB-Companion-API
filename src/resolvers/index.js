const { getCollection, listCollections, createCollection } = require('../controllers/collection');
const { listDocuments, createDocument, deleteDocument } = require('../controllers/document');


module.exports = {
    Query: {
        collection: async(_, {name}, {database}) => {
            return await getCollection(database, name);
        },
        collections: async(_, {name}, {database}) => {
            return await listCollections(database, name);
        },
    },
    Mutation: {
        createCollection: async(_, {name}, {database}) => {
            return await createCollection(database, name);
        },
    },
    Collection: {
        documents: async(collection, {}, {database}) => {
            return await listDocuments(database, collection.name);
        },
        createDocument: async(collection, {data}, {database}) => {
            return await createDocument(database, collection.name, data);
        },
        deleteDocument: async(collection, {id}, {database}) => {
            return await deleteDocument(database, collection.name, id);
        },
    }
}
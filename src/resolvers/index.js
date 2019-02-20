const { getCollection, listCollections, createCollection, deleteCollection } = require('../controllers/collection');
const { getDocument, listDocuments, createDocument, editDocument, deleteDocument } = require('../controllers/document');

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
        deleteCollection: async(_, {collectionName}, {database}) => {
            return await deleteCollection(database, collectionName);
        },
        createDocument: async(_, {collectionName, data}, {database}) => {
            return await createDocument(database, collectionName, data);
        },
        editDocument: async(_, {collectionName, documentId, data}, {database}) => {
            const newDocumentData = JSON.parse(data);
            delete newDocumentData['_id'];
            return await editDocument(database, collectionName, documentId, newDocumentData);
        },
        deleteDocument: async(_, {collectionName, documentId}, {database}) => {
            return await deleteDocument(database, collectionName, documentId);
        },
    },
    Collection: {
        document: async(collection, {id}, {database}) => {
            return Object.assign({}, await getDocument(database, collection.name, id), {collectionName: collection.name});
        },
        documents: async(collection, {}, {database}) => {
            return await listDocuments(database, collection.name);
        },
    }
}
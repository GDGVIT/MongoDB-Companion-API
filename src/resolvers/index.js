const { getCollection, listCollections, createCollection } = require('../controllers/collection');
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
    },
    Collection: {
        document: async(collection, {id}, {database}) => {
            return Object.assign({}, await getDocument(database, collection.name, id), {collectionName: collection.name});
        },
        documents: async(collection, {}, {database}) => {
            return await listDocuments(database, collection.name);
        },
        createDocument: async(collection, {data}, {database}) => {
            return await createDocument(database, collection.name, data);
        },
    },
    Document: {
        editDocument: async(document, {data}, {database}) => {
            const documentData = JSON.parse(document.data);
            const newDocumentData = JSON.parse(data);
            delete newDocumentData['_id'];
            console.log(newDocumentData);
            return await editDocument(database, document.collectionName, documentData._id, newDocumentData);
        },
        deleteDocument: async(document, {}, {database}) => {
            const documentData = JSON.parse(document.data);
            return await deleteDocument(database, document.collectionName, documentData._id);
        },
    }
}
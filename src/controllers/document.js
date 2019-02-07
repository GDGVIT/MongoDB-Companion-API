const { MongoClient } = require('mongodb');
const mongodbUri = 'mongodb://test:test123@ds145563.mlab.com:45563/moneyledger';

module.exports.listDocuments = async (database, collectionName) => {

    try {
        const documentCursor = database.collection(collectionName).find();
        const documentArray = await documentCursor.toArray();
        return documentArray.map((document) => {
            return {
                data: JSON.stringify(document)
            };
        });

    } catch(e) {
        console.error(e);
        return `Error: displaying documents`;
    }
}

module.exports.createDocument = async (database, collectionName, data) => {

    try {

        const dataObj = JSON.parse(data);
        const insertedRes = await database.collection(collectionName).insertOne(dataObj);
        console.log(`Added document with _id: ${insertedRes.insertedId} into ${collectionName}`);
        return {
            data: JSON.stringify(insertedRes.ops['0'])
        };
    } catch(e) {
        console.error(e);
        return `Error: creating document`;
    }
    
}

module.exports.deleteDocument = async (database, collectionName, id) => {

    try {
        const removeRes = await database.collection(collectionName).deleteOne({_id: id});
        console.log(`Deleted document with _id: ${id} in ${collectionName}`);
        return id;

    } catch(e) {
        console.error(e);
        return `Error: removing document`;
    }
    
}
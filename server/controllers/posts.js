import admin from 'firebase-admin'
import randomstring from 'randomstring'
import { readFile } from 'fs/promises';
const ServiceAccount = JSON.parse(await readFile(new URL('../ServiceAccountKey.json', import.meta.url)));

admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount),
    databaseURL: "https://blog-a346f.firebaseio.com"
});
const db = admin.firestore();

export const getPosts = async (req, res) => {
    try {
        
        let posts = [];
        let query = await db.collection('posts').get();
        query.forEach(doc => {
            // console.log(doc.data());
            posts.push(doc.data());
        });
        res.status(200).json(posts);

    } catch (error) {
        res.status(404).json({message: error});
    }
}

export const createPost = async (req, res) => {
    try {
        
        const post = req.body;
        const id = randomstring.generate(20);
        await db.collection('posts').doc(id).set({...post, id:id, dateCreated:admin.firestore.Timestamp.fromDate(new Date())});

    } catch (error) {
        res.status(409).json({message: error});
    }
}

export const deletePost = async (req, res) => {
    try {
        
        const { id } = req.params;
        await db.collection('posts').doc(id).delete();

    } catch (error) {
        res.status(409).json({message: error});
    }
}
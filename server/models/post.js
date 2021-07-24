import * as admin from 'firebase-admin'

export class Post{
    constructor(user, title, body){
        this.user = user;
        this.title = title;
        this.body = body;
        this.dateCreated = admin.firestore.Timestamp.fromDate(new Date.now());
    }
}
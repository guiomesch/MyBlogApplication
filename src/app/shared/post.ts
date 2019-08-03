export class Post {
    title: string;
    content: string;
    loveIts: number = 0;
    created_at: Date;

    constructor() {
        this.created_at = new Date();
    }
}
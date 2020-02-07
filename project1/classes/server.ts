import express from 'express';

export default class Server{
    public app : express.Application;
    public port: number = 8000;

    constructor(){
        this.app = express();
    }

    start(callback:any){
        this.app.listen(this.port, callback);
    }
}

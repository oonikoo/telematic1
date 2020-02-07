import Server from "./classes/server";
import { NestFactory } from '@nestjs/core';
import {createConnection, Connection, ConnectionManager, getConnectionManager} from "typeorm";
import bodyParser from 'body-parser';
import mysql from 'mysql';
import { AppModule } from "./modules/app.module";
import {NestApplication} from "@nestjs/core";



async function bootstrap() {


    const app = await NestFactory.create(AppModule, {
        cors:true,
    });

    await app.listen(8001);
}

bootstrap();
/*
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('DB connected as id ' + connection.threadId);
});

connection.end();
*/

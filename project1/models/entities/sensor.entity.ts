import {Column, Entity, ObjectIdColumn, ObjectID} from 'typeorm';

@Entity()
export class Sensor{
    @ObjectIdColumn()
    id?: ObjectID;

    @Column()
    latitude?: number;

    @Column()
    longitude?: number;

    @Column()
    temperature?: number;

    @Column()
    username?: string;
}

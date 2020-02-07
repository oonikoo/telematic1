import {Column, Entity, ObjectIdColumn, ObjectID} from 'typeorm';

export enum UserRole {
    SENSOR = 'sensor',
    BASIC = 'basic',
}

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    password?: string;

    @Column({ unique: true })
    email?: string;

    @Column()
    name?: string;

    @Column()
    salt?: string;

    @Column({
        type: 'enum',
        enum: UserRole
    })
    role: UserRole;
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Defining an entity allows a model to be created in the database
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}

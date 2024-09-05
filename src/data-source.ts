import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  // We don't need this as we are using sqlite
  // host: "localhost",
  // port: 5432,
  // username: "test",
  // password: "test",
  database: "db.sqlite",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});

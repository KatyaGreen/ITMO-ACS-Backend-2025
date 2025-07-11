import {DataSource} from 'typeorm';
import {SETTINGS} from "./settings";

export const dataSource = new DataSource({
    type: 'postgres',
    host: SETTINGS.DB_HOST,
    port: SETTINGS.DB_PORT,
    username: SETTINGS.DB_USER,
    password: SETTINGS.DB_PASSWORD,
    database: SETTINGS.DB_NAME,
    entities: ['src/models/*.ts'],
    logging: ["schema", "error"],
    synchronize: true,
});

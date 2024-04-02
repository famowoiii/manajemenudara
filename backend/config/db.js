import { Sequelize } from "sequelize";

const db = new Sequelize("tugasmku", "root", "", {
  host: "",
  dialect: "mysql",
});

export default db;

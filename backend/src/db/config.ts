import { Sequelize } from "sequelize-typescript";
const sequelizeDB = new Sequelize({
  database: "apiPulse",
  username: "razvan",
  password: "razvan",
  host: "localhost",
  dialect: "mysql", // sau altul, în funcție de baza de date folosită
  models: ["/models"], // specifică locația modelelor Sequelize
});

export default sequelizeDB;

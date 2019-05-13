import * as mongoose from "mongoose";
import config from "../../config";

export function connect() {
  try {
    console.log("Conectando ao MongoDB");
    mongoose.connect(config.MONGODB_URL, {
      auth: {
        user: config.MONGODB_AUTH_USERNAME,
        password: config.MONGODB_AUTH_PASSWORD
      },
      useNewUrlParser: true
    });

    const db = mongoose.connection;

    db.on("error", err => {
      console.error("connection error:");
      throw err;
    });
    db.once("open", function() {
      console.log("Conectado ao MongoDB");
    });
  } catch (err) {
    setTimeout(this.connect(), 5000);
  }
}

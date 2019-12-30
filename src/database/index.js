import Mongoose from 'mongoose';

class Database {
  constructor() {
    this.init();
  }

  init() {
    const MONGO_URL = `mongodb://${process.env.APP_MONGO_USER}:${process.env.APP_MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.APP_MONGO_DB}`;
    this.mongoConnection = Mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
  }
}

export default new Database();

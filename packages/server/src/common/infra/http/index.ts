import mongoose from 'mongoose';
import 'dotenv/config';

import app from '@common/infra/http/app';
import authConfig from '@config/auth';
import mongoConfig from '@config/mongo';

const start = async () => {
  if (!authConfig.jwt.secret) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!mongoConfig.db) {
    throw new Error('MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(mongoConfig.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error(err);
  }

  app.listen(process.env.SERVER_PORT || 3333, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}!`);
  });
};

start();

import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://awan72ra:rREQ942LiFc12o3l@cluster0.ekkd2gq.mongodb.net/food-del`
    )
    .then(() => console.log('DB Connectted'));
};

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  image: String,
  provider: String,
  providerAccountId: String,
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);

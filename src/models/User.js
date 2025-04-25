import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  image: String,
  provider: {
    type: String,
    default: 'website',
  },
  providerAccountId: {
    type: String,
    default: '',
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);

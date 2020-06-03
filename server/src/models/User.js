const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const UserSchema = new Schema({
  name: {
    type: Schema,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 60,
  },
  username: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    minlength: 10,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true,
    minlength: 5,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    select: false,
  },
  phone: {
    type: String,
    unique: true,
    trim: true,
    minlength: 10,
    maxlength: 15,
  },
  dob: {
    type: Date,
    default: Date.now,
  },
  doj: {
    type: Date,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
    select: false,
  },
  isUserArchived: {
    type: Boolean,
    default: false,
    select: false,
  },
  isUserVerified: {
    type: Boolean,
    default: false,
    select: false,
  },
  isUserPremium: {
    type: Boolean,
    default: false,
    select: false,
  },
}, {
  timestamps: true,
  strict: true,
});

module.exports = mongoose.model('User', UserSchema);

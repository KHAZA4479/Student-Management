import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cohort: {
    type: String,
    required: true,
  },
  courses: [{
    type: String,
    required: true,
  }],
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
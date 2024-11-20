export default {
  createAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    require: true,
    default: Date.now,
  },
};

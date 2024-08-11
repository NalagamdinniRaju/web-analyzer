const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  url: String,
  performanceScore: Number,
  loadTime: Number,
  firstContentfulPaint: Number,
  timeToInteractive: Number,
  largestContentfulPaint: Number,
  totalPageSize: Number,
  totalRequests: Number,
  timeToFirstByte: Number,
  cumulativeLayoutShift: Number,
  firstInputDelay: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Report', ReportSchema);
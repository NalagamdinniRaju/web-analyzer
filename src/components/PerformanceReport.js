
import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import MetricCircle from './MetricCircle';
import MetricCard from './MetricCard';

function PerformanceReport({ report }) {
  const downloadReportAsPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text('Performance Report', 14, 22);

    // Prepare report data for the table, excluding the _id field
    const reportData = [
      ['URL', report.url],
      ['Performance Score', report.performanceScore],
      ['Load Time (s)', report.loadTime.toFixed(2)],
      ['First Contentful Paint (s)', report.firstContentfulPaint.toFixed(2)],
      ['Time to Interactive (s)', report.timeToInteractive.toFixed(2)],
      ['Largest Contentful Paint (s)', report.largestContentfulPaint.toFixed(2)],
      ['Total Page Size (KB)', report.totalPageSize.toFixed(2)],
      ['Total Requests', report.totalRequests],
      ['Time to First Byte (ms)', report.timeToFirstByte.toFixed(2)],
      ['Cumulative Layout Shift', report.cumulativeLayoutShift.toFixed(4)],
      ['First Input Delay (ms)', report.firstInputDelay.toFixed(2)],
      ['Created At', new Date(report.createdAt).toLocaleString()],
    ];

    // AutoTable settings for styling
    doc.autoTable({
      head: [['Metric', 'Value']],
      body: reportData,
      startY: 30,
      theme: 'striped', // You can also use 'grid', 'plain', or customize it
      styles: {
        fontSize: 12,
        cellPadding: 5,
      },
      headStyles: {
        fillColor: '#4ecdc4',
        textColor: '#ffffff',
      },
      alternateRowStyles: {
        fillColor: '#f2f2f2',
      },
    });

    // Save the PDF
    doc.save('performance-report.pdf');
  };

  return (
    <div className="performance-report">
      <h2>Performance Report</h2>
      <div className="metrics-container">
        <div className="circular-metrics">
          <MetricCircle
            value={report.performanceScore}
            max={100}
            label="Performance Score"
            color="#ff6b6b"
          />
          <MetricCircle
            value={report.loadTime}
            max={10}
            label="Load Time (s)"
            color="#4ecdc4"
          />
          <MetricCircle
            value={report.firstContentfulPaint}
            max={5}
            label="FCP (s)"
            color="#45b7d1"
          />
        </div>
        <div className="card-metrics">
          <MetricCard title="Total Page Size" value={report.totalPageSize.toFixed(2)} unit="KB" />
          <MetricCard title="Total Requests" value={report.totalRequests} unit="" />
          <MetricCard title="TTFB" value={report.timeToFirstByte.toFixed(2)} unit="ms" />
          <MetricCard title="Largest Contentful Paint" value={report.largestContentfulPaint.toFixed(2)} unit="s" />
          <MetricCard title="Cumulative Layout Shift" value={report.cumulativeLayoutShift.toFixed(4)} unit="" />
          <MetricCard title="First Input Delay" value={report.firstInputDelay.toFixed(2)} unit="ms" />
        </div>
      </div>
      <button className="download-report-button" onClick={downloadReportAsPDF}>
        Download Report as PDF
      </button>
    </div>
  );
}

export default PerformanceReport;

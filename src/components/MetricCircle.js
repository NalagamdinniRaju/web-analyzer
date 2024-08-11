import React from 'react';

function MetricCircle({ value, max, label, color }) {
  const percentage = Math.min((value / max) * 100, 100);
  const strokeDasharray = `${percentage}, 100`;

  return (
    <div className="metric-circle">
      <svg viewBox="0 0 36 36" className="circular-chart">
        <path
          className="circle-bg"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle"
          strokeDasharray={strokeDasharray}
          style={{ stroke: color }}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35" className="percentage">{value.toFixed(2)}</text>
      </svg>
      <span className="label">{label}</span>
    </div>
  );
}

export default MetricCircle;
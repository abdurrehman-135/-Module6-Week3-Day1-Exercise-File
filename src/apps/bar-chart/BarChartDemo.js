import React from "react";
import BarChart from "./BarChart";

function BarChartDemo() {
  return (
    <section className="page-panel">
      <div className="page-copy">
        <h2>Animated Bar Chart</h2>
        <p>
          This preserves the original add, remove, and update transitions from
          the `react-move` sandbox, now hosted inside a routed shell.
        </p>
      </div>

      <div className="demo-shell scroll-shell">
        <BarChart />
      </div>
    </section>
  );
}

export default BarChartDemo;


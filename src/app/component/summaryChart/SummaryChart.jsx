import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import styles from "./SummaryChart.module.css";
import { summaryChartData } from "./Data";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement);

const SummaryChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setChartData({
      labels: selected.map((data) => data.time),
      datasets: [
        {
          label: "",
          data: selected.map((data) => data.summary),
          backgroundColor: "#5570F1",
          maxBarThickness: 10,
          borderWidth: 0,
        },
      ],
    });
    setChartOptions({
      responsive: false,
      spacing: 10,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          enabled: false,
        },
      },
    });
  }, [selected]);

  useEffect(() => {
    if (summaryChartData) {
      setSelected(summaryChartData.week);
    } else {
      setSelected([]);
    }
  }, []);

  function timeStampFunc(e) {
    setSelected(summaryChartData[e.target.value]);
  }
  return (
    <div className={styles.summary_chart}>
      <div className={styles.summaryChart_heading}>
        <div className={styles.summaryChart_heading}>
          <h2>Summary</h2>
          <div className={styles.sales}>
            <select className={styles.dropdown}>
              <option value="sales">Sales</option>
              <option value="purchase">Purchase</option>
            </select>
          </div>
        </div>
        <div>
          <select className={styles.dropdown} onChange={timeStampFunc}>
            <option value="week">Last 7 days</option>
            <option value="month">Last 30 days</option>
          </select>
        </div>
      </div>
      <div className={styles.chart}>
        <Bar options={chartOptions} data={chartData} />
      </div>
    </div>
  );
};

export default SummaryChart;

import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { BarChartData } from "./Data";
import styles from "./BarChart.module.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const BarChart = () => {
  const [selected, setSelected] = useState([]);
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: "",
      datasets: [
        {
          label: selected.map((data) => data.acquisition),
          data: [
            selected.map((data) => data.acquisition),
            selected.map((data) => data.purchase),
            selected.map((data) => data.retention),
          ],
          backgroundColor: ["#5570F1", "#FFCC91", "#97A5EB"],
          borderWidth: 0,
        },
      ],
    });
    setChartOptions({
      cutout: "75%",
      offset: 0,
      spacing: 0,
      plugins: {
        legend: { display: false, position: "bottom" },
        tooltip: {
          enabled: true,
        },
      },
    });
  }, [selected]);

  useEffect(() => {
    if (BarChartData) {
      setSelected(BarChartData.week);
    } else {
      setSelected([]);
    }
  }, []);

  function timeStampFunc(e) {
    setSelected(BarChartData[e.target.value]);
  }

  return (
    <div className={styles.barChart}>
      <div className={styles.barChart_heading}>
        <div>
          <h2>Marketting</h2>
        </div>
        <div>
          <select className={styles.dropdown} onChange={timeStampFunc}>
            <option value="week">This week</option>
            <option value="month">This month</option>
          </select>
        </div>
      </div>
      <div className={styles.barChart_legend}>
        <h3>
          <span className={styles.dot1}></span> Acquisition
        </h3>
        <h3>
          <span className={styles.dot2}></span> Purchase
        </h3>
        <h3>
          <span className={styles.dot3}></span> Retention
        </h3>
      </div>
      <div className={styles.doughnut_chart}>
        <Doughnut options={chartOptions} data={chartData} />
      </div>
    </div>
  );
};

export default BarChart;

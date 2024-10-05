import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashBoardCharts = ({ users, agendas }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          font: {
            family: "'Bai Jamjuree', 'sans-serif'",
            weight: "bold",
          },
        },
      },
      tooltip: {
        titleFont: {
          family: "'Bai Jamjuree', 'sans-serif'",
        },
        bodyFont: {
          family: "'Bai Jamjuree', 'sans-serif'",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: "'Bai Jamjuree', 'sans-serif'",
            weight: "bold",
          },
        },
      },
      y: {
        ticks: {
          font: {
            family: "'Bai Jamjuree', 'sans-serif'",
            weight: "bold",
          },
        },
      },
    },
  };

  const data = {
    labels: ["Total Users", "Total Agendas"],
    datasets: [
      {
        label: "Application Record",
        data: [users, agendas],
        backgroundColor: "#E11D48",
        borderColor: "#E11D48",
        radius: "0",
      },
    ],
  };
  return (
    <>
      <div className="my-6 w-full p-4 container h-[50vh] md:h-[80vh] card-shadow-custom shadow-xl rounded-lg">
        <Bar options={options} data={data} />
      </div>
    </>
  );
};

export default DashBoardCharts;

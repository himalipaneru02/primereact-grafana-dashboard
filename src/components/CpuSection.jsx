import { Chart } from "primereact/chart";

export default function CpuSection() {
  const data = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "CPU Usage",
        data: [20, 40, 35, 50, 60],
        fill: false
      }
    ]
  };

  return (
    <div className="mt-4">
      <h3>CPU Usage</h3>
      <Chart type="line" data={data} />
    </div>
  );
}
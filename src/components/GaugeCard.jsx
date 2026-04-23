import { Chart } from "primereact/chart";
import Panel from "./Panel";

export default function GaugeCard({ title, value }) {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor:["#73BF69", "#2b3240"],
        borderWidth: 0
      }
    ]
  };

const options={
rotation:-90,
circumference:180,
cutout:"82%",
plugins:{legend:{display:false}}
};

  return (
   <div className="col-6 md:col-2">
      <Panel title={title}>
        <Chart type="doughnut" data={data} options={options} style={{ height: "100px" }} />
        <p style={{ textAlign: "center" }}>{value}%</p>
      </Panel>
    </div>
  );
}
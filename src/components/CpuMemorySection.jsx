import { Chart } from "primereact/chart";
import Panel from "./Panel";

export default function CpuMemorySection() {
  const data = {
    labels: ["10", "11", "12", "13"],
    datasets: [
      {
        label: "CPU",
        data: [20, 30, 25, 40],
        borderColor: "#73BF69",
        backgroundColor: "rgba(115,191,105,0.2)",
        fill: true
      }
    ]
  };

  return (
    <div className="grid gap-2 mb-3">
      <div className="col-12 md:col-6">
        <Panel title="CPU Basic">
          <Chart type="line" data={data} style={{ height: "200px" }} />
        </Panel>
      </div>

      <div className="col-12 md:col-6">
        <Panel title="Memory Basic">
          <Chart type="line" data={data} style={{ height: "200px" }} />
        </Panel>
      </div>
    </div>
  );
}
import { Chart } from "primereact/chart";
import Panel from "./Panel";

export default function NetworkDiskSection() {
  const data = {
    labels: ["10", "11", "12", "13"],
    datasets: [
      {
        label: "Traffic",
        data: [5, 10, 7, 12],
        borderColor: "#60a5fa"
      }
    ]
  };

  return (
    <div className="grid gap-2">
      <div className="col-12 md:col-6">
        <Panel title="Network Traffic">
          <Chart type="line" data={data} style={{ height: "200px" }} />
        </Panel>
      </div>

      <div className="col-12 md:col-6">
        <Panel title="Disk Space">
          <Chart type="line" data={data} style={{ height: "200px" }} />
        </Panel>
      </div>
    </div>
  );
}
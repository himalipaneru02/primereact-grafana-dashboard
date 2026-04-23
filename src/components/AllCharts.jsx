import { Chart } from "primereact/chart";
import Panel from "./Panel";

export default function AllCharts() {
  const commonData = {
    labels: ["10", "11", "12", "13"],
    datasets: [
     {
      label: "Usage",
      data: [20,30,25,40],
      borderColor:"#7EB26D",
      backgroundColor:"rgba(126,178,109,.25)",
      borderWidth:1.5,
      pointRadius:0,
      tension:.15,
      fill:true
     }
    ]
  };
const options = {
 plugins:{
   legend:{
     labels:{ color:'#9ca3af' }
   }
 },
 scales:{
   x:{
     grid:{ color:'#2b3240' },
     ticks:{ color:'#9ca3af' }
   },
   y:{
     grid:{ color:'#2b3240' },
     ticks:{ color:'#9ca3af' }
   }
 }
};
  return (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>

      {/* CPU */}
      <div style={{ width: "48%" }}>
        <Panel title="CPU Basic">
          <Chart
 type="line"
 data={commonData}
 options={options}
 style={{
   height:"170px",
   width:"100%"
 }}
/>
        </Panel>
      </div>

      {/* MEMORY */}
      <div style={{ width: "48%" }}>
        <Panel title="Memory Basic">
          <Chart
 type="line"
 data={commonData}
 options={options}
 style={{
   height:"170px",
   width:"100%"
 }}
/>
        </Panel>
      </div>

      {/* NETWORK */}
      <div style={{ width: "48%" }}>
        <Panel title="Network Traffic">
          <Chart
 type="line"
 data={commonData}
 options={options}
 style={{
   height:"170px",
   width:"100%"
 }}
/>
        </Panel>
      </div>

      {/* DISK */}
      <div style={{ width: "48%" }}>
        <Panel title="Disk Space">
          <Chart
 type="line"
 data={commonData}
 options={options}
 style={{
   height:"170px",
   width:"100%"
 }}
/>
        </Panel>
      </div>

    </div>
  );
}
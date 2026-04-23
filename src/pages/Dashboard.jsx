import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import TopStats from "../components/TopStats";
import StatsCards from "../components/StatsCards";
import AllCharts from "../components/AllCharts";

export default function Dashboard(){
return (
<div
style={{
height:"100vh",
background:"#111827",
color:"white",
display:"flex"
}}
>

<Sidebar />

<div style={{flex:1, display:"flex", flexDirection:"column"}}>
<Header />

<div
style={{
flex:1,
overflowY:"auto",
padding:"8px"
}}
>
<FilterBar />
<TopStats />
<StatsCards />

<h4 style={{
margin:"8px 0",
fontSize:"14px",
color:"#cbd5e1"
}}>
Basic CPU / Mem / Net / Disk
</h4>

<AllCharts />

{/* Fake Grafana accordion rows */}
{[
"CPU / Memory / Net / Disk",
"Memory Meminfo",
"Memory Vmstat",
"System Misc"
].map((item,i)=>(
<div
key={i}
style={{
background:"#1f2937",
border:"1px solid #374151",
padding:"8px",
marginTop:"6px",
fontSize:"13px"
}}
>
▸ {item}
</div>
))}

</div>
</div>
</div>
)
}
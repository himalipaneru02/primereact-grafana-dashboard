export default function Header(){
return (
<div
style={{
height:"50px",
background:"#151a22",
borderBottom:"1px solid #374151",
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"0 12px"
}}
>

<div style={{display:"flex",gap:"8px",alignItems:"center"}}>
<h3 style={{fontSize:"22px",margin:0}}>Node Exporter Full</h3>
</div>

<div style={{display:"flex",gap:"12px",color:"#9ca3af"}}>
<i className="pi pi-star" />
<i className="pi pi-cog" />
<span>Last 24 hours</span>
</div>

</div>
)
}
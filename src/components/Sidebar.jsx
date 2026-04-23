export default function Sidebar() {
  const items = [
    "pi pi-chart-bar",
    "pi pi-plus",
    "pi pi-th-large",
    "pi pi-globe",
    "pi pi-bell",
    "pi pi-cog"
  ];

  return (
    <div
      style={{
        width: "50px",
        background: "#05070d",
        borderRight: "1px solid #1f2937",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "18px",
        gap: "28px"
      }}
    >
      <i className="pi pi-sun" style={{color:"orange"}} />

      {items.map((icon,i)=>(
        <i
          key={i}
          className={icon}
          style={{color:"#9ca3af", fontSize:"16px"}}
        />
      ))}
    </div>
  );
}
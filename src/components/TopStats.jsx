export default function TopStats() {
  const stats = [
    { label: "CPU Cores", value: "4" },
    { label: "Total RAM", value: "16 GB" },
    { label: "Uptime", value: "5 days" },
    { label: "Load Avg", value: "0.75" }
  ];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "10px"
      }}
    >
      {stats.map((item, index) => (
        <div
          key={index}
          style={{
            flex: 1,   // 🔥 THIS ensures equal width
            background: "#1f2937",
            border: "1px solid #374151",
            borderRadius: "6px",
            padding: "6px"
          }}
        >
          <p
            style={{
              fontSize: "11px",
              color: "#9ca3af",
              marginBottom: "2px"
            }}
          >
            {item.label}
          </p>

          <p
            style={{
              fontSize: "14px",
              fontWeight: "600"
            }}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
export default function Panel({ title, children }) {
  return (
    <div
      style={{
        background: "#1f2937",
        border: "1px solid #374151",
        borderRadius: "6px",
        padding: "6px"
      }}
    >
      <p style={{ fontSize: "13px", color: "#9ca3af" }}>{title}</p>
      {children}
    </div>
  );
}
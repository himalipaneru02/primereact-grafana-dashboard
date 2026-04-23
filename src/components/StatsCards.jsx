import GaugeCard from "./GaugeCard";

export default function StatsCards() {
  return (
    <div className="grid gap-2 mb-3">

      <GaugeCard title="CPU Busy" value={57} />
      <GaugeCard title="RAM Used" value={20} />
      <GaugeCard title="SWAP Used" value={8} />
      <GaugeCard title="Root FS Used" value={7} />

      {/* NEW right-side stacked mini stat boxes */}
      <div className="col-6 md:col-2">
        <div style={{ display:'grid', gap:'6px' }}>

          <div
            style={{
              background:'#1f2937',
              border:'1px solid #374151',
              padding:'8px'
            }}
          >
            <div style={{fontSize:'11px', color:'#9ca3af'}}>
              CPU Cores
            </div>
            <div style={{fontWeight:'bold'}}>2</div>
          </div>

          <div
                        style={{
              background:'#1f2937',
              border:'1px solid #374151',
              padding:'8px'
            }}
          >
            <div style={{fontSize:'11px', color:'#9ca3af'}}>
              RootFS Total
            </div>
            <div style={{fontWeight:'bold'}}>97 GiB</div>
          </div>

        </div>
      </div>

    </div>
  );
}
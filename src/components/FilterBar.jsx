import { Dropdown } from "primereact/dropdown";

export default function FilterBar(){
const options=[{label:"node",value:1}]

return(
<div style={{display:"flex",gap:"8px",margin:"8px 0"}}>
<Dropdown options={options} placeholder="datasource" />
<Dropdown options={options} placeholder="job" />
<Dropdown options={options} placeholder="host" />
</div>
)
}
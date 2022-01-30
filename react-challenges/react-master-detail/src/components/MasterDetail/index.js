import {useState} from "react";

function MasterDetail({payload}) {

  const [selectedItem, setSelectedItem] = useState(payload[0])

  return (
    <div style={{display: 'flex'}}>
      <div style={{background: 'cyan', width:'30%'}}>
        <ul>
          {payload.map((item, index)=>(
            <li key={index} onClick={()=>setSelectedItem(item)}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div style={{background: 'teal', width:'70%'}}>
        <h2>{selectedItem.title}</h2>
        <p>{selectedItem.content}</p>
      </div>
    </div>
  );
}

export default MasterDetail;

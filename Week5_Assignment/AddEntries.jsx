import React from 'react'
import { useSelector } from 'react-redux'
import Entry from './Entry';
// import { addEntry } from '../Redux_Actions/Action';

const AddEntries = () => {
    const entries=useSelector((state)=>state.calorie);
    console.log(entries);
  return (
    // <div>
    //     <h1>Entries</h1>
    //     <div>
    //         {entries.map((el)=>{
    //             return (<Entry entry={el}/>
    //             )
    //         })}
    //     </div>
    // </div>
    <div className="mt-3">
    <h4 className="display-6">Entries</h4>
    <hr />
    <div className="list-group">
      {entries.map((el) => (
        <Entry entry={el} />
      ))}
    </div>
  </div>
  )
}

export default AddEntries
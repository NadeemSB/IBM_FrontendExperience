import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteEntry } from '../Redux_Actions/Action';

const Entry = (props) => {
    const dispatch=useDispatch();
    const deleteHandle=()=>{
        dispatch(deleteEntry(props.entry.id));
    }
  return (
    <div>
        <div className="list-group-item list-group-item-action d-flex justify-content-between mt-2">
      <div className="">{props.entry.item}</div>
      <div className="">{props.entry.cal} kcal</div>
      <button className="btn-close" onClick={deleteHandle}></button>
    </div>
    </div>
  )
}

export default Entry
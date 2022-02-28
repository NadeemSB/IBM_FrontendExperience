import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addEntry } from '../Redux_Actions/Action';

const AddInput = () => {
    const [item,setItem]=useState("");
    const [cal,setCal]=useState(0);
    const dispatch=useDispatch();
    const submitHandle=(e)=>{
        e.preventDefault();
        console.log("clicked");
        if(item!=="" && cal!==0)
        dispatch(addEntry({item,cal}));
        setCal(0);
        setItem("");
    }
  return (
    <div>
        <form onSubmit={submitHandle}>
  {/* <fieldset disabled> */}
    <div className="mb-3">
      <label className="form-label">Food Item</label>
      <input type="text" className="form-control" placeholder="Food Item" value={item} onChange={(event)=>{setItem(event.target.value)}}/>
    </div>
    <div className="mb-3">
      <label className="form-label">Calorie</label>
      <input type="text" className="form-control" placeholder="kcal" value={cal} onChange={(event)=>{setCal(event.target.value)}}/>
    </div>
    {/* <div class="mb-3">
      <label for="disabledSelect" class="form-label">Disabled select menu</label>
      <select id="disabledSelect" class="form-select">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
        <label class="form-check-label" for="disabledFieldsetCheck">
          Can't check this
        </label>
      </div>
    </div> */}
    <button type="submit" className="btn btn-primary">Submit</button>
  {/* </fieldset> */}
</form>
    </div>
  )
}

export default AddInput
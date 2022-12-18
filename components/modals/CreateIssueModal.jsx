import React from 'react';
import { Button } from 'react-bootstrap';
import CustomSelect from '../customSelect/CustomSelect';
import CustomSelectPriority from '../customSelect/CustomSelectPriority';
import CustomSelectUsers from '../customSelect/CustomSelectUsers';
// below line is to convert html to react component
// https://magic.reactjs.net/htmltojsx.htm
function CreateIssueModal({isVisible,onClose}) {
    if(!isVisible) return null;
  return (
    <div className='d-flex align-items-center justify-content-center' style={{"position":"fixed","backgroundColor":"rgba(0, 0, 0, 0.3)","top":"0","left":"0","bottom":"0","right":"0","zIndex":"10","overflowY":"scroll","paddingTop":"20rem"}}>
    <div className='custom-modal-body modal-content p-4' style={{"width":"700px", "backgroundColor":"#fff","zIndex":"11","height":"700px","marginBottom":"2rem"}}>
    
    <div  className='modal-heading d-flex justify-content-between'>
   <div className='Heading' style={{"fontSize":"20px"}}>Create Issue</div>
   <span style={{"color":"red"}}>In development</span>
    <button className='btn btn-primary' onClick={()=>onClose()}> close</button>
    </div>
    
    {/* forms start */}
    <form>
    <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Issue Type</label>
        <CustomSelect/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Issue Priority</label>
          <CustomSelectPriority/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Short Summary</label>
          <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleFormControlSelect1">Reporter</label>
        <CustomSelectUsers/>
        </div>
        <div className="form-group my-2">
          <label htmlFor="exampleFormControlInput1">Asignee</label>
          {/* <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="" /> */}
      <CustomSelectUsers/>
        </div>
      <div className="form-group my-5">
      <button className='btn btn-primary' onClick={()=>onClose()}>Submit</button>
        </div>
      </form>

    </div>
    </div>
  )
}

export default CreateIssueModal
import React from 'react'
// below line is to concert html to react component
// https://magic.reactjs.net/htmltojsx.htm
function CreateIssueModal({isVisible,onClose}) {
    if(!isVisible) return null;
  return (
    <div className='d-flex align-items-center justify-content-center' style={{"position":"fixed","backgroundColor":"rgba(0, 0, 0, 0.3)","top":"0","left":"0","bottom":"0","right":"0","zIndex":"10"}}>
    <div className='custom-modal-body modal-content p-4 mt-5' style={{"width":"700px", "backgroundColor":"#fff","zIndex":"11"}}>
    
    <div  className='modal-heading d-flex justify-content-between'>
   <div className='Heading' style={{"fontSize":"20px"}}>Create Issue</div>
   <span style={{"color":"red"}}>In development</span>
    <button className='btn btn-primary' onClick={()=>onClose()}> close</button>
    </div>
    
    {/* forms start */}
    <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Issue Type</label>
          <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Issue Priority</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Medium</option>
            <option>Low</option>
            <option>High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Short Summary</label>
          <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Reporter</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Bilal</option>
            <option>Govind</option>
            <option>Aman</option>
            <option>Pawan</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Asignee</label>
          <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="" />
        </div>
      </form>

    </div>
    </div>
  )
}

export default CreateIssueModal
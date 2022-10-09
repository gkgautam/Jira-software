import React from 'react'

function SprintOperations() {
    return (
        <>
            <div className='operations-container my-3 row p-0'>

                <div className='operation-controls row col-8'>
                    <div className='search-board col-3 pe-0' style={{"marginTop":"3px"}}>
                        <form className="m-0" role="search">
                            <input className="form-control  p-0 m-0" type="search" placeholder="Search this board" aria-label="Search" style={{ "border": "1.5px solid #DFE1E6", "width": "96%", "boxShadow": "none","fontSize":"14px" }}></input>
                        </form>
                    </div>

                    <div className='all-assignee col-4 p-0'>
                        <div className='assignees d-flex' style={{ "position": "relative" }}>
                            <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "rgb(7 71 166)", "color": "#fff", "height": "30px", "width": "30px", "fontSize": "16px", "textAlign": "center", "border": "2px solid #fff", "position": "absolute" }}>
                                G
                            </div>
                            <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#008495", "color": "#000", "height": "30px", "width": "30px", "fontSize": "16px", "textAlign": "center", "border": "2px solid #fff", "position": "absolute", "left": "24px" }}>
                                P
                            </div>
                            <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "orange", "color": "#000", "height": "30px", "width": "30px", "fontSize": "16px", "textAlign": "center", "border": "2px solid #fff", "position": "absolute", "left": "48px" }}>
                                DB
                            </div>
                            <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#008495", "color": "#000", "height": "30px", "width": "30px", "fontSize": "16px", "textAlign": "center", "border": "2px solid #fff", "position": "absolute", "left": "72px" }}>
                                AM
                            </div>
                            <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "black", "color": "#fff", "height": "30px", "width": "30px", "fontSize": "16px", "textAlign": "center", "border": "2px solid #fff", "position": "absolute", "left": "96px" }}>
                                R
                            </div>
                            <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "rgb(7 71 166)", "color": "#000", "height": "30px", "width": "30px", "fontSize": "16px", "textAlign": "center", "border": "2px solid #fff", "position": "absolute", "left": "120px" }}>
                                M
                            </div>
                            <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#EEEEEE", "color": "gray", "height": "30px", "width": "30px", "fontSize": "12px", "textAlign": "center", "border": "2px solid #fff", "position": "absolute", "left": "144px" }}>
                                +13
                            </div>
                        </div>
                    </div>
                    <div className='operation-buttons col-5 p-0 d-flex' style={{"gap":"8px"}}>
                        <div className='custom-pirmary-btn' style={{"fontSize":"14px","fontWeight":"500","backgroundColor": "rgb(235,236,240)", "padding": "1px 6px", "borderRadius": "2px","lineHeight":"24px","color":"#42526E"}}>
                            Only My Issues
                        </div>
                        <div className='custom-pirmary-btn' style={{"fontSize":"14px","fontWeight":"500","backgroundColor": "rgb(235,236,240)", "padding": "1px 6px", "borderRadius": "2px","lineHeight":"24px","color":"#42526E"}}>
                            Recently Updated
                        </div>
                    </div>
                </div>
                

                <div className='operation-control-buttons col-2 p-0' style={{"marginLeft":"auto","width":"10%"}}>
                <div className='custom-pirmary-btn' style={{"fontSize":"14px","fontWeight":"500","backgroundColor": "rgb(235,236,240)", "padding": "1px 6px", "borderRadius": "2px","lineHeight":"24px","color":"#42526E"}}>
                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 10-2 0v9.991A3.004 3.004 0 004.995 19H21a1 1 0 000-2zm-3-8v3a1 1 0 002 0V8a1 1 0 00-1-1h-4a1 1 0 000 2h3z"></path><path d="M13.293 13.707a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L14 11.586l-2.293-2.293a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L11 11.414l2.293 2.293z"></path></g></svg>
                            <span>Insights</span>
                        </div>
                </div>
            </div>
        </>
    )
}

export default SprintOperations
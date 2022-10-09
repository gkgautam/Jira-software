import React from 'react'
import SubtaskCard from './SubtaskCard'
import SubtaskCard2 from './SubtaskCard2'

function StorySubtask() {
    return (
        <>
            <div className='group-buttons p-0 m-0' style={{
                "display": "grid",
                "gridTemplateColumns": "repeat(auto-fit,minmax(145px,1fr))", "columnGap": "5px"
            }}>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "2px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E","height":"130px" }}>
                   
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "2px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E","height":"130px" }}>
                   
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "2px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E","height":"130px" }}>
                   <SubtaskCard/>
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "2px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E","height":"130px" }}>
                   
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "2px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E","height":"130px" }}>
                   
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "2px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E","height":"130px" }}>
                   <SubtaskCard2/>
                </div>
            </div>
        </>
    )
}

export default StorySubtask
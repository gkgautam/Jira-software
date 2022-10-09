import React from 'react'

function IssueGroups() {
    return (
        <>
            <div className='group-buttons p-0 m-0' style={{ "display": "grid",
    "gridTemplateColumns": "repeat(auto-fit,minmax(145px,1fr))","columnGap":"5px"}}>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "12px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E" }}>
                    TO DO
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "12px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E" }}>
                    IN CREATIVE
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "12px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E" }}>
                    IN DEVELOPMENT
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "12px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E" }}>
                    QA
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "12px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E" }}>
                    PRODUCT OWNER REVIEW
                </div>
                <div className='custom-secondary-btn' style={{ "fontSize": "10px", "fontWeight": "500", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "12px", "borderRadius": "2px", "lineHeight": "20px", "color": "#42526E" }}>
                    DONE
                </div>
            </div>
        </>
    )
}

export default IssueGroups
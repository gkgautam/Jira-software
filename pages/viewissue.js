import React from 'react'
import Image from 'next/image';
import dummyattach from '../public/jiraImages/attachment.png';
import subtasklogo from '../public/jiraImages/subtasklogo.svg';
import buglogo from '../public/jiraImages/buglogo.svg';


import RapidBoardBreadcrum from '../components/activeSprintComponents/RapidBoardBreadcrum';
import Subtask from '../components/Subtask';
function viewissue() {
    return (
        <>
            <div className='view-issue d-flex justify-content-center'>
                <div className='issue-left-container  col-8'>
                    <RapidBoardBreadcrum />
                    <div className='issue-Title my-2'>
                        <h5 className=''>US Only | Health preferences in case of Jenny Fresh Plans| Exclude Pork Free & Vegetarian from Max Up + Fresh</h5>
                    </div>
                    {/* action buttons */}
                    <div className='issue-action-buttons d-flex gap-2 my-2'>
                        <div className='custom-pirmary-btn' style={{ "fontSize": "14px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                            <svg width="24" height="24" viewBox="0 0 30 30" role="presentation"><path d="M11.643 17.965c-1.53 1.495-4.016 1.496-5.542.004a3.773 3.773 0 01.002-5.412l7.147-6.985a2.316 2.316 0 013.233-.003c.893.873.895 2.282.004 3.153l-6.703 6.55a.653.653 0 01-.914-.008.62.62 0 010-.902l6.229-6.087a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.23 6.087a2.502 2.502 0 000 3.607 2.643 2.643 0 003.683.009l6.703-6.55a4.074 4.074 0 00-.003-5.859 4.306 4.306 0 00-6.002.003l-7.148 6.985a5.655 5.655 0 00-.001 8.118c2.29 2.239 6.015 2.238 8.31-.005l6.686-6.533a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.686 6.534z" fill="currentColor" fill-rule="evenodd"></path></svg>
                            <span>Attach</span>
                        </div>
                        <div className='custom-pirmary-btn' style={{ "fontSize": "14px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                            <svg width="24" height="24" viewBox="0 0 30 30" role="presentation"><g fill="currentColor"><path d="M19 7c1.105.003 2 .899 2 2.006v9.988A2.005 2.005 0 0118.994 21H9.006A2.005 2.005 0 017 19h11c.555 0 1-.448 1-1V7zM3 5.006C3 3.898 3.897 3 5.006 3h9.988C16.102 3 17 3.897 17 5.006v9.988A2.005 2.005 0 0114.994 17H5.006A2.005 2.005 0 013 14.994V5.006zM5 5v10h10V5H5z"></path><path d="M7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293z"></path></g></svg>
                            <span>Create subtask</span>
                        </div>
                        <div className='custom-pirmary-btn' style={{ "fontSize": "14px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                            <svg width="24" height="24" viewBox="0 0 30 30" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path><path d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path></g></svg>
                            <span>Link Issue</span>
                        </div>
                    </div>

                    {/* decription section */}
                    <div className='issue-description my-2'>
                        <h2 className='m-0' style={{ "color": "#172b4d", "fontSize": "14px", "fontWeight": "600", "lineHeight": "24px" }}>Description</h2>
                        <div className='description-text-container p-2' style={{ "fontSize": "14px", "fontWeight": "400", "fontStyle": "normal", "backgroundColor": "#EBECF0", "borderRadius": "5px" }} >
                            <div>
                                <p>
                                    As an US client ,I want to view relevant health preferences on calorie page for Jenny Fresh plans
                                    As an US client ,I want to view relevant health preferences on calorie page for Jenny Fresh plans
                                    As an US client ,I want to view relevant health preferences on calorie page for Jenny Fresh plans
                                </p>
                                <h5>
                                    AC : for story
                                </h5>
                                <p>
                                    1.When the user taps either on ‘Progress' icon in the navigation tray or 'weight tracking' tile, a new page opens with available information about user's weight.
                                    2.On the page top right corner of the screen a '+' symbol will be visible.
                                </p>
                                <p>
                                    A date will be associated with each weigh-in
                                    An identifier will be added next to the weigh-in in the form of a colored pill that say Coach Input.  This will be the identifier that a coach entered this weight on behalf of the client
                                    The history will live at the bottom of the progress page
                                </p>
                                <p>
                                    A date will be associated with each weigh-in
                                    An identifier will be added next to the weigh-in in the form of a colored pill that say Coach Input.  This will be the identifier that a coach entered this weight on behalf of the client
                                    The history will live at the bottom of the progress page
                                </p>
                                <p>
                                    A date will be associated with each weigh-in
                                    An identifier will be added next to the weigh-in in the form of a colored pill that say Coach Input.  This will be the identifier that a coach entered this weight on behalf of the client
                                    The history will live at the bottom of the progress page
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* attachments section */}
                    <div className='attachment-section'>
                        <h2 className='mx-0' style={{ "color": "#172b4d", "fontSize": "14px", "fontWeight": "600", "lineHeight": "24px" }}>Attachments</h2>
                        <div className='attachment-content d-flex gap-1'>
                            <div className='attachment1'>
                                <Image src={dummyattach} style={{ "borderRadius": "5px" }} width={150} height={100} alt="attachment1" />
                            </div>
                            <div className='attachment2'>
                                <Image src={dummyattach} style={{ "borderRadius": "5px" }} width={150} height={100} alt="attachment1" />
                            </div>
                            <div className='attachment3'>
                                <Image src={dummyattach} style={{ "borderRadius": "5px" }} width={150} height={100} alt="attachment1" />
                            </div>
                        </div>
                    </div>
                    {/* subtasks section */}
                    <div className='subtask-section'>
                        <h2 className='mx-0' style={{ "color": "#172b4d", "fontSize": "14px", "fontWeight": "600", "lineHeight": "24px" }}>Subtasks</h2>
                        <Subtask issueType={subtasklogo} />
                    </div>

                    {/* Linked Issues section */}
                    <div className='subtask-section mt-3'>
                        <h2 className='mx-0' style={{ "color": "#172b4d", "fontSize": "14px", "fontWeight": "600", "lineHeight": "24px" }}>Linked Issues</h2>
                        <Subtask issueType={buglogo} />
                        <Subtask issueType={buglogo} />
                        <Subtask issueType={buglogo} />
                        <Subtask issueType={buglogo} />
                    </div>

                    {/* Activity section */}
                    <div className='activity-section mt-3'>
                        <h2 className='mx-0' style={{ "color": "#172b4d", "fontSize": "14px", "fontWeight": "600", "lineHeight": "24px" }}>Activity</h2>
                        <div className='activity-action-buttons d-flex gap-2'>
                            show:
                            <div className='custom-pirmary-btn' style={{ "fontSize": "12px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                                <span>All</span>
                            </div>
                            <div className='custom-pirmary-btn' style={{ "fontSize": "12px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                                <span>Comments</span>
                            </div>
                            <div className='custom-pirmary-btn' style={{ "fontSize": "12px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                                <span>History</span>
                            </div>
                            <div className='custom-pirmary-btn' style={{ "fontSize": "12px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                                <span>Work log</span>
                            </div>
                        </div>
                        <div className='comment-section mt-2'>
                            <div className='coment d-flex'>
                                <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#76bbc9", "color": "#000", "height": "25px", "width": "28px", "fontSize": "14px", "textAlign": "center", "border": "2px solid #fff" }}>
                                    P
                                </div>
                                <input className='mx-2 p-1' type="text" placeholder='add a comment...' style={{ "width": "100%", "border": "1px solid #EBECF0", "borderRadius": "3px" }} />
                            </div>
                            <div className='coment d-flex'>
                                <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#eba317", "color": "#000", "height": "25px", "width": "35px", "fontSize": "14px", "textAlign": "center", "border": "2px solid #fff" }}>
                                    R
                                </div>
                                <div className='commented mx-2'>
                                    <div className='commenter-name'>
                                        <h2 className='m-0' style={{ "color": "#172b4d", "fontSize": "12px", "fontWeight": "600", "lineHeight": "24px" }}>drosales</h2>
                                    </div>
                                    <div className='comment-content' style={{ "fontSize": "14px", "fontWeight": "400", "fontStyle": "normal", "borderRadius": "5px" }}>
                                        <span>
                                            Edge, Firefox
                                            Original requirements for entry do not seem to be met
                                            AC 4 originally requested 2 decimal digits, AC 4 change reviewed w PO?
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='coment d-flex'>
                                <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#76bbc9", "color": "#000", "height": "25px", "width": "35px", "fontSize": "14px", "textAlign": "center", "border": "2px solid #fff" }}>
                                    RK
                                </div>
                                <div className='commented mx-2'>
                                    <div className='commenter-name'>
                                        <h2 className='m-0' style={{ "color": "#172b4d", "fontSize": "12px", "fontWeight": "600", "lineHeight": "24px" }}>drosales</h2>
                                    </div>
                                    <div className='comment-content' style={{ "fontSize": "14px", "fontWeight": "400", "fontStyle": "normal", "borderRadius": "5px" }}>
                                        <span>
                                            Edge, Firefox
                                            Original requirements for entry do not seem to be met
                                            AC 4 originally requested 2 decimal digits, AC 4 change reviewed w PO?
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='coment d-flex'>
                                <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#eba317", "color": "#000", "height": "25px", "width": "35px", "fontSize": "14px", "textAlign": "center", "border": "2px solid #fff" }}>
                                    D
                                </div>
                                <div className='commented mx-2'>
                                    <div className='commenter-name'>
                                        <h2 className='m-0' style={{ "color": "#172b4d", "fontSize": "12px", "fontWeight": "600", "lineHeight": "24px" }}>drosales</h2>
                                    </div>
                                    <div className='comment-content' style={{ "fontSize": "14px", "fontWeight": "400", "fontStyle": "normal", "borderRadius": "5px" }}>
                                        <span>
                                            Edge, Firefox
                                            Original requirements for entry do not seem to be met
                                            AC 4 originally requested 2 decimal digits, AC 4 change reviewed w PO?
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* division of issue containers */}
                <div className='issue-left-container col-4'>
                    <h2>right container</h2>
                </div>
            </div>
        </>
    )
}

export default viewissue
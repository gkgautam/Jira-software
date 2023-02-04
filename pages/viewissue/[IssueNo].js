import React from 'react'
import Image from 'next/image';
import dummyattach from '../../public/jiraImages/attachment.png';
import subtasklogo from '../../public/jiraImages/subtasklogo.svg';
import medium from '../../public/jiraImages/medium.svg';
import buglogo from '../../public/jiraImages/Buglogo.svg';
import RapidBoardBreadcrum from '../../components/activeSprintComponents/RapidBoardBreadcrum';
import Subtask from '../../components/Subtask';

export async function getServerSideProps(context) {

    const IssueNo = context.params.IssueNo;
    const res = await fetch(`http://localhost:3000/api/viewissue/${IssueNo}`)
    const data = await res.json();
  
    return {
      props: {
        data
      }
    }
  }
function IssueNo({data}) {
console.log('honeysingh',data);
// let parser = new DOMParser();
// let descriptionHtml = parser.parseFromString(data[0].description, 'text/html');
    return (
        <>
            <div className='view-issue d-flex justify-content-center'>
                <div className='issue-left-container  col-8'>
                    <RapidBoardBreadcrum projectID={data[0].projectId} />
                    <div className='issue-Title my-2'>
                        <h5 className=''>{data[0].summary}</h5>
                    </div>
                    {/* action buttons */}
                    <div className='issue-action-buttons d-flex gap-2 my-2'>
                        <div className='custom-pirmary-btn' style={{ "fontSize": "14px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                            <svg width="24" height="24" viewBox="0 0 30 30" role="presentation"><path d="M11.643 17.965c-1.53 1.495-4.016 1.496-5.542.004a3.773 3.773 0 01.002-5.412l7.147-6.985a2.316 2.316 0 013.233-.003c.893.873.895 2.282.004 3.153l-6.703 6.55a.653.653 0 01-.914-.008.62.62 0 010-.902l6.229-6.087a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.23 6.087a2.502 2.502 0 000 3.607 2.643 2.643 0 003.683.009l6.703-6.55a4.074 4.074 0 00-.003-5.859 4.306 4.306 0 00-6.002.003l-7.148 6.985a5.655 5.655 0 00-.001 8.118c2.29 2.239 6.015 2.238 8.31-.005l6.686-6.533a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.686 6.534z" fill="currentColor" fillRule="evenodd"></path></svg>
                            <span>Attach</span>
                        </div>
                        <div className='custom-pirmary-btn' style={{ "fontSize": "14px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                            <svg width="24" height="24" viewBox="0 0 30 30" role="presentation"><g fill="currentColor"><path d="M19 7c1.105.003 2 .899 2 2.006v9.988A2.005 2.005 0 0118.994 21H9.006A2.005 2.005 0 017 19h11c.555 0 1-.448 1-1V7zM3 5.006C3 3.898 3.897 3 5.006 3h9.988C16.102 3 17 3.897 17 5.006v9.988A2.005 2.005 0 0114.994 17H5.006A2.005 2.005 0 013 14.994V5.006zM5 5v10h10V5H5z"></path><path d="M7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293z"></path></g></svg>
                            <span>Create subtask</span>
                        </div>
                        <div className='custom-pirmary-btn' style={{ "fontSize": "14px", "fontWeight": "500", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "padding": "1px 6px", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                            <svg width="24" height="24" viewBox="0 0 30 30" role="presentation"><g fill="currentColor" fillRule="evenodd"><path d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"></path><path d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"></path></g></svg>
                            <span>Link Issue</span>
                        </div>
                    </div>

                    {/* decription section */}
                    <div className='issue-description my-2'>
                        <h2 className='m-0' style={{ "color": "#172b4d", "fontSize": "14px", "fontWeight": "600", "lineHeight": "24px" }}>Description</h2>
                        <div className='description-text-container p-2' style={{ "fontSize": "14px", "fontWeight": "400", "fontStyle": "normal", "backgroundColor": "#EBECF0", "borderRadius": "5px" }} >
                            <div>
                                {/* <p>
                                    As an US client ,I want to view relevant health preferences on calorie page for Jenny Fresh plans
                                    As an US client ,I want to view relevant health preferences on calorie page for Jenny Fresh plans
                                    As an US client ,I want to view relevant health preferences on calorie page for Jenny Fresh plans
                                </p>
                                <h5>
                                    AC : for story
                                </h5>
                                <p>
                                    1.When the user taps either on Progress icon in the navigation tray or weight tracking tile, a new page opens with available information about users weight.
                                    2.On the page top right corner of the screen a + symbol will be visible.
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
                                </p> */}
                                {/* {descriptionHtml} */}
                                <div dangerouslySetInnerHTML={{ __html: data[0].description}} />
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
                <div className='issue-right-container   col-4'>
                    <div className='jira-issue-actions'>
                        <div className='jira-header-action d-flex justify-content-end gap-3'>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" role="presentation"><path d="M10.881 5.48l-8.426 6.829c-.396.32-.582.956-.413 1.417l.099.272c.168.462.726.829 1.227.82l1.131-.02 6.062-.102 3.652-.063c.51-.01.788-.385.616-.861l-2.923-8.03c-.105-.288-.324-.441-.567-.441a.731.731 0 00-.458.179zM4.98 15.953l1.754 4.818a1 1 0 101.879-.684l-1.539-4.228-2.094.094zm13.711-9.111l-2.819 1.026a1 1 0 10.684 1.879l2.82-1.026a1 1 0 10-.685-1.88zm-1.792 3.845a1.006 1.006 0 00-.644.766 1.002 1.002 0 00.811 1.159l2.955.52a1 1 0 001.122-1.301l-.017-.047a.997.997 0 00-.758-.621l-2.955-.521a.974.974 0 00-.514.045zm-.548-7.639l-1.929 2.298a1 1 0 001.532 1.286l1.928-2.298a1.001 1.001 0 00-.765-1.643.993.993 0 00-.766.357z" fill="rgb(66,82,110)" fillRule="evenodd"></path></svg>

                            </span>
                            <span className='d-flex align-items-end' style={{ "fontSize": "12px", "fontWeight": "500" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" role="presentation"><g fill="rgb(66,82,110)" fillRule="evenodd"><path d="M11.983 15.984a4.005 4.005 0 01-4.002-4c0-2.206 1.795-4 4.002-4a4.005 4.005 0 014.002 4c0 2.206-1.795 4-4.002 4M12 4C6.48 4 2 8.84 2 12c0 3.086 4.577 8 10 8s10-4.914 10-8c0-3.16-4.481-8-10-8"></path><circle cx="12" cy="12" r="2"></circle></g></svg>
                                5
                            </span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" role="presentation"><path d="M4 12v7a.971.971 0 00.278.704.99.99 0 00.701.296H6v-9H4.98a.99.99 0 00-.701.296A.971.971 0 004 12zm15.281-.96a3.046 3.046 0 00-2.321-1.061h-2.634c.04-.181.08-.36.11-.532.515-2.934 0-4-.504-4.594A2.432 2.432 0 0012.075 4a3.078 3.078 0 00-2.968 2.751c-.393 1.839-.454 2-.968 2.725l-.768 1.089a2.011 2.011 0 00-.363 1.141v6.273c.001.532.216 1.041.596 1.416s.896.585 1.433.584h7.247a3.014 3.014 0 002.997-2.507l.677-4a2.963 2.963 0 00-.677-2.432zm-1.998 6.1a1.007 1.007 0 01-1 .835H9.038v-6.269l.767-1.089a7.577 7.577 0 001.302-3.509c.036-.543.255-1.209.969-1.108.714.1.575 1.916.363 3.1a19.712 19.712 0 01-.868 2.882l5.39-.008c.297-.001.58.128.773.352a.993.993 0 01.226.813l-.676 4.001z" fill="rgb(66,82,110)" fillRule="evenodd"></path></svg>

                            </span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" role="presentation"><g fill="rgb(66,82,110)" fillRule="evenodd"><path d="M6 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm12-4a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 14a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" fillRule="nonzero"></path><path d="M7 13.562l8.66 5 1-1.732-8.66-5z"></path><path d="M7 10.83l1 1.732 8.66-5-1-1.732z"></path></g></svg>

                            </span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 24 24" role="presentation"><g fill="rgb(66,82,110)" fillRule="evenodd"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>

                            </span>
                        </div>
                        <div className='jira-body-actions m-3'>
                            <div className='issue-status d-flex gap-3 my-1'>
                                <button className='issue-status-action d-flex align-items-center px-2 m-0' style={{ "border": "none", "borderRadius": "3px", "color": "#E3FCEF", "backgroundColor": "#008000" }}>

                                    <div className='webapp-title d-flex flex-column ' style={{ "paddingLeft": "0px", }}>
                                        <h6 className='m-0' style={{ "fontSize": "11px", "fontWeight": "700" }}> Done</h6>
                                        {/* <p className='m-0 p-0' style={{ "fontSize": "12px", "fontWeight": "400", "color": "rgb(66,82,110)" }}>Board</p> */}
                                    </div>
                                    <div className='dropdown-icon'>
                                        <svg width="20" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
                                    </div>

                                </button>
                                <div className='webapp-planning d-flex align-items-baseline'>
                                    <div className='dropdown-icon'>
                                        <svg width="20" height="20" viewBox="0 0 24 24" role="presentation"><path d="M6.735 12.322a1 1 0 00-1.47 1.356l3.612 3.919c.537.526 1.337.526 1.834.03l.364-.359a2335.638 2335.638 0 003.939-3.883l.04-.04a492.598 492.598 0 003.658-3.643 1 1 0 00-1.424-1.404 518.42 518.42 0 01-3.64 3.625l-.04.04a2049.114 2049.114 0 01-3.775 3.722l-3.098-3.363z" fill="rgb(0,102,68)"></path></svg>
                                    </div>
                                    <div className='webapp-title d-flex flex-column ' style={{ "paddingLeft": "0px", }}>
                                        <h6 className='m-0' style={{ "fontSize": "11px", "fontWeight": "400", "color": "rgb(66,82,110)" }}> Done</h6>
                                        {/* <p className='m-0 p-0' style={{ "fontSize": "12px", "fontWeight": "400", "color": "rgb(66,82,110)" }}>Board</p> */}
                                    </div>

                                </div>
                            </div>
                            <div className='issue-user-actions mt-2' style={{ "border": "1px solid #EBECF0", "borderRadius": "3px" }}>
                                <div className='action-heading d-flex justify-content-between px-2' style={{ "borderBottom": "1px solid #EBECF0" }}>
                                    <h2 className='mx-0' style={{ "color": "#172b4d", "fontSize": "12px", "fontWeight": "600", "lineHeight": "24px" }}>Details</h2>
                                    <div className='dropdown-icon'>
                                        <svg width="20" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
                                    </div>
                                </div>
                                <div className='all-actions'>
                                    {/* assignee */}
                                    <div className='assignee p-2 d-flex justify-content-start'>
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Assignee</span>
                                        <div className='comment'>
                                            <div className='d-flex gap-1'>
                                                <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#2258b4", "color": "#fff", "height": "22px", "width": "22px", "fontSize": "11px", "textAlign": "center", "border": "2px solid #fff", "fontWeight": "700" }}>
                                                    {data[0].assignee.charAt(0).toUpperCase()}
                                                </div>
                                                <div className='commenter-name'>
                                                    <h2 className='m-0' style={{ "color": "#172b4d", "fontSize": "12px", "fontWeight": "400", "lineHeight": "24px" }}>{data[0].assignee.replace(data[0].assignee[0], data[0].assignee[0].toUpperCase())}</h2>
                                                </div>
                                            </div>

                                            <a href='' style={{ "textDecoration": "none" }}>
                                                <span style={{ "fontSize": "12px" }}>
                                                    Assign to me
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* reporter */}
                                    <div className='reporter p-2 d-flex justify-content-start' >
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Reporter</span>
                                        <div className='comment'>
                                            <div className='d-flex gap-1 align-items-center'>
                                                <div className='individual-asignee' style={{ "borderRadius": "50%", "backgroundColor": "#eba317", "color": "#000", "height": "22px", "width": "22px", "fontSize": "11px", "textAlign": "center", "border": "2px solid #fff", "fontWeight": "700" }}>
                                                {data[0].reporter.charAt(0).toUpperCase()}
                                                </div>
                                                <div className='commenter-name'>
                                                    <a href='' style={{ "textDecoration": "none" }}>
                                                        <span style={{ "fontSize": "12px" }}>
                                                            {data[0].reporter.replace(data[0].reporter[0], data[0].reporter[0].toUpperCase())}
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* epic link */}
                                    <div className='Epic Link p-2 d-flex justify-content-start' >
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Epic Link</span>
                                        <div className='comment'>
                                            <div className='custom-pirmary-btn py-0 px-1' style={{ "fontSize": "12px", "fontWeight": "400", "maxWidth": "fit-content", "backgroundColor": "#57D9A3", "borderRadius": "2px" }}>
                                                <span style={{ "fontSize": "12px" }}>
                                                    WT-Weight History
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* components */}
                                    <div className='components p-2 d-flex justify-content-start'>
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Components</span>
                                        <div className='comment'>
                                            <div className='custom-pirmary-btn px-1' style={{ "fontSize": "12px", "fontWeight": "400", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "borderRadius": "2px", "lineHeight": "24px", "color": "#42526E" }}>
                                                <a href='' style={{ "textDecoration": "none" }}>
                                                    <span style={{ "fontSize": "12px" }}>
                                                        Web App
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* sprint */}
                                    <div className='sprint p-2 d-flex justify-content-start'>
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Sprint</span>
                                        <div className='comment d-flex gap-1'>
                                            <span style={{ "fontSize": "12px", "fontWeight": "400", "color": "#42526E" }}>None</span>
                                            <div className='custom-pirmary-btn px-1' style={{ "fontSize": "12px", "fontWeight": "400", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.04)", "borderRadius": "2px", "color": "#42526E" }}>
                                                <span style={{ "fontSize": "12px" }}>
                                                    +1
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* storypoints */}
                                    <div className='storypoints p-2 d-flex justify-content-start'>
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Storypoints</span>
                                        <div className='custom-pirmary-btn px-1' style={{ "fontSize": "12px", "fontWeight": "400", "maxWidth": "fit-content", "backgroundColor": "rgba(9,30,66,0.1)", "borderRadius": "20px", "color": "#42526E" }}>
                                            <span style={{ "fontSize": "12px" }}>
                                                5
                                            </span>
                                        </div>
                                    </div>

                                    {/* priority */}
                                    <div className='priority p-2 d-flex justify-content-start'>
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Priority</span>
                                        <div className='comment'>
                                            <div className='d-flex gap-1 align-items-center'>
                                                <Image src={medium} alt="priority-medium" />

                                                <div className='commenter-name'>
                                                    <a href='' style={{ "textDecoration": "none" }}>
                                                        <span style={{ "fontSize": "12px" }}>
                                                            {data[0].issuePriority}
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* due date */}
                                    <div className='duedate p-2 d-flex justify-content-start'>
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Due Date</span>
                                        <div className='comment'>
                                            <span style={{ "fontSize": "12px", "fontWeight": "400", "color": "#42526E" }}>None</span>
                                        </div>
                                    </div>

                                    {/* Labels */}
                                    <div className='Labels p-2 d-flex justify-content-start' >
                                        <span className='mx-0' style={{ "color": "#42526e", "fontSize": "10px", "fontWeight": "600", "width": "40%" }}>Labels</span>
                                        <div className='comment'>
                                            <span style={{ "fontSize": "12px", "fontWeight": "400", "color": "#42526E" }}>None</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='issue-user-actions my-2 p-2 d-flex align-items-center gap-1' style={{ "border": "1px solid #EBECF0", "borderRadius": "3px" }}>
                                <h2 className='m-0' style={{ "color": "#172b4d", "fontSize": "12px", "fontWeight": "600", "lineHeight": "24px" }}>More Fields</h2>
                                <p className='m-0 p-0' style={{ "fontSize": "10px", "fontWeight": "400", "color": "rgba(9,30,66,0.5)" }}>Team,Original Estimate, fix version...</p>
                                <div className='dropdown-icon ms-auto'>
                                    <svg width="20" height="24" viewBox="0 0 24 24" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 000 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 000-1.419.987.987 0 00-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 00-1.406 0z" fill="currentColor" fillRule="evenodd"></path></svg>
                                </div>
                            </div>
                            <div className='issue-user-actions my-2 p-2'>
                                <p className='my-1 p-0' style={{ "fontSize": "10px", "fontWeight": "400", "color": "rgba(9,30,66,0.5)" }}>Created January 13, 2023 at 9:52 AM</p>
                                <p className='my-1 p-0' style={{ "fontSize": "10px", "fontWeight": "400", "color": "rgba(9,30,66,0.5)" }}>Updated February 18, 2023 at 11:21 AM</p>
                                <p className='my-1 p-0' style={{ "fontSize": "10px", "fontWeight": "400", "color": "rgba(9,30,66,0.5)" }}>Resolved March 22, 2023 at 2:34 AM</p>
                               <div className='d-flex align-items-end gap-1'>
                               <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.701 16.7a5.002 5.002 0 110-10.003 5.002 5.002 0 010 10.004m8.368-3.117a1.995 1.995 0 01-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 00.315-.574 8.947 8.947 0 00-.836-1.993.477.477 0 00-.598-.195 2.04 2.04 0 01-1.29.08 1.988 1.988 0 01-1.404-1.395 2.04 2.04 0 01.076-1.297.478.478 0 00-.196-.597 8.98 8.98 0 00-1.975-.826.479.479 0 00-.574.314 1.995 1.995 0 01-1.885 1.346 1.994 1.994 0 01-1.884-1.345.482.482 0 00-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 00-.198.582A2.002 2.002 0 014.445 7.06a.478.478 0 00-.595.196 8.946 8.946 0 00-.833 1.994.48.48 0 00.308.572 1.995 1.995 0 011.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 00-.308.57 8.99 8.99 0 00.723 1.79.477.477 0 00.624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 00.168.628 8.946 8.946 0 002.11.897.474.474 0 00.57-.313 1.995 1.995 0 011.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 00.57.313 8.964 8.964 0 002.084-.883.473.473 0 00.167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 00.628-.19 8.925 8.925 0 00.728-1.793.478.478 0 00-.314-.573" fill="rgba(9,30,66,0.5)" fillRule="evenodd"></path></svg>
                               <p className='m-0 p-0' style={{ "fontSize": "12px", "fontWeight": "600", "color": "rgba(9,30,66,0.5)" }}>Configure</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IssueNo
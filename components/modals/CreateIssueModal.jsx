import React, { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";
import CustomSelectIssueType from "../customSelect/CustomSelectIssueType";
import CustomSelectPriority from "../customSelect/CustomSelectPriority";
import CustomSelectUsers from "../customSelect/CustomSelectUsers";
import dynamic from "next/dynamic";

function CreateIssueModal({ isVisible, onClose, data }) {

  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const [teams, setTeams] = useState([])

  const fetchTeamsData = async () =>{
    const res = await fetch("/api/fetchteam");
    const data = await res.json();
    setTeams(data);
  }

  useEffect(() => {
    fetchTeamsData();
  }, [])

  
  const [formdata, setFormData] = useState({
    issueType: "",
    issuePriority: "",
    summary: "",
    description: "",
    reporter: "",
    assignee: "",
  });

  const getFormData = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const [teamName, setTeamName] = useState("");
  const getTeamName = (e) =>{
    setTeamName(e.target.value);
  }


  const submitIssueform = async (e) => {
    e.preventDefault();
    const {
      summary,
      description,
      reporter,
      assignee,
      issueType,
      issuePriority,
    } = formdata;
    if (
      summary == "" ||
      description == "" ||
      reporter == "" ||
      assignee == "" ||
      issueType == "" ||
      issuePriority == ""
    ) {
      alert("All Fields are required!");
      return false;
    }
    try {
      const res = await fetch("/api/createIssueApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          summary,
          description,
          reporter,
          assignee,
          issueType,
          issuePriority,
        }),
      });
      const data = await res.json();
      console.log("saved data", data);
      console.log("response", res);
      if (res.status === 201) {
        alert("Issue created successfully!");
        onClose();
        setFormData({
          issueType: "",
          issuePriority: "",
          summary: "",
          description: "",
          reporter: "",
          assignee: "",
        });
      }
    } catch (error) {
      console.log("server error here2.");
    }
  };
  if (!isVisible) return null;
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        zIndex: "10",
        overflowY: "scroll",
        paddingTop: "20rem",
      }}
    >
      <div
        className="custom-modal-body modal-content p-4"
        style={{
          width: "700px",
          backgroundColor: "#fff",
          zIndex: "11",
          height: "auto",
          marginBottom: "2rem",
        }}
      >
        <div className="modal-heading d-flex justify-content-between">
          <div className="Heading" style={{ fontSize: "20px" }}>
            Create Issue
          </div>
          <span style={{ color: "red" }}>In development</span>
          <button className="btn btn-primary" onClick={() => onClose()}>
            close
          </button>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="issueType">Project</label>
            <select name="" className="form-select" value={teamName} onChange={getTeamName}>
              <option>Select</option>
              {
                teams.map((val, key)=>{
                  return (<option value={val.teamName} key={key}>{val.teamName}</option>)
                })
              }
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="issueType">Issue Type</label>
            <CustomSelectIssueType
              formdata={formdata}
              setFormData={setFormData}
              name="issueType"
              id="issueType"
            />
          </div>
          <div className="form-group">
            <label htmlFor="issuePriority">Issue Priority</label>
            <CustomSelectPriority
              formdata={formdata}
              setFormData={setFormData}
              name="issuePriority"
              id="issuePriority"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Short Summary</label>
            <input
              type="Text"
              name="summary"
              className="form-control"
              id="exampleFormControlInput1"
              value={formdata.summary}
              onChange={getFormData}
              placeholder=""
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Description</label>
            {/* <Jodit content={content} setContent={setContent}/> */}
            <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => {
                setContent(newContent);
                setFormData({ ...formdata, ["description"]: newContent });
              }}
              onChange={(newContent) => {}}
            />
            {/* <textarea className="form-control" name='description' id="exampleFormControlTextarea1" value={formdata.description} onChange={getFormData}  /> */}
          </div>
          <div className="form-group my-2">
            <label htmlFor="reporter">Reporter</label>
            <CustomSelectUsers
              formdata={formdata}
              setFormData={setFormData}
              name="reporter"
              id="reporter"
              teamName={teamName}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="assignee">Asignee</label>
            {/* <input type="Text" className="form-control" id="exampleFormControlInput1" placeholder="" /> */}
            <CustomSelectUsers
              formdata={formdata}
              setFormData={setFormData}
              name="assignee"
              id="assignee"
              teamName={teamName}
            />
          </div>
          <div className="form-group my-5">
            <button className="btn btn-primary" onClick={submitIssueform}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateIssueModal;

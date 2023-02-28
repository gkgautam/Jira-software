import React, { useEffect, useState } from "react";
import Select from "react-select";
import styles from "./CustomSelect.module.scss";
import user1 from "../../public/jiraImages/profile.jpg";
// import user2 from "../../public/jiraImages/user2.jpg";
// import user3 from "../../public/jiraImages/user3.jpg";
// import user4 from "../../public/jiraImages/user4.jpg";
import storyLogo from "../../public/jiraImages/storylogo.svg";
import taskLogo from "../../public/jiraImages/Tasklogo.svg";
import Image from "next/image";

function CustomSelectUsers(props) {
  const [emp, setEmp] = useState([]);

  async function showTeamMembers() {
    try {
      const res = await fetch(`http://localhost:3000/api/createteam`);
      const data = await res.json();
      setEmp(data[props.selectedProjectTeam].teamMembers);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    showTeamMembers();
  }, [props.selectedProjectTeam]);

  let options = [];

  if (emp) {
    for (let i = 0; i < emp.length; i++) {
      options.push({
        value: emp[i].memberName,
        index: i,
        label: (
          <div className="selectField d-flex align-items-center px-1 ps-2">
            <Image
              src={user1}
              style={{ borderRadius: "50%" }}
              width={20}
              height={20}
              alt="Bug logo"
            />
            <p className="m-0 ps-2">{emp[i].memberName}</p>
          </div>
        ),
      });
    }
  }

  const [dropdownOptions, setDropdownOptions] = useState(
    options.length > 0
      ? options[0]
      : {
          value: "Select here",
          index: 0,
          label: (
            <div className="selectField d-flex align-items-center px-1 ps-2">
               <Image
              src={user1}
              style={{ borderRadius: "50%" }}
              width={20}
              height={20}
              alt="Bug logo"
            />
              <p className="m-0 ps-2">Select here</p>
            </div>
          ),
      }
  );

  return (
    <>
      <div className={`${styles.selector}`}>
        <div className={`${styles.options}`}>
          <Select
            value={dropdownOptions}
            name={props.name}
            options={options}
            onChange={(event) => {
              setDropdownOptions(options[event.index]);
              props.setFormData({
                ...props.formdata,
                [props.name]: event.value,
              });
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CustomSelectUsers;
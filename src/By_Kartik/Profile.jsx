import { InputText } from "primereact/inputtext";
// import { SelectButton } from "primereact/selectbutton";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const occupation = [
  { label: "Working", value: "Working" },
  { label: "Student", value: "Student" },
  { label: "Other", value: "Other" },
];
const date = new Date();

function Profile() {
  const [state2, setState2] = useState(occupation);
  const [state, setState] = useState({
    username: "",
    email: "",
    number: "",
    gender: "Male",
    DOB: date.toLocaleDateString(),
    occupation: state2.value || "Student",
  });
  function submit() {
    console.log("state", state);
  }

  const selectGender = (type) => {
    if (type == 1) {
      setState((pre) => {
        pre.gender = "Male";
        return { ...pre };
      });
    } else if (type == 2) {
      setState((pre) => {
        pre.gender = "Female";
        return { ...pre };
      });
    } else if (type == 3) {
      setState((pre) => {
        pre.gender = "Other";
        return { ...pre };
      });
    }
  };

  return (
    <div className="Profile p-5 overflow-hidden">
      <div className="Contant">
        <div className="text ">
          <span>
            <label htmlFor="Username">Username</label>
            <InputText
              id="Username"
              value={state.username}
              onChange={(e) => {
                setState((pre) => {
                  pre.username = e.target.value;
                  return { ...pre };
                });
              }}
            />
          </span>
          <span>
            <label htmlFor="email">Email Address</label>
            <InputText
              keyfilter={"email"}
              type="email"
              id="email"
              value={state.email}
              onChange={(e) => {
                setState((pre) => {
                  pre.email = e.target.value;
                  return { ...pre };
                });
              }}
            />
          </span>
          <span>
            <label htmlFor="Mobile">Mobile Number</label>
            <InputText
              keyfilter={"int"}
              id="Mobile"
              value={state.number}
              onChange={(e) => {
                setState((pre) => {
                  pre.number = e.target.value;
                  return { ...pre };
                });
              }}
            />
          </span>
          <span className=" Gender ">
            <p>Gender</p>
            <div className="btn">
              <button
                className={state.gender == "Male" ? "activeGender" : ""}
                onClick={() => {
                  selectGender(1);
                }}
              >
                Male
              </button>
              <button
                className={state.gender == "Female" ? "activeGender" : ""}
                onClick={() => {
                  selectGender(2);
                }}
              >
                Female
              </button>
              <button
                className={state.gender == "Other" ? "activeGender" : ""}
                onClick={() => {
                  selectGender(3);
                }}
              >
                Other
              </button>
            </div>
          </span>
          <span>
            <label htmlFor="icon">Date of Birth</label>
            <Calendar
              id="icon"
              showIcon
              onChange={(e) =>
                setState((pre) => {
                  const newDate = new Date(e.target.value);
                  pre.DOB = newDate.toLocaleDateString();
                  return { ...pre };
                })
              }
            />
          </span>
          <span>
            <p>Occupation</p>
            <Dropdown
              id="Occupation"
              value={state2.value}
              options={occupation}
              onChange={(e) => {
                setState2({ value: e.value });
              }}
              placeholder="Select a Occupation"
            />
          </span>
        </div>
        <div className="ImageSection ">
          <div className="img">
            <i className="pi pi-camera"></i>
            <img
              src="https://images.pexels.com/photos/14434687/pexels-photo-14434687.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
            />
          </div>
          <h3>Remove-Picture</h3>
          <p>Please select a photo of size (240x240)px</p>
        </div>
      </div>

      <div className="updateProfile">
        <button>Cancel</button>
        <button onClick={submit}>Update</button>
      </div>
    </div>
  );
}

export default Profile;

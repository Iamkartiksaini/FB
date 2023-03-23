import "./Address.scss";
import { useState } from "react";
import AddressModel from "./AddressModel";
import { Button } from "primereact/button";

const addres = [
  {
    head: "Address 1",
    houseNo: "House no. 99",
    city: "Gurugram",
    state: "Haryana",
    country: "India",
    popularSign: "Sadar Bazzar",
    zipCode: 122006,
    defaultAddress: true,
  },
  {
    head: "Address 2",
    houseNo: "House12323",
    city: "Gurugram",
    state: "Haryana",
    country: "India",
    popularSign: "Sadar Bazzar",
    zipCode: 122006,
    defaultAddress: false,
  },
];

const Address = () => {
  const [addresList, setAddressList] = useState(addres);
  const [state, setState] = useState({
    model: false,
    type: "New",
    data: "",
    index: 0,
  });
  console.log("addList", addresList);

  return (
    <div className="Address">
      <div className="header flex justify-content-between ">
        <h1 className="f16">All Address</h1>
        <Button
          // className="Mainbutton"
          onClick={() =>
            setState((pre) => {
              return { ...pre, model: true };
            })
          }
          label={" Add Adress"}
        />
      </div>
      <div className="AddressList flex gap-5">
        {addresList.map((value, index) => {
          return (
            <div className="card" key={index}>
              <div className="head flex justify-content-between">
                <h2 className="f14">{value.head}</h2>
                <span>
                  <svg
                    onClick={() =>
                      setState({
                        type: "Edit",
                        model: true,
                        data: value,
                        index,
                      })
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_252_4706)">
                      <path
                        d="M7.33325 2.66675H2.66659C2.31296 2.66675 1.97382 2.80722 1.72378 3.05727C1.47373 3.30732 1.33325 3.64646 1.33325 4.00008V13.3334C1.33325 13.687 1.47373 14.0262 1.72378 14.2762C1.97382 14.5263 2.31296 14.6667 2.66659 14.6667H11.9999C12.3535 14.6667 12.6927 14.5263 12.9427 14.2762C13.1928 14.0262 13.3333 13.687 13.3333 13.3334V8.66675"
                        stroke="#2A2A2A"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.3333 1.66665C12.5985 1.40144 12.9582 1.25244 13.3333 1.25244C13.7083 1.25244 14.068 1.40144 14.3333 1.66665C14.5985 1.93187 14.7475 2.29158 14.7475 2.66665C14.7475 3.04173 14.5985 3.40144 14.3333 3.66665L7.99992 9.99999L5.33325 10.6667L5.99992 7.99999L12.3333 1.66665Z"
                        stroke="#2A2A2A"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_252_4706">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <i
                    className="pi pi-trash"
                    onClick={() => {
                      const x = addresList.filter((val, ind) => index != ind);
                      setAddressList(x);
                    }}
                  ></i>
                </span>
              </div>
              <div className="mainText">
                <span>{value.houseNo},</span>
                <span>{value.popularSign},</span> <span>{value.city},</span>
                <span>{value.zipCode},</span>
                <span>{value.state}</span>
                <span>{value.country}</span>
              </div>
              <div className="foot">
                <input
                  type="radio"
                  name=""
                  id=""
                  checked={value.defaultAddress}
                  onClick={() => {
                    const x = addresList.map((val, ind) => {
                      if (ind == index) {
                        val.defaultAddress = true;
                      } else {
                        val.defaultAddress = false;
                      }
                      return val;
                    });
                    setAddressList(x);
                  }}
                />
                <span className="f14">
                  {value.defaultAddress ? "Default" : "Make it Default"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {state.model == true ? (
        <AddressModel
          state={state}
          setState={setState}
          setAddressList={setAddressList}
          addresList={addresList}
        />
      ) : null}
    </div>
  );
};

export default Address;

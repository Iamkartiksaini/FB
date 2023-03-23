import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";

const cities = [
  { label: "Gurugram", value: "Gurugram" },
  { label: "Bhadurgarh", value: "Bhadurgarh" },
  { label: "Other", value: "Other" },
];
const countryStates = [
  { label: "Haryana", value: "Haryana" },
  { label: "Delhi", value: "Delhi" },
  { label: "Other", value: "Other" },
];
const countries = [
  { label: "India", value: "India" },
  { label: "Russia", value: "Russia" },
  { label: "Other", value: "Other" },
];

const AddressModel = ({ state, setState, setAddressList, addresList }) => {
  const { type, data } = state;
  const [newAddres, setNewAddress] = useState({
    head: type == "Edit" ? data.head : "",
    houseNo: type == "Edit" ? data.houseNo : "",
    city: type == "Edit" ? data.city : "",
    state: type == "Edit" ? data.state : "",
    country: type == "Edit" ? data.country : "",
    popularSign: type == "Edit" ? data.popularSign : "",
    zipCode: type == "Edit" ? data.zipCode : "",
    defaultAddress: false,
  });
  return (
    <>
      {state.model == true ? (
        <div className="addAddressModel">
          <h2 className="f16">{type == "Edit" ? "Update" : "Add"} Address</h2>
          <div className="Content flex">
            <span>
              <label htmlFor="Address 1">Address 1</label>
              <InputText
                id="Address 1"
                value={newAddres.houseNo}
                onChange={(e) => {
                  setNewAddress((pre) => {
                    pre.houseNo = e.target.value;
                    return { ...pre };
                  });
                }}
              />
            </span>
            <span>
              <label htmlFor="Address 2">Address 2</label>
              <InputText
                id="Address 2"
                value={newAddres.popularSign}
                onChange={(e) => {
                  setNewAddress((pre) => {
                    pre.popularSign = e.target.value;
                    return { ...pre };
                  });
                }}
              />
            </span>
            <span>
              <p>Country</p>
              <Dropdown
                id="Country"
                value={newAddres.country}
                options={countries}
                onChange={(e) => {
                  setNewAddress((pre) => {
                    const y = { ...pre };
                    y.country = e.value;
                    return y;
                  });
                }}
                placeholder="Select a Country"
              />
            </span>
            <span>
              <p>State</p>
              <Dropdown
                id="State"
                value={newAddres.state}
                options={countryStates}
                onChange={(e) => {
                  setNewAddress((pre) => {
                    const y = { ...pre };
                    y.state = e.value;
                    return y;
                  });
                }}
                placeholder="Select a State"
              />
            </span>
            <span>
              <p>City</p>
              <Dropdown
                id="City"
                re
                value={newAddres.city}
                options={cities}
                onChange={(e) => {
                  setNewAddress((pre) => {
                    const y = { ...pre };
                    y.city = e.value;
                    return y;
                  });
                }}
                placeholder="Select a City"
              />
            </span>
            <span>
              <label htmlFor="Zip">Zip</label>
              <InputText
                id="Zip"
                value={newAddres.zipCode}
                keyfilter="int"
                onChange={(e) => {
                  setNewAddress((pre) => {
                    pre.zipCode = e.target.value;
                    return { ...pre };
                  });
                }}
              />
            </span>
          </div>
          <div className="foot">
            <div className="decision">
              <input
                type="radio"
                name=""
                id=""
                checked={newAddres.defaultAddress}
                onClick={(e) => {
                  setNewAddress((pre) => {
                    const x = { ...pre };
                    x.defaultAddress = !newAddres.defaultAddress;
                    return x;
                  });
                }}
              />
              <span className="f14">Make it Default</span>
            </div>
            <div className="btns">
              <button
                className="cancel"
                onClick={() =>
                  setState({ type: "New", data: "", model: false })
                }
              >
                Cancel
              </button>
              <button
                className="Mainbutton"
                onClick={() => {
                  if (type == "New") {
                    setAddressList((pre) => {
                      const x = newAddres;
                      x.head = `Address ${addresList.length + 1}`;
                      return [...pre, newAddres];
                    });
                  } else {
                    setAddressList((pre) => {
                      const x = [...pre];
                      x[state.index] = newAddres;
                      return x;
                    });
                  }
                  setState({ type: "New", data: "", model: false });
                }}
              >
                {type == "Edit" ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      ;
    </>
  );
};

export default AddressModel;

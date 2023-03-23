import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";
const Notification = () => {
  const notificationOptions = [
    { label: "All Notification", value: false },
    { label: "New Contest", value: false },
    { label: "Results", value: false },
    { label: "Orders", value: false },
    { label: "Points", value: false },
    { label: "New Products", value: false },
    { label: "Email", value: false },
    { label: "SMS", value: false },
  ];
  const [state, setState] = useState(notificationOptions);

  return (
    <div className="Notification flex flex-column gap-3  p-3">
      {state.map((val, index) => {
        return (
          <div
            key={index}
            className="flex justify-content-between pt-3 text-black-alpha-50 text-sm"
          >
            <h3>{val.label}</h3>
            <InputSwitch
              checked={val.value}
              disabled={
                index > 0 == true && state[0].value == false ? true : false
              }
              onChange={(e) => {
                const x = [...state];
                x[index].value = !state[index].value;
                setState(x);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Notification;

import { TabView, TabPanel } from "primereact/tabview";

import { useState } from "react";
import Address from "./Address";
import Profile from "./Profile";
import Notification from "./Notification";

import "./Index.scss";

function Setting() {
  const [tabState, setTabState] = useState(0);
  return (
    <div className="Setting">
      <h1>Account</h1>
      <TabView activeIndex={tabState} onTabChange={(e) => setTabState(e.index)}>
        <TabPanel header="Profile">
          <Profile />
        </TabPanel>
        <TabPanel header="Address">
          <Address />
        </TabPanel>
        <TabPanel header="Password">Content III</TabPanel>
        <TabPanel header="Notification">
          <Notification />
        </TabPanel>
      </TabView>
    </div>
  );
}

export default Setting;

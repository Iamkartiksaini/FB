import "../Style/Ad.scss";
import ProfileTag from "../Pages/ProfileTag";
import { Button } from "primereact/button";

const Ad = () => {
  const images = {
    link2:
      "https://images.pexels.com/photos/11662238/pexels-photo-11662238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link1:
      "https://images.pexels.com/photos/6605302/pexels-photo-6605302.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  };

  return (
    <div className="Ad flex flex-column  gap-4">
      <div className="img flex flex-column  border-round-xl gap-4">
        <div className="head flex justify-content-between align-items-center ">
          <h1>Sponserd</h1>
          <p>Create Ad</p>
        </div>
        <div className="body">
          <img src={images.link1} alt="" />
          <img src={images.link2} alt="" />
        </div>
      </div>
      <div className="suggestions flex flex-column  gap-2 bg-white border-round-xl">
        <div className="head flex justify-content-between align-items-center ">
          <h1>Add Friends</h1>
          <Button onClick={() => {
            const x = document.querySelector(".p-button-icon.p-c.p-button-icon-right.pi.pi-spinner")
            console.log("clicked");
            x.animate({ transform: "rotate(720deg) " }, {
              duration: 2000,
              iterations: 1,
            })
          }}
            title="Refresh"
            icon="pi pi-spinner"
            rounded
            text
            severity="info"
            aria-label="User"
            label="Refresh"
            iconPos="right"
          />
        </div>
        <div className="UserList">
          <ProfileTag />
        </div>
      </div>
    </div>
  );
};

export default Ad;

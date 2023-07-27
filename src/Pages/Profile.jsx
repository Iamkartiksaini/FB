import { useEffect } from "react";
import "../Style/ProfilePage.scss";
import AllPosts from "./AllPosts";
import { getFileLink } from "../Redux/axiosConfig";
import { useDispatch } from "react-redux";



const Profile = () => {
    const user = JSON.parse(localStorage.getItem("FB-user"))
    const dispatch = useDispatch();
    function getTabs(e) {
        const line = document.querySelector(".Tabs .empty")
        if (e == undefined) {
            const span = document.querySelector(".Tabs span.active")
            line.style.left = span.offsetLeft + "px"
            line.style.width = span.offsetWidth + "px"
            // line.style.top = span.offsetTop + span.offsetHeight + "px"
            return
        }
        else if (e.target.nodeName == "SPAN") {
            const span = document.querySelectorAll(".Tabs span")
            span.forEach((val) => {
                val.classList.remove("active")
            })
            e.target.classList.add("active")
            line.style.left = e.target.offsetLeft + "px"
            line.style.width = e.target.offsetWidth + "px"
            // line.style.top = e.target.offsetTop + e.target.offsetHeight + "px"

        }
    }
    let time
    window.addEventListener("resize", () => {
        clearInterval(time)
        time = setTimeout(() => {
            const line = document.querySelector(".Tabs .empty")
            const span = document.querySelector(".Tabs span.active")
            line.style.left = span.offsetLeft + "px"
            line.style.width = span.offsetWidth + "px"
            // line.style.top = span.offsetTop + span.offsetHeight + "px"
        }, 200);
    })

    useEffect(() => {
        getTabs()
        console.log(getFileLink + user.profilePic);

    }, [])
    return (
        <div className="profile_Page">
            <div className="profile">
                <div className="cover">
                    <img src="https://images.pexels.com/photos/17497595/pexels-photo-17497595/free-photo-of-steam-over-stream-among-hills.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </div>
                <div className="pic" style={{ backgroundImage: `url(${getFileLink + user.profilePic})` }}>
                    <img src={getFileLink + user.profilePic} alt={getFileLink + user.profilePic} />
                </div>
            </div>
            <div className="name">
                <div className="leftColumn">
                    <h1>{user.username}</h1>
                    <p>{user.friends.length} followers. {user.friends.length}  following  </p>
                </div>
                <div className="btns">
                    <button>Follow</button>
                    <button className="active">Message</button>
                    <button>Contact</button>
                    <button onClick={() => {
                        localStorage.clear();
                        dispatch({ type: "userLogin", currentUser: "" });
                        dispatch({ type: "logOutRefresh" });
                    }}>Logout</button>
                </div>
            </div>
            <div className="details">
                <div className="bio">
                    <span>Bio -</span>    <h3>{user.tag}</h3>
                </div>
                <div className="info">
                    <span className="flex align-items-center">
                        <i className="pi pi-instagram"></i>

                        <div className="text">
                            <h3>Instagram</h3>
                            <p className="mt-1">
                                {user.socialLinks != undefined
                                    ? user.socialLinks[0].address
                                    : null}
                            </p>
                        </div>
                    </span>
                    <span className="flex align-items-center">
                        <i className="pi pi-phone"></i>
                        <div className="text">
                            <h3>Mobile Number</h3>
                            <p className="mt-1">
                                {user.socialLinks != undefined
                                    ? user.socialLinks[1].address
                                    : null}
                            </p>
                            <br />
                        </div>{" "}
                    </span>
                </div>
            </div>
            <div className="Tabs" onClick={(e) => getTabs(e)}>
                <span className="active">Posts</span>
                <span>About</span>
                <span>Photos</span>
                <span>More</span>
                <span>Extra</span>
                <p className="empty"></p>
            </div>
            <div className="ProfileContent">
                <div className="Post-section">
                    <AllPosts type="globle" />
                </div>
            </div>
        </div>
    )
}

export default Profile
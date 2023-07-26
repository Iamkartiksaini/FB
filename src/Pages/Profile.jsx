import "../Style/ProfilePage.scss";
import AllPosts from "./AllPosts";

const Profile = () => {
    function getTabs(e) {
        if (e.target.nodeName == "SPAN") {
            const line = document.querySelector(".Tabs .empty")
            line.style.left = e.target.offsetLeft + "px"
            line.style.width = e.target.offsetWidth + "px"
        }
    }
    return (
        <div className="profile_Page">
            <div className="profile">
                <div className="cover">
                    <img src="https://images.pexels.com/photos/17497595/pexels-photo-17497595/free-photo-of-steam-over-stream-among-hills.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </div>
                <div className="pic">
                    <img src="https://images.pexels.com/photos/16899839/pexels-photo-16899839/free-photo-of-man-portrait-near-rocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                </div>
            </div>
            <div className="name">
                <div className="leftColumn">
                    <h1>Kartik Saini</h1>
                    <p>77M followers. 29M following  </p>
                </div>
                <div className="btns">
                    <button>Follow</button>
                    <button className="active">Message</button>
                    <button>Contact</button>
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
import "../Style/ProfilePage.scss";

const Profile = () => {
    return (
        <div>
            <section class="profile-cover">
                <img src="profile-cover.jpg" alt="Profile Cover" />
            </section>

            <section class="profile-info">
                <div class="profile-picture">
                    <img src="profile-picture.jpg" alt="Profile Picture" />
                </div>
                <h2>Jane Doe</h2>
                <p>Bio: Hello, I'm Jane Doe! I love traveling and photography. 🌍📸</p>
            </section>

            <section class="profile-posts">
                <div class="post">
                    <h3>Post Title 1</h3>
                    <p>This is my first post on Facebook!</p>
                </div>
                <div class="post">
                    <h3>Post Title 2</h3>
                    <p>Enjoying the beautiful sunset at the beach. 🌅😍</p>
                </div>
            </section>

            <footer>
                <p>&copy; 2023 Facebook. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Profile
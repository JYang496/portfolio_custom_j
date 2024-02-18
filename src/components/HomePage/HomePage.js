import "./HomePage.scss"

const HomePost = () =>{
    return <div className="home-post">
        <h3>Title</h3>
        <img src="https://static.wikia.nocookie.net/minecraft-earth/images/9/90/Diamond_block_0.png/revision/latest?cb=20191115051338" alt="test"/>
        <p>dessc 145123455desc 12345dsc 145d5desc 12345de55desc 12345dsc 145d5desc 12345desc 12345</p>
    </div>
}
export const HomePage = () => {
    return <>
        <div className="home-container">
            <div className="home-promo">
                <div className="page-title">Your Name</div>
                <div className="promo-content">
                    <div className="promo-desc">
                        <p>Here is my brief introduction</p>
                        <p>Here is my brief introduction</p>
                        <p>Here is my brief introduction</p>
                        <p>Here is my brief introduction</p>
                    </div>
                    <div className="promo-pic"><img src="https://raw.githubusercontent.com/JYang496/personal_website/main/website/src/components/HomePage/profile.png" alt="profile"/></div>
                </div>
            </div>
            <div className="tech-stack">
                <h2>My Tech Stacks</h2>
                <ul>
                    <li>Front-end:</li>
                    <li>Back-end:</li>
                    <li>Cloud:</li>
                    <li>Database:</li>
                    <li>Network:</li>
                </ul>
            </div>
            <div className="feature-posts">
                <h2>Feature Posts</h2>
                <div className="post-container">
                    <HomePost/>
                    <HomePost/>
                    <HomePost/>
                </div>
            </div>
        </div>


    </>
}

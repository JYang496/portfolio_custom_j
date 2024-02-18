import './Posts.scss'
import {Link} from "react-router-dom";

const Post = (props) => {
    const {articleTitle} = props;
    return <div className="post-section">
        <Link to={`/posts/${articleTitle}`}>
            <div className="post-background">
                <div className="post-warpper">
                    <div className="post-image">
                        <img src="https://static.wikia.nocookie.net/minecraft-earth/images/9/90/Diamond_block_0.png/revision/latest?cb=20191115051338" alt="test"/>
                    </div>
                    <div className="post-content">
                        <div className="post-title">{articleTitle}</div>
                        <div className="post-desc">
                            <p>dessc 145123455desc 12345dsc 145d5desc 12345desc 123145123455de
                                sc 12345dsc 145d5desc 12345desc 123145123455desc 12345dsc 145d5desc 12345desc 1
                                23145123455desc 12345dsc 145d5desc 12345145123455desc 12345dsc 145d5desc 12345desc
                                123145123455desc 12345dsc 145d5desc 12345desc 123145123455desc 12345dsc 145d5desc 12345desc 123
                                desc 123145123455desc 12345dsc 145d5desc 12345desc 123145123455desc 12345dsc 145d5desc 12345desc 12345</p>
                        </div>
                        <div className="post-operation">Like tags: 1 2 3</div>

                    </div>
                </div>
            </div>
        </Link>

    </div>
}
export const Posts = () => {
    let posts = ["obj1","obj2","obj3"]
    return <>
        <div className="posts">
            <div className="page-title">Posts</div>
            {posts.map((id,index) =>{
                return <Post articleTitle={id} key={index}/>
            })}
        </div>
    </>
}
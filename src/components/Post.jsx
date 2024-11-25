import { PostStore } from "../store/postStore";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";



function PostCard({posts}) {
  const {deletePost} = useContext(PostStore);

  return (
    <>
    {/* {console.log(posts.title)} */}
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {posts.title}
          <span
            className=" btn position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id={posts.id}
            onClick={() => deletePost(posts.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{posts.body}</p>

        {posts.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))};
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {posts.reactions.likes + posts.reactions.dislikes} people. <hr/>
          Likes : {posts.reactions.likes} , Dislikes : {posts.reactions.dislikes}
        </div>
      </div>
    </div>
    </>
  );
};

export default PostCard;

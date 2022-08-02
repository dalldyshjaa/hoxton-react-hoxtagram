import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post";
import { CreatePost } from "./components/CreatePost";

function App() {
  const [postImages, setPostImages] = useState([]);
  const [postComments, setPostComments] = useState([]);

  function like(post: any) {
    let copyPostImages = [...postImages];
    let match: any = copyPostImages.find((copyPost) => post.id === copyPost.id);
    match.likes++;
    setPostImages(copyPostImages);
    fetch(`http://localhost:3006/images/${match.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(match),
    });
  }
  function addComment(content: string, imageId: number) {
    fetch("http://localhost:3006/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, imageId }),
    })
      .then((resp) => resp.json())
      .then((comment) => {
        setPostComments([...postComments, comment]);
      });
  }

  function createPost(title: string, image: string) {
    fetch("http://localhost:3006/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image, likes: 0 }),
    })
      .then((resp) => resp.json())
      .then((newPost) => {
        setPostImages([...postImages, newPost]);
      });
  }

  useEffect(() => {
    fetch("http://localhost:3006/comments")
      .then((resp) => resp.json())
      .then((comments) => setPostComments(comments));

    fetch("http://localhost:3006/images")
      .then((resp) => resp.json())
      .then((images) => setPostImages(images));
  }, []);

  return (
    <>
      <img src="src/assets/hoxtagram-logo.png" alt="" />
      <CreatePost createPost={createPost} />
      <div className="App image-container">
        {postImages.map((images) => (
          <Post
            images={images}
            comments={postComments}
            key={images.id}
            like={like}
            addComment={addComment}
          />
        ))}
      </div>
    </>
  );
}

export default App;

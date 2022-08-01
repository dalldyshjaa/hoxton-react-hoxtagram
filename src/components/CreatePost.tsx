export function CreatePost({ createPost }: any) {
  return (
    <div className="create-port-unit">
      <form
        className="create-port-form"
        onSubmit={(e) => {
          e.preventDefault();
          createPost(e.target.content.value, e.target.image.value);
        }}
      >
        <h2>New Post</h2>
        <input type="text" name="content" placeholder="Type text" />
        <div>
          <input type="text" name="image" placeholder="Type an image URL" />
          <input type="submit" value="Post" />
        </div>
      </form>
    </div>
  );
}

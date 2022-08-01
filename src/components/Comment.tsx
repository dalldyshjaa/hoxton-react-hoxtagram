export default function Comment({ comments, addComment, imageId }: any) {
  return (
    <>
      <ul className="comments">
        {comments.map((comment: any) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
      <div className="add-comment-unit">
        <form
          className="add-comment-form"
          onSubmit={(e) => {
            e.preventDefault();
            addComment(e.target.contentt.value, imageId);
            e.target.reset();
          }}
        >
          <input
            name="contentt"
            type="text"
            placeholder="Add a comment"
            className="add-comment-input"
          />
          <input type="submit" className="post-comment-input" value="Post" />
        </form>
      </div>
    </>
  );
}

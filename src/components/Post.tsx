import Comment from "./Comment";

export default function Post({ images, comments, like, addComment }: any) {
  return (
    <article className="image-card">
      <h2 className="title">{images.title}</h2>
      <img src={`${images.image}`} className="image" />
      <div className="likes-section">
        <span className="likes">{images.likes + " likes"}</span>
        <button
          className="like-button"
          onClick={() => {
            like(images);
          }}
        >
          ♥
        </button>
      </div>

      <Comment
        comments={comments.filter(
          (comment: any) => comment.imageId === images.id
        )}
        addComment={addComment}
        imageId={images.id}
      />
    </article>
  );
}

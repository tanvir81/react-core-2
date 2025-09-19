export default function Post({ post }) {
  return (
    <div className="card">
      <h3>{post.title}</h3>
      <p className="card">{post.body}</p>
    </div>
  );
}

export default function Friend({ friend }) {
  console.log(friend);
  const { name, email, username, phone } = friend;
  return (
    <div className="card">
      <h4>Name: {name}</h4>
      <p>e-mail: {email}</p>
      <p>Username: {username}</p>
      <p>Phone: {phone}</p>
    </div>
  );
}

import { useSelector } from "react-redux";

function UserName() {
  const username = useSelector((state) => state.user.username);
  if (!username) return null;
  return <div className="text-slate-100 uppercase">{username}</div>;
}

export default UserName;

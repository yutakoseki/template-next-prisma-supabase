import UserList from "./userList";

export default async function Home() {
  return (
    <div>
      <br />
      {/* User一覧を表示するコンポーネント */}
      <UserList />
    </div>
  );
}
interface props {
  userId: string;
  title: string;
  body: string;
}

function UserPostComponents({ userId, title, body }: props) {
  return (
    <div className="flex flex-col shadow-2xl inset-shadow-2xs bg-white justify-start p-10 rounded-2xl">
      <p>{userId}</p>
      <p className="text-[16px] font-bold">{title}</p>
      <p>{body}</p>
    </div>
  );
}

export default UserPostComponents;

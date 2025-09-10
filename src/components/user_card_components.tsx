import profileImage from "../assets/images/profile.jpg";

interface props {
  userName: string;
  email: string;
}

function UserCardComponents({ userName, email }: props) {
  return (
    <div className="flex items-center justify-center gap-3 shadow-2xl p-5 bg-white rounded-2xl inset-shadow-2xs">
      {/* user image */}
      <img
        src={profileImage}
        alt=""
        className="rounded-full h-24 w-24  object-cover"
      />
      <div className="flex flex-col gap-2 justify-start">
        <p className="text-2xl font-bold">{userName}</p>
        <p>{email}</p>
      </div>
      {/*  */}
    </div>
  );
}

export default UserCardComponents;

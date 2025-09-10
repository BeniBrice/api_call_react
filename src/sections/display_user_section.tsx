import UserCardComponents from "../components/user_card_components";
import userUserHook from "../hooks/useUseHook";

function DisplayUserSection() {
  let [isLoading, users, hasError] = userUserHook();
  if (isLoading) return <p>Loading users...</p>;
  if (hasError) return <p>Error fetching users.</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <section className="w-full p-10">
      <div className="grid grid-cols-4 gap-5">
        {users.map((user) => (
          <UserCardComponents
            key={user.email}
            userName={user.username}
            email={user.email}
          />
        ))}
      </div>
    </section>
  );
}

export default DisplayUserSection;

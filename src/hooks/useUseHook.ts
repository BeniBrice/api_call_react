import { useEffect, useState } from "react";
import type { User } from "../models/userModel";
import userList from "../api/userApi";

function userUserHook(): [boolean, User[], boolean] {
  let [isLoading, setIsaLoading] = useState<boolean>(true);
  let [hasError, setHasError] = useState<boolean>(false);
  let [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    userList()
      .then((data) => setUsers(data))
      .catch((e) => {
        setHasError(true);
        setIsaLoading(false);
        console.log("Error WHILE GETTING USER ", e);
      })
      .finally(() => setIsaLoading(false));
  }, []);

  return [isLoading, users, hasError];
}

export default userUserHook;

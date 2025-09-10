import { UserSchema, type User } from "../models/userModel";
import z from "zod";

async function userList(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return z.array(UserSchema).parse(data);
}

export default userList;

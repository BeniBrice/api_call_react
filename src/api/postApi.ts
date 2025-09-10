import z from "zod";
import { PostShema, type Post } from "../models/postModel";

interface props {
  userId?: string;
  currentPage: number;
}

interface resultPosts {
  posts: Post[];
  totalPages: number;
}

async function postList({
  userId,
  currentPage = 2,
}: props): Promise<resultPosts> {
  let url: string = "https://jsonplaceholder.typicode.com/posts";
  let params = new URLSearchParams();

  if (userId) params.append("userId", userId.toString());
  params.append("_limit", "5");
  params.append("_page", currentPage.toString());
  url = `${url}?${params.toString()}`;

  let res: Response = await fetch(url);

  let data: any = await res.json();
  const totalCount = res.headers.get("X-Total-Count");
  const totalPages = totalCount ? Math.ceil(Number(totalCount) / 5) : 1;
  const post = z.array(PostShema).parse(data);
  return { posts: post, totalPages: totalPages };
}

export default postList;

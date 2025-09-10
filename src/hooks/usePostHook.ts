import { useEffect, useState } from "react";
import type { Post } from "../models/postModel";
import postList from "../api/postApi";

interface userPostsResults {
  isLoading: boolean;
  posts: Post[];
  hasError: boolean;
  totalPage: number;
}

interface props {
  userId?: string;
  currentPage: number;
}

function usePostHook({ userId, currentPage }: props): userPostsResults {
  let [isLoading, setIsLoading] = useState<boolean>(true);
  let [posts, setPosts] = useState<Post[]>([]);
  let [hasError, setHasError] = useState<boolean>(false);
  let [totalPage, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    postList({ currentPage: currentPage, userId: userId })
      .then((data) => {
        let { posts, totalPages } = data;
        setPosts(posts);
        setTotalPages(totalPages);
      })
      .catch((e) => {
        console.log("Error WHILE GETTING USER POST", e);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage, userId]);
  return { isLoading, posts, hasError, totalPage };
}

export default usePostHook;

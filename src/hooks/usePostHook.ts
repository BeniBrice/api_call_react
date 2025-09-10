import { useEffect, useRef, useState } from "react";
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
  const cache = useRef<Record<string, { posts: Post[]; totalPages: number }>>(
    {}
  );
  useEffect(() => {
    const cacheKey = `${currentPage}-${userId ?? "all"}`;
    // setIsLoading(true);
    if (cache.current[cacheKey]) {
      setPosts(cache.current[cacheKey].posts);
      setTotalPages(cache.current[cacheKey].totalPages);
      console.log("DATA IS ARLEADY I CACHE");
      return;
    }

    async function fetchData(): Promise<void> {
      setIsLoading(true);
      setHasError(false);
      try {
        let { posts, totalPages } = await postList({
          userId: userId,
          currentPage: currentPage,
        });
        cache.current[cacheKey] = { posts, totalPages };

        setPosts(posts);
        setTotalPages(totalPages);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    // postList({ currentPage: currentPage, userId: userId })
    //   .then((data) => {
    //     let { posts, totalPages } = data;
    //     setPosts(posts);
    //     setTotalPages(totalPages);
    //   })
    //   .catch((e) => {
    //     console.log("Error WHILE GETTING USER POST", e);
    //     setHasError(true);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  }, [currentPage, userId]);
  return { isLoading, posts, hasError, totalPage };
}

export default usePostHook;

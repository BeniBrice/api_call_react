import { useState } from "react";
import InputForm from "../components/input_form";
import UserPostComponents from "../components/user_post_components";
import usePostHook from "../hooks/usePostHook";

function PostSection() {
  let [currentPage, setCurrentPage] = useState<number>(1);
  let [userId, setUserId] = useState<string | undefined>(undefined);
  let { isLoading, posts, hasError, totalPage } = usePostHook({
    currentPage: currentPage,
    userId: userId,
  });
  const totalPages = totalPage;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <section className="w-full p-10">
      <div className="flex flex-col gap-5 items-center justify-center">
        <InputForm
          onClick={(value) => {
            setUserId(value);
          }}
        />

        {isLoading && <p>Is Loading.......</p>}
        {hasError && <p>ERROR WHILE GETTING POSTS ......</p>}

        {!isLoading && !hasError && (
          <div className="pt-5 grid grid-cols-4 gap-4">
            {posts.map((post) => (
              <UserPostComponents
                key={post.id} // clé unique par post
                userId={post.userId.toString()}
                title={post.title}
                body={post.body}
              />
            ))}
          </div>
        )}

        <div className="flex items-center justify-center space-x-2 mt-10">
          {/* Bouton Précédent */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className={`px-3 py-1 rounded-md border 
         ${
           currentPage === 1
             ? "text-gray-400 border-gray-300"
             : "text-blue-600 border-blue-400 hover:bg-blue-100"
         }`}
          >
            Précédent
          </button>

          {/* Nombres de pages */}

          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-md border transition 
          ${
            currentPage === page
              ? "bg-blue-600 text-white border-blue-600"
              : "border-gray-300 text-gray-700 hover:bg-gray-100"
          }`}
            >
              {page}
            </button>
          ))}

          {/* Bouton Suivant */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className={`px-3 py-1 rounded-md border 
        ${
          currentPage === totalPages
            ? "text-gray-400 border-gray-300"
            : "text-blue-600 border-blue-400 hover:bg-blue-100"
        }`}
          >
            Suivant
          </button>
        </div>
      </div>
    </section>
  );
}

export default PostSection;

import React, { useEffect } from "react";
import background from "../assets/aboutblogresources.jpg";
import '../styles/global.css'

const BlogsComponent = ({ blogs }: { blogs: any }) => {
  useEffect(() => {
    console.log("blogs changed");
  }, [blogs]);

  return (
    <>
      <div
        id="blog-list-container"
        className="relative w-full flex items-center justify-center overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 to-slate-100"
      >
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
          src={background.src}
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/30 z-5" />

        <div className="relative z-20 flex flex-col items-center w-full py-20 px-6">
          <div className="text-center mb-16">
            {/* Add headings if needed */}
          </div>

          {blogs ? (
            <div className="grid grid-cols-1 md:grid-cols-2 cardo-regular-blog-text  lg:grid-cols-3 gap-8 w-full max-w-7xl">
              {blogs.map((blog:any, index:number) => (
                <a
                  key={index}
                  href={`/blog/${blog.slug.current}`}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/95 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.mainImage.asset.url}
                      alt={blog.title}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                      <span className="text-xs font-medium text-gray-700">
                        {new Date(blog.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-20 p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full font-medium">
                        Article
                      </span>
                      <span className="text-xs text-gray-500">5 min read</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2 mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700 text-sm line-clamp-3 leading-relaxed mb-4">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                      <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                        Read More
                      </span>
                      <svg
                        className="w-4 h-4 text-blue-600 group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div>No blogs right now</div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogsComponent;

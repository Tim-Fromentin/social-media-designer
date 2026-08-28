interface Entry {
  name: string;
  avatar: string;
  message: string;
  note: number;
}

export function Testimonial({ name, avatar, message, note }: Entry) {
  return (
    <div className="flex-1 bg-primary-400 h-full flex items-center justify-center p-8 overflow-auto">
      <div className="max-w-md w-full bg-linear-to-br from-purple-600 to-blue-500 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-yellow-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
              </svg>
              <svg
                className="w-5 h-5 text-yellow-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
              </svg>
            </div>
            <span className="text-white text-sm font-semibold">
              Verified Customer
            </span>
          </div>
          <blockquote className="text-white text-xl font-medium mb-6">
            "This product exceeded all my expectations. It's intuitive,
            powerful, and has dramatically improved my workflow. I can't imagine
            working without it now!"
          </blockquote>
          <div className="flex items-center space-x-4">
            <img
              src="https://randomuser.me/api/portraits/women/91.jpg"
              alt="User avatar"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <p className="text-white font-semibold">
                {name || "Sarah Johnson"}
              </p>
              <p className="text-blue-200 text-sm">UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

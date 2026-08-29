export const sliders = [
  {
    name: "1",
    code: `
        <div className="max-w-md w-full bg-white rounded-sm p-4">
          <div className="flex items-center space-x-2 mb-5">
            {[0, 1, 2, 3, 4].map((index) => (
              <Star
                key={index}
                className={
                  index < (note || 0)
                    ? "w-5 h-5 fill-amber-400 text-amber-400"
                    : "w-5 h-5 fill-gray-300 text-gray-300"
                }
              />
            ))}
          </div>

          <p>{message || "Lorem ipsum dolor sit amet. Qui doloribus praesentium ex velit atque non unde facilis non asperiores dolor. Qui harum placeat et cumque quisquam quo perferendis soluta cum nihil suscipit."}</p>

          <div className="flex items-center gap-2 mt-5">
            <img
              src={avatar || "https://api.dicebear.com/10.x/open-peeps/svg?seed=wwtg6pzb"}
              crossOrigin="anonymous"
              alt={name || "Avatar"}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <p className="text-gray-500 font-semibold">
              {name || "Sarah Johnson"}
            </p>
          </div>
        </div>
      `,
  },
  {
    name: "2",
    code: `<div className="max-w-md w-full bg-linear-to-br from-purple-600 to-blue-500 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
                         {[0, 1, 2, 3, 4].map((index) => (
              <Star
                key={index}
                className={
                  index < (note || 0)
                    ? "w-5 h-5 fill-amber-400 text-amber-400"
                    : "w-5 h-5 fill-gray-300 text-gray-300"
                }
              />
            ))}
            </div>
          </div>
          <blockquote className="text-white text-xl font-medium mb-6">
            {message || "Lorem ipsum dolor sit amet. Qui doloribus praesentium ex velit atque non unde facilis non asperiores dolor. Qui harum placeat et cumque quisquam quo perferendis soluta cum nihil suscipit."}
          </blockquote>
          <div className="flex items-center space-x-4">
            <img
             src={avatar || "https://api.dicebear.com/10.x/open-peeps/svg?seed=wwtg6pzb"}
              alt={name || "Avatar"}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <p className="text-white font-semibold">
                {name || "Sarah Johnson"}
              </p>
            </div>
          </div>
        </div>
      </div>`,
  },
];

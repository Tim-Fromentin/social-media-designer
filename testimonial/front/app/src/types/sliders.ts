
export const sliders = [
  {
    name: "simple testimonial",
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

          <p className="max-w-100 wrap-break-word">{message || "Lorem ipsum dolor sit amet. Qui doloribus praesentium ex velit atque non unde facilis non asperiores dolor. Qui harum placeat et cumque quisquam quo perferendis soluta cum nihil suscipit."}</p>

          <div className="flex items-center gap-2 mt-5">
            <img
              src={avatar || "https://images.unsplash.com/photo-1756806885486-e289ac412b9c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              crossOrigin="anonymous"
              alt={name || "Avatar"}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
            <p className="text-gray-500 font-semibold">
              {name || "John Doe"}
            </p>
          </div>
        </div>
      `,
  },
  {
    name: "modern testimonial",
    code: `
 <div className="max-w-lg w-full min-h-50 bg-white rounded-2xl border border-slate-100 relative overflow-hidden flex flex-col justify-between p-6 pr-[38%]">
  <div className="space-y-3 z-10 w-full min-w-150">
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          className={
            index < (note || 0)
              ? "w-4 h-4 fill-amber-400 text-amber-400"
              : "w-4 h-4 fill-slate-200 text-slate-200"
          }
        />
      ))}
    </div>
    <blockquote className="text-slate-600 text-sm leading-relaxed italic line-clamp-4 max-w-70 wrap-break-word">
      «{message || "Lorem ipsum dolor sit amet."}»
    </blockquote>
  </div>

  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2 z-10 w-full">
    <span className="text-slate-900 font-bold text-sm truncate">
      {name || "John Doe"}
    </span>
    <span className="text-xs text-slate-400 font-medium whitespace-nowrap">
      Avis vérifié
    </span>
  </div>

  <img
    src={avatar || "https://images.unsplash.com/photo-1756806885486-e289ac412b9c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    crossOrigin="anonymous"
    alt={name || "Avatar"}
    className="absolute top-0 right-0 bottom-0 w-[35%] h-full object-cover"
  />
</div>
    `,
  },
];

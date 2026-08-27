import { Star, Stars } from "lucide-react";

export function SideBar() {
  return (
    <aside className="w-96 flex flex-col gap-5 py-12.5 px-6.25">
      <div>
        <h1 className="text-sm text-primary-950">Social Design Suite</h1>
        <p className="text-xs text-gray-500">Génerateur de testimonial</p>
      </div>

      <hr className="w-full border-primary-200" />

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary-900"
        >
          Nom
        </label>
        <div className="mt-2 mb-5">
          <div className="flex items-center rounded-sm bg-white pl-3 outline-1 outline-gray-300 has-[input:focus-within]:-outline-offset-2">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="avatar"
          className="block text-sm font-medium text-primary-900"
        >
          Avatar
        </label>
        <div className="mt-2 mb-5">
          <div className="flex items-center rounded-sm bg-white pl-3 outline-1 outline-gray-300 has-[input:focus-within]:-outline-offset-2">
            <input
              id="avatar"
              type="text"
              name="avatar"
              placeholder="img.com"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="avatar"
          className="block text-sm font-medium text-primary-900"
        >
          Note
        </label>
        <div className="mt-2 mb-5">
          <div className="flex items-center rounded-sm bg-white has-[input:focus-within]:-outline-offset-2 gap-0.75">
            <Star className="text-amber-400" />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary-900"
        >
          Message
        </label>
        <div className="mt-2 mb-5">
          <div className="flex items-center rounded-sm bg-white pl-3 outline-1 outline-gray-300 has-[input:focus-within]:-outline-offset-2">
            <textarea
              id="message"
              name="message"
              placeholder="img.com"
              className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
      </div>

      <button>Export</button>
    </aside>
  );
}

import { Star } from "lucide-react";
import ButtonDropDown from "./ButtonDropdown";
import { useEffect, type Dispatch, type SetStateAction } from "react";
interface Entry {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  avatar: string;
  setAvatar: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  note: number;
  setNote: Dispatch<SetStateAction<number>>;
}
export function SideBar({
  name,
  setName,
  avatar,
  setAvatar,
  message,
  setMessage,
  note,
  setNote
}: Entry) {
  return (
    <aside className="w-96 flex flex-col gap-4 py-8 px-6 bg-white border-r border-gray-100 h-screen shrink-0 overflow-y-auto">
      <div>
        <h1 className="text-sm font-bold text-primary-950">
          {name}
          Social Design Suite
        </h1>
        <p className="text-xs text-gray-500">Génerateur de testimonial</p>
      </div>

      <hr className="w-full border-primary-200" />

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-primary-900 mb-1.5"
        >
          Nom
        </label>
        <div className="flex items-center rounded-md bg-white border focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            className="w-full py-1.5 px-3 text-sm text-gray-900 focus:outline-none rounded-md"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="avatar"
          className="block text-sm font-medium text-primary-900 mb-1.5"
        >
          Avatar
        </label>
        <div className="flex items-center rounded-md bg-white border focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400">
          <input
            id="avatar"
            type="text"
            name="avatar"
            placeholder="img.com"
            className="w-full py-1.5 px-3 text-sm text-gray-900 focus:outline-none rounded-md"
          />
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-primary-900 mb-1.5">
          Note
        </span>
        <div className="flex items-center gap-1 py-1 text-gray-300">
          <Star className="w-5 h-5 fill-amber-400 text-amber-400 cursor-pointer" />
          <Star className="w-5 h-5 cursor-pointer hover:text-amber-400" />
          <Star className="w-5 h-5 cursor-pointer hover:text-amber-400" />
          <Star className="w-5 h-5 cursor-pointer hover:text-amber-400" />
          <Star className="w-5 h-5 cursor-pointer hover:text-amber-400" />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-primary-900 mb-1.5"
        >
          Message
        </label>
        <div className="flex items-center rounded-md bg-white border border-gray-300 focus-within:ring-1 focus-within:ring-primary-400">
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Lorem ipsum"
            className="w-full py-1.5 px-3 text-sm text-gray-900 focus:outline-none rounded-md resize-none"
          />
        </div>
      </div>

      <ButtonDropDown />
    </aside>
  );
}

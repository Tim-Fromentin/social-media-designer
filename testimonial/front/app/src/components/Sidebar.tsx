import { ExternalLink } from "lucide-react";
import ButtonDropDown from "./ButtonDropdown";
import { type Dispatch, type SetStateAction } from "react";
interface Entry {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  avatar: string;
  setAvatar: Dispatch<SetStateAction<string>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  note: number;
  setNote: Dispatch<SetStateAction<number>>;
  slideIndex: number;
  setSlideIndex: Dispatch<SetStateAction<number>>;
}
export function SideBar({
  name,
  setName,
  avatar,
  setAvatar,
  message,
  setMessage,
  note,
  setNote,
  slideIndex,
}: Entry) {
  return (
    <aside className="w-96 flex flex-col gap-4 py-8 px-6 bg-white border-r border-gray-100 h-screen shrink-0 overflow-y-auto">
      <div>
        <h1 className="text-sm font-bold text-primary-950">
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
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-primary-900 mb-1.5">
          Note
        </span>
        <div className="flex items-center rounded-md bg-white border focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400">
          <input
            id="avatar"
            type="number"
            min={0}
            max={5}
            step={1}
            name="avatar"
            defaultValue={1}
            placeholder="5"
            className="w-full py-1.5 px-3 text-sm text-gray-900 focus:outline-none rounded-md"
            onChange={(e) => setNote(parseInt(e.target.value))}
          />
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
            onChange={(e) => setMessage(e.target.value)}
            defaultValue={message}
          />
        </div>
      </div>

      <ButtonDropDown
        name={name}
        avatar={avatar}
        message={message}
        note={note}
        slideIndex={slideIndex}
      />

      <a href="https://unsplash.com/fr/photos/homme-portant-un-gilet-marron-et-une-chemise-blanche-qwoL5kzl76g" className="mt-3 text-primary-400 flex items-center gap-2">
        Image d'avatar <ExternalLink className="h-4 w-4" />
      </a>
    </aside>
  );
}

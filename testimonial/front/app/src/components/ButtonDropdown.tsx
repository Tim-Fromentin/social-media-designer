import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";
import { Card } from "./Card";
import { domToPng } from "modern-screenshot";
import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { sliders } from "../types/sliders";

interface Entry {
  name: string;
  avatar: string;
  message: string;
  note: number;
  slideIndex: number;
}

export default function ButtonDropDown({
  name,
  avatar,
  message,
  note,
  slideIndex,
}: Entry) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!cardRef.current) return;

    try {
      const dataUrl = await domToPng(cardRef.current, {
        scale: 2,
        fetch: {
          bypassingCache: true,
        },
      });

      const link = document.createElement("a");
      link.download = "testimonial.png";
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Erreur d'export :", err);
    }
  };

  return (
    <Menu as="div" className="relative">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary-400 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-primary-500">
        Exporter
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-white"
        />
      </MenuButton>

      <div
        className="absolute left-[-9999px] top-0 pointer-events-none"
        ref={cardRef}
      >
        <Card
          name={name}
          avatar={avatar}
          message={message}
          note={note}
          slideIndex={slideIndex}
        />
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out"
      >
        <div className="py-1">
          <MenuItem>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
              onClick={handleExport}
            >
              Images
            </button>
          </MenuItem>
        </div>
        <div className="py-1">
          <MenuItem>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden cursor-pointer"
              onClick={() =>
                navigator.clipboard.writeText(
                  renderToString(
                    <Card
                      name={name}
                      avatar={avatar}
                      message={message}
                      note={note}
                      slideIndex={slideIndex}
                    />,
                  ),
                )
              }
            >
              HTML / Tailwind
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

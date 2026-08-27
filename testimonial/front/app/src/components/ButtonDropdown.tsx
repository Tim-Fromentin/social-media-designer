import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function ButtonDropDown() {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary-400 px-3 py-2 text-sm font-semibold text-white shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-primary-500">
        Exporter
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-white"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
            >
              React / Tailwind
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}

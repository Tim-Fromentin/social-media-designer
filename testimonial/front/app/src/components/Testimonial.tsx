import { Plus, Star } from "lucide-react";
import Modal from "./Modal";
import { useState } from "react";

interface Entry {
  name: string;
  avatar: string;
  message: string;
  note: number;
}

export function Testimonial({ name, avatar, message, note }: Entry) {
  const [open, setOpen] = useState(true);

  const sliders = [
    {
      name: "1",
      code: `      <div className="max-w-md w-full bg-white rounded-sm p-4">
        <div className="flex items-center space-x-2 mb-5">
          {[...Array(note || 0).keys()].map((index) => (
            <Star
              key={index}
              className="w-5 h-5 fill-amber-400 text-amber-400"
            />
          ))}
          {[...Array(5 - (note || 0)).keys()].map((index) => (
            <Star key={index} className="w-5 h-5 fill-gray-300 text-gray-300" />
          ))}
        </div>
        <p>{message}</p>

        <div className="flex items-center gap-2 mt-5">
          <img
            src={avatar}
            alt={avatar}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <p className="text-gray-500 font-semibold">
            {name || "Sarah Johnson"}
          </p>
        </div>
      </div>`,
    },
  ];

  return (
    <div className="flex-1 bg-primary-400 h-full relative flex items-center justify-center p-8 overflow-auto">
      <div className="absolute top-6.25 left-6.25 bg-primary-900 text-white px-4 py-0.75 rounded-2xl flex gap-2.5 items-center">
        <p>Preview</p>
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-primary-500"></span>
        </span>
      </div>
      {/* <div className="max-w-md w-full bg-linear-to-br from-purple-600 to-blue-500 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              {[...Array(note || 0).keys()].map((index) => (
                <Star
                  key={index}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
              {[...Array(5 - (note || 0)).keys()].map((index) => (
                <Star key={index} className="w-5 h-5 fill-white text-white" />
              ))}
            </div>
          </div>
          <blockquote className="text-white text-xl font-medium mb-6">
            {message}
          </blockquote>
          <div className="flex items-center space-x-4">
            <img
              src={avatar}
              alt="User avatar"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div>
              <p className="text-white font-semibold">
                {name || "Sarah Johnson"}
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-md w-full bg-white rounded-sm p-4">
        <div className="flex items-center space-x-2 mb-5">
          {[...Array(note || 0).keys()].map((index) => (
            <Star
              key={index}
              className="w-5 h-5 fill-amber-400 text-amber-400"
            />
          ))}
          {[...Array(5 - (note || 0)).keys()].map((index) => (
            <Star key={index} className="w-5 h-5 fill-gray-300 text-gray-300" />
          ))}
        </div>
        <p>{message}</p>

        <div className="flex items-center gap-2 mt-5">
          <img
            src={avatar}
            alt={avatar}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <p className="text-gray-500 font-semibold">
            {name || "Sarah Johnson"}
          </p>
        </div>
      </div>


      <button
        type="button"
        className="flex items-center gap-2 absolute bottom-6.25 right-6.25 text-white bg-primary-900 rounded-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Ajoutez design
        <Plus className="h-4 w-4" />
      </button>

      <Modal open={open} setOpen={setOpen} sliders={sliders} />
    </div>
  );
}

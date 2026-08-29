import { Plus } from "lucide-react";
import Modal from "./Modal";
import { useState, type Dispatch, type SetStateAction } from "react";
import { sliders } from "../types/sliders";
import { Card } from "./Card";

interface Entry {
  name: string;
  avatar: string;
  message: string;
  note: number;
  slideIndex: number;
  setSlideIndex: Dispatch<SetStateAction<number>>;
}

export function Testimonial({
  name,
  avatar,
  message,
  note,
  slideIndex,
  setSlideIndex,
}: Entry) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex-1 bg-primary-400 h-full relative flex items-center justify-center p-8 overflow-auto">
      <div className="absolute top-6.25 left-6.25 bg-primary-900 text-white px-4 py-0.75 rounded-2xl flex gap-2.5 items-center">
        <p>Preview</p>
        <span className="relative flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-primary-500"></span>
        </span>
      </div>

      <Card
        name={name}
        avatar={avatar}
        message={message}
        note={note}
        slideIndex={slideIndex}
      />

      <button
        type="button"
        className="flex items-center gap-2 absolute bottom-6.25 right-6.25 text-white bg-primary-900 rounded-full box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Ajoutez design
        <Plus className="h-4 w-4" />
      </button>

      <Modal
        open={open}
        setOpen={setOpen}
        sliders={sliders}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    </div>
  );
}

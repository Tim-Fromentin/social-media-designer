import { Star } from "lucide-react";
import JsxParser from "react-jsx-parser";
import { sliders } from "../types/sliders";

interface Entry {
  name: string;
  avatar: string;
  message: string;
  note: number;
  slideIndex: number;
}

export function Card({ name, avatar, message, note, slideIndex }: Entry) {
  const StarIcon = (props: any) => <Star {...props} />;

  return (
    <JsxParser
      components={{ Star: StarIcon }}
      jsx={sliders[slideIndex].code}
      bindings={{ name, avatar, message, note }}
    />
  );
}

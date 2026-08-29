import { useState } from "react";
import { SideBar } from "./components/Sidebar";
import { Testimonial } from "./components/Testimonial";

export default function App() {
  const [name, setName] = useState<string>("John Doe");
  const [avatar, setAvatar] = useState<string>(
    "https://api.dicebear.com/10.x/open-peeps/svg?seed=wwtg6pzb",
  );
  const [note, setNote] = useState<number>(1);
  const [message, setMessage] = useState<string>(
    "Lorem ipsum dolor sit amet. Qui doloribus praesentium ex velit atque non unde facilis non asperiores dolor. Qui harum placeat et cumque quisquam quo perferendis soluta cum nihil suscipit.",
  );
  const [slideIndex, setSlideIndex] = useState<number>(0);
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <SideBar
        name={name}
        setName={setName}
        avatar={avatar}
        setAvatar={setAvatar}
        message={message}
        setMessage={setMessage}
        note={note}
        setNote={setNote}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
      <Testimonial
        name={name}
        avatar={avatar}
        message={message}
        note={note}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
      />
    </main>
  );
}

import { useState } from "react";
import { SideBar } from "./components/Sidebar";
import { Testimonial } from "./components/Testimonial";

export default function App() {
  const [name, setName] = useState<string>("John Doe");
  const [avatar, setAvatar] = useState<string>(
    "https://images.unsplash.com/photo-1756806885486-e289ac412b9c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

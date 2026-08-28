import { useState, type SetStateAction } from "react";
import { SideBar } from "./components/Sidebar";
import { Testimonial } from "./components/Testimonial";

export default function App() {
  const [name, setName] = useState<string>("John Doe");
  const [avatar, setAvatar] = useState<string>(
    "https://api.dicebear.com/10.x/lorelei/svg?seed=Felix",
  );
  const [note, setNote] = useState<number>(0);
  const [message, setMessage] = useState<string>(
    "Lorem ipsum dolor sit amet. Qui doloribus praesentium ex velit atque non unde facilis non asperiores dolor. Qui harum placeat et cumque quisquam quo perferendis soluta cum nihil suscipit.",
  );
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <SideBar
        name={name}
        setName={setName}
        avatar={avatar}
        setAvatar={setAvatar}
        message={message}
        setMessage={setMessage} note={note} setNote={setNote}      />
      <Testimonial name={name} avatar={avatar} message={message} note={note} />
    </main>
  );
}

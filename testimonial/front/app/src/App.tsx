import { SideBar } from "./components/Sidebar";
import { Testimonial } from "./components/Testimonial";

export default function App() {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <SideBar />
      <Testimonial />
    </main>
  );
}

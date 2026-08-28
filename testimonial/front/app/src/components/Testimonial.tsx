import { Star } from "lucide-react";

interface Entry {
  name: string;
  avatar: string;
  message: string;
  note: number;
}

export function Testimonial({ name, avatar, message, note }: Entry) {
  return (
    <div className="flex-1 bg-primary-400 h-full flex items-center justify-center p-8 overflow-auto">
      <div className="max-w-md w-full bg-linear-to-br from-purple-600 to-blue-500 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="p-6 sm:p-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              {[...Array(note).keys()].map((index) => (
                <Star
                  key={index}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
              {[...Array(5 - note).keys()].map((index) => (
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
      </div>
    </div>
  );
}

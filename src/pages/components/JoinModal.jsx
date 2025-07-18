// components/JoinModal.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function JoinModal({ role, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState('');
  const [agree, setAgree] = useState(false);

  const isSupporter = role === "supporter";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit:", { name, email, role, city });
    // TODO: send to backend or service
    onClose(); // close after submit
  };

    useEffect(() => {
  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  const originalOverflow = document.body.style.overflow;
  const originalPaddingRight = document.body.style.paddingRight;

  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollBarWidth}px`;

  return () => {
    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = originalPaddingRight;
  };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl">&times;</button>

        <h2 className={`text-xl font-bold mb-4 ${isSupporter ? "text-secondary" : "text-primary"}`}>
          {isSupporter ? "Join as a Supporter" : "Post your first task"}
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          We’ll notify you when Hora launches in your city.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        <input
            type="city"
            placeholder="City"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 px-4 py-2 rounded-lg text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex items-center mb-4">
                    <input 
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mr-2 accent-[var(--color-secondary)]"
                    />
                    <span className="text-primary/50 text-xs">
                    I have read and agree to the <Link to="/privacy" className="underline text-secondary)]">Privacy Policy</Link> and <Link to="/terms" className="underline text-[var(--color-secondary)]">Terms of Use</Link>.
                    </span>
                </div>
          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white transition ${
              isSupporter ? "bg-secondary hover:bg-[#91b76e]" : "bg-[#222831] hover:bg-[#333f48]"
            }`}
          >
            {isSupporter ? "Become a supporter" : "Get notified"}
          </button>
        </form>
      </div>
    </div>
  );
}

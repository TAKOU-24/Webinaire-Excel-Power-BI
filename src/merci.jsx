import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { CheckCircle2 } from "lucide-react";

const COLORS = {
  bg: "#0A0D16",
  surface: "#10141F",
  borderLight: "#2E3650",
  text: "#F1F3F9",
  muted: "#8B93AC",
  green: "#3DDC97",
};

const fontDisplay = { fontFamily: "'Sora', sans-serif" };
const fontBody = { fontFamily: "'Inter', sans-serif" };

function MerciPage() {
  const params = new URLSearchParams(window.location.search);
  const prenom = params.get("prenom");
  const email = params.get("email");

  useEffect(() => {
    // Meta Pixel — Lead event fired once, tied to the confirmation page view itself
    if (typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Webinaire Excel & Power BI - 29 juillet 2026",
      });
    }
  }, []);

  return (
    <div
      style={{ background: COLORS.bg, minHeight: "100vh", ...fontBody }}
      className="w-full flex items-center justify-center px-6"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>
      <div
        className="rounded-2xl p-10 text-center max-w-lg w-full"
        style={{ background: COLORS.surface, border: `1px solid ${COLORS.borderLight}` }}
      >
        <CheckCircle2 size={40} color={COLORS.green} className="mx-auto mb-4" />
        <h1 style={{ ...fontDisplay, color: COLORS.text }} className="text-xl font-semibold mb-2">
          Place réservée
        </h1>
        <p style={{ color: COLORS.muted }} className="text-sm leading-relaxed">
          {prenom ? `Merci ${prenom}` : "Merci"} — rendez-vous le 29 juillet à 20h. Le lien de connexion
          arrivera par e-mail{email ? ` à ${email}` : ""} avant le webinaire. Si vous ne pouvez pas être
          présent en direct, le replay vous sera envoyé automatiquement.
        </p>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MerciPage />
  </React.StrictMode>
);

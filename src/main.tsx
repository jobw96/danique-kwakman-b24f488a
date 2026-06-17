import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { reportWebVitals } from "./lib/reportWebVitals";

createRoot(document.getElementById("root")!).render(<App />);

// Stream LCP / INP / CLS / FCP / TTFB to console (dev) or dataLayer (prod).
reportWebVitals();

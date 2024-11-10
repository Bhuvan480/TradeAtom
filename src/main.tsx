import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider className="dark text-foreground bg-background">
      <App />
    </NextUIProvider>
  </React.StrictMode>
);

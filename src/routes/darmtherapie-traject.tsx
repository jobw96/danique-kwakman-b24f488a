import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Oude URL stond in de Google-index; 301 naar de huidige pagina.
const redirect = () =>
  new Response(null, {
    status: 301,
    headers: { Location: "https://daniquekwakman.nl/darmtraject" },
  });

export const Route = createFileRoute("/darmtherapie-traject")({
  server: { handlers: { GET: redirect, HEAD: redirect } },
});

import { listenAndServe } from "https://deno.land/std@0.111.0/http/server.ts";
import Index from './pages/index.tsx'
import * as React from "https://esm.sh/react@17.0.2";
import * as ReactDOMServer from "https://esm.sh/react-dom@17.0.2/server";

function handler() {
  const html = ReactDOMServer.renderToString(<Index />);
  return new Response(html, {
    headers: {
      "content-type": "text/html",
    },
  });
}

console.log("Listening on http://localhost:8080");
await listenAndServe(":8080", handler);

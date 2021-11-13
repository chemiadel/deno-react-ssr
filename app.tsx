import { listenAndServe } from "server";
import Index from './pages/index.tsx'
import * as React from "react";
import * as ReactDOMServer from "react-dom-server";

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

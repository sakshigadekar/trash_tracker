import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Auth0Provider
  domain="dev-pz4ta1n46wstr7vh.us.auth0.com"
  clientId="1956eNN9C7GCjkqkISgi8FY97ifXvBE2"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>
)

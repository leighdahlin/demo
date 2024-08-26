'use client';
import React from "react";

export default function Admin() {
  return (
    <html
      lang="en"
      dangerouslySetInnerHTML={{
        __html: `
        <!doctype html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link href="/admin/config.yml" type="text/yaml" rel="cms-config-url" />
          <title>Content Manager</title>
        </head>
        <body>
          <div id="cms-container">
            <!-- Dashboard script -->
            <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
            <!-- Message listener for receiving token from OAuth popup -->
            <script>
              (function() {
                window.addEventListener("message", function(event) {
                  const allowedOrigins = [
                    "https://demo-oauth-leighdahlin-3202bd87177b.herokuapp.com", // Replace with your actual Heroku app URL
                    "http://localhost:3000", // Local development origin
                  ];
                  
                  if (allowedOrigins.includes(event.origin)) {
                    console.log('Received token:', event.data.token);
                    const token = event.data.token;
                    if (token) {
                      // Store token in localStorage or sessionStorage
                      localStorage.setItem('githubAccessToken', token);
                    }
                  } else {
                    console.warn('Unexpected origin:', event.origin);
                  }
                });

                // Optionally, re-trigger CMS init if necessary
                document.addEventListener("DOMContentLoaded", function() {
                  const token = localStorage.getItem('githubAccessToken');
                  if (token) {
                    window.localStorage.setItem('netlify-cms-user', JSON.stringify({ token }));
                    location.reload();
                  }
                });
              })();
            </script>
          </div>
        </body>`,
      }}
    />
  );
}


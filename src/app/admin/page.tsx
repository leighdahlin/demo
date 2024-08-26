'use client';

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
          <!-- Dashboard script -->
          <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
          <!-- Message listener for receiving token from OAuth popup -->
          <script>
            window.addEventListener("message", function(event) {
              // Ensure the message is from the expected origin
              if (event.origin === "https://demo-oauth-leighdahlin-3202bd87177b.herokuapp.com") {
                console.log('Received token:', event.data.token);
                const token = event.data.token;
                if (token) {
                  // Store token in localStorage or sessionStorage
                  localStorage.setItem('githubAccessToken', token);

                  // Call Decap CMS login function or any other login flow
                  CMS.init({
                    config: {
                      backend: {
                        name: 'github',
                        repo: 'leighdahlin/demo',
                        branch: 'main',
                        auth_type: 'token',
                        token: token,
                      },
                    },
                  });
                }
              } else {
                console.warn('Unexpected origin:', event.origin);
              }
            });
          </script>
        </body>`,
      }}
    />
  );
}

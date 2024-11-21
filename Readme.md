# :magic_wand: Minify URL
*__Hey Folks, Welcome to Minify URL!__* <br>

## :scroll: Description
Minif URL mainly aims to generate a short url for any long url that is difficult to remember. This project offers free shorturl service to everyone over the internet.

## :gear: Installation and Configuration
> Requires [Node.js](https://nodejs.org/en/download/package-manager) to run the application.
1. Fork the repository.

2. Clone your repository.
    ```bash
    git clone https://github.com/<YOUR-USERNAME>/minify-url.git
    ```
3. Move to cloned folder.
    ```bash
    cd minify-url
    ```
4. Change directory to frontend, install `dependencies` and `devDependencies`.
    ```bash
    cd frontend
    npm install
    ```
5. Configure environment variables for frontend.
    ```bash
    VITE_BACKEND_URL=
    ```
6. Run frontend development server.
   ```bash
   npm run dev
   ```
7. Change directory to backend, install `dependencies` and `devDependencies`.
    ```bash
    cd backend
    npm install
    ```
8. Configure environment variables for backend.
    ```bash
    PORT=
    FRONTEND_URL=
    MONGODB_URL=
    DB_NAME=
    ```
9.  Run backend development server.
    ```bash
    npm start
    ```
## :file_folder: Folder Structure

    ├── backend
    │   ├── babel.config.cjs
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── src
    │   │   ├── app.js
    │   │   ├── controllers
    │   │   │   ├── contact.controller.js
    │   │   │   └── url.controller.js
    │   │   ├── index.js
    │   │   ├── middlewares
    │   │   ├── models
    │   │   │   ├── ContactMessage.model.js
    │   │   │   └── Url.model.js
    │   │   ├── routes
    │   │   │   ├── contact.route.js
    │   │   │   ├── index.route.js
    │   │   │   └── url.route.js
    │   │   └── utils
    │   │       ├── cleanedEnv.js
    │   │       ├── helpers.js
    │   │       └── zodSchemas.js
    │   └── tests
    │       └── index.test.js
    ├── frontend
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   └── favicon.ico
    │   ├── README.md
    │   ├── src
    │   │   ├── api
    │   │   │   └── index.js
    │   │   ├── App.jsx
    │   │   ├── components
    │   │   │   ├── Feedback.jsx
    │   │   │   ├── Footer.jsx
    │   │   │   ├── Navbar.jsx
    │   │   │   └── TypingAnimation.jsx
    │   │   ├── index.css
    │   │   ├── main.jsx
    │   │   ├── pages
    │   │   │   ├── About.jsx
    │   │   │   ├── Contact.jsx
    │   │   │   ├── Home.jsx
    │   │   │   ├── index.js
    │   │   │   ├── MinifyUrl.jsx
    │   │   │   └── RedirectToLongURL.jsx
    │   │   └── utils
    │   │       ├── asyncHandler.js
    │   │       ├── cleanedEnv.js
    │   │       └── zodSchemas.js
    │   ├── tailwind.config.js
    │   └── vite.config.js
    └── Readme.md

## :handshake: Contribution Guide
- Check for the [future works](#future-works) in the below section.
- Setup the project locally from [installation guide](#installation-and-configuration).
- Play with it and run tests.
- Create a issue and attach a pull request.
- We will verify and merge your pull request.

## :test_tube: Run tests
- Tests are written for the backend using `jest`. 
- If any changes made to the backend, run tests before attaching a pull request.
    ```bash
    npm test
    ```

## :rocket: Future Works
- [ ] Create custom slugs for short urls.
- [ ] Implement register and login mechanism.
- [ ] Create dashboard for click tracking and  managing all your short urls.

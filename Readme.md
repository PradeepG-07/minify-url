# :magic_wand: Minify URL
*__Hey Folks, Welcome to Minify URL!__* <br>

## :scroll: Description
Minif URL mainly aims to generate a short url for any long url that is difficult to remember. This project offers free shorturl service to everyone over the internet.

## :gear: Installation and Configuration
### **Approach - 1**
> Requires [Node.js](https://nodejs.org/en/download/package-manager) and [MongoDB](https://www.mongodb.com/try/download/community) to run the application.
1. Clone the repository.
    ```bash
    git clone https://github.com/PradeepG-07/minify-url.git
    ```
2. Navigate to the project folder.
    ```bash
    cd minify-url
    ```
3. Navigate to frontend directory, install `dependencies` and `devDependencies`.
    ```bash
    cd frontend
    npm install
    ```
4. Configure environment variables for frontend.
    ```bash
    VITE_BACKEND_URL=
    ```
5. Run frontend development server.
   ```bash
   npm run dev
   ```
6. Navigate to backend directory, install `dependencies` and `devDependencies`.
    ```bash
    cd backend
    npm install
    ```
7. Configure environment variables for backend.
    ```bash
    PORT=
    FRONTEND_URL=
    MONGODB_URL=
    DB_NAME=
    ```
8.  Run backend development server.
    ```bash
    npm start
    ```
### **Approach-2**
> Requires [Docker](https://docs.docker.com/desktop/setup/install/windows-install/) and [docker-compose](https://docs.docker.com/compose/install/) to run the application.
1. Follow step-1 and step-2 in approach-1.
2. Run the below command to start backend and frontend:
   ```bash
   docker compose up
   ```

## :file_folder: Folder Structure

    ├── backend
    │   ├── babel.config.cjs
    │   ├── Dockerfile
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
    │   ├── tests
    │   │   └── index.test.js
    │   └── vercel.json
    ├── docker-compose.yml
    ├── frontend
    │   ├── Dockerfile
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package.json
    │   ├── package-lock.json
    │   ├── postcss.config.js
    │   ├── public
    │   │   └── favicon.ico
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
    │   ├── vercel.json
    │   └── vite.config.js
    └── Readme.md

## :handshake: Contribution Guide
Contributions are welcome! Please follow these steps to contribute:
1. Check for the [future works](#future-works) in the below section.
2. Setup the project locally.
3. Fork the repository.
4. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
5. Make your changes and commit them:
    ```bash
    git commit -m "Add new feature"
    ```
6. Push to the branch:
    ```bash
    git push origin feature-branch
    ```
7. Create a pull request.

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

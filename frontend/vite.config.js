import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	//In a Vite project, the vite.config.js file is used to configure various aspects of the Vite development server. One important configuration is the server.host option, which determines the network address the server binds to.
	// By default, Vite binds to localhost, which means the server is only accessible from within the container. To make the server accessible from outside the container (e.g., from your host machine), you need to bind it to 0.0.0.0.
	server: {
		host: "0.0.0.0",
	},
});


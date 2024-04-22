import axios from "axios";

const backendServer = import.meta.env.VITE_AUTOFIX_BACKEND_SERVER;
const backendPort = import.meta.env.VITE_AUTOFIX_BACKEND_PORT;

export default axios.create({
  baseURL: `http://${backendServer}:${backendPort}`,
  headers: {
    "Content-Type": "application/json",
  },
});

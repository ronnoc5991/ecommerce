import api from "shared";

const apiClient = api.createClient({
  // TODO: replace hardcoded host with env variable
  host: "http://server:3000",
});

export default apiClient;

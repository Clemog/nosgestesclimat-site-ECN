import http from "../http-common";

class EcolabDataService {
  getAll() {
    return http.get("/test_donnees");
  }

  create(data) {
    return http.post("/test_donnees", data);
  }

}

export default new EcolabDataService();
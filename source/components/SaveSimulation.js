/*import React, { Component } from "react";
import EcolabDataService from "../services/database.service";

export default saveTutorial {

  saveTutorial() {
    var data = {
      valeur: 1234,
    };

    EcolabDataDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
}*/
import Controller from "./mvc/Controller";
import Model from "./mvc/Model";
import View from "./mvc/View";

import "./styles.css";

const initialize = () => {
  const controller = new Controller(new Model(), new View());
  controller.init();
};

window.addEventListener("DOMContentLoaded", initialize);

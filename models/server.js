const express = require("express");
const apiRoutes = require('../routers/app.router');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      productos : '/api',
    }
    // Middlewares
    this.middlewares();
    // Routes
    this.routes();
  }
  middlewares() {
    // Reading & Parse of body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    // Public Folder
    this.app.use(express.static(__dirname + '../../public'));
  }
  routes() {
     this.app.use(this.paths.productos, apiRoutes); 
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`listen at the port ${this.port}`);
    });
  }
  error(){
    this.app.on('error', (error)=> {
      console.error('ERROR', error);
  });
  }
}
module.exports = Server;


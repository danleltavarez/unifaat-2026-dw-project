import fs from 'node:fs/promises';
import path from 'node:path';
import CONSTANTS from '../../bootstrap/config.js';

export default async function EnvironmentController(request, response) {


  class EnvironmentController {

  async index(req, res) {

    const isDocker = process.env.IS_DOCKER === "true";

    return res.json({

      environment: isDocker ? "docker" : "local",

      database: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT)
      },

      web: {
        host: isDocker
          ? process.env.WEB_HOST || "nodeweb_host"
          : "localhost",

        port: isDocker
          ? Number(process.env.NGINX_PORT || 8080)
          : Number(process.env.PORT || 3000)
      }

    });

  }

}

module.exports = new EnvironmentController();

}
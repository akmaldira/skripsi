require("dotenv").config();
/**
 * @description pm2 configuration file.
 * @example
 *  production mode :: pm2 start ecosystem.config.js --only arcadia:prod
 *  development mode :: pm2 start ecosystem.config.js --only dev
 */
module.exports = {
  apps: [
    {
      name: "express:prod", // pm2 start App name
      script: "dist/server.js",
      exec_mode: "cluster", // 'cluster' or 'fork'
      instance_var: "INSTANCE_ID", // instance variable
      instances: 2, // pm2 instance count
      watch: false, // files change automatic restart
      ignore_watch: ["node_modules", "logs"], // ignore files change
      merge_logs: false, // if true, stdout and stderr will be merged and sent to pm2 log
      output: "./logs/access.log", // pm2 log file
      error: "./logs/error.log", // pm2 error log file
      env: {
        // environment variable
        PORT: 5000,
        NODE_ENV: "production",
        DB_HOST: process.env.DB_HOST,
        DB_PORT: process.env.DB_PORT,
        DB_NAME: process.env.DB_NAME,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
      },
    },
  ],
};

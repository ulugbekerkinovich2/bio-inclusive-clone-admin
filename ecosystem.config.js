module.exports = {
  apps: [
    {
      name: "bio-inclusive-admin",
      script: "server.js",
      cwd: "./",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "200M",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
        HOST: "0.0.0.0"
      }
    }
  ]
};

module.exports = {
  apps: [
    {
      name: 'monelec-webapp',
      script: 'server.js',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
      cwd: '/home/user/webapp'
    }
  ]
}
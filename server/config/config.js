module.exports = {
    "development":{
        "database": process.env.DB_NAME,
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "host": "localhost",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
      "production": {
          "use_env_variable": "JAWSDB_URL",
          "dialect": "mysql"
      }
}
// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/gstudy',
  },

  production: {
     client: 'postgresql',
     connection: {
       host: process.env.RDS_DBHOST,
       database: process.env.RDS_DBNAME,
       user:     process.env.RDS_USERNAME,
       password: process.env.RDS_PASSWORD
     },
    }

};

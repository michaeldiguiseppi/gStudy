// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/gstudy',
  },

  production: {
     client: 'postgresql',
     connection: {
       host: 'gstudy-app.cir6g5gfr1fr.us-west-2.rds.amazonaws.com:5432',
       database: process.env.RDS_DBNAME,
       user:     process.env.RDS_USERNAME,
       password: process.env.RDS_PASSWORD
     },
     pool: {
       min: 2,
       max: 10,
     }
    }

};

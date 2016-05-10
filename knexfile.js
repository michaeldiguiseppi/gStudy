// Update with your config settings.


module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost:5432/gstudy',
  },

  production: {
     client: 'postgresql',
     connection: {
       host: 'gstudy-app.cir6g5gfr1fr.us-west-2.rds.amazonaws.com',
       port: 5432,
       database: 'gstudy',
       user:     'MikeDee242',
       password: 'TestPW123'
     },
     pool: {
       min: 0,
       max: 7,
     }
    }

};


// psql \
//    --host=gstudy-app.cir6g5gfr1fr.us-west-2.rds.amazonaws.com \
//    --port=5432 \
//    --username MikeDee242 \
//    --dbname=gstudy

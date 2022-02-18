const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
 
const { Pool } = require('pg');
var pool;
pool = new Pool({
  connectionString:  process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
})

var app = express()

  app.use(express.json());
  app.use(express.urlencoded({extended:false}));
  app.use(express.static(path.join(__dirname, 'public')))
  const bodyParser = require("body-parser");
  app.use(bodyParser.json());

  
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  
  app.get('/', (req, res) => res.render('pages/index'))

  app.get('/rectangles', (req, res) => {
    var getUsersQuery = `SELECT * FROM rect `;
    pool.query(getUsersQuery, (error,result) => { 
      if(error)
        res.end(error);
        var results = {'rows':result.rows};
        res.render('pages/db',results);
    })
});

app.delete('/rectangles/:id', async (req, res) => {
  var getUsersQuery = `DELETE FROM rect where uid=${req.body.id}`;
  pool.query(getUsersQuery, (error,result) => { 
    if(error)
      res.end(error);
      res.send("deleted 1 row" );
  })
});

app.post('/addrect', async (req, res) => {

    var uid = req.body.uid;
    var name = req.body.name;
    var width = req.body.width;
    var height = req.body.height;
    var color = req.body.color;
  
    try {
      await pool.query(`INSERT INTO rect (uid, name, width, height, color) VALUES ('${uid}','${name}','${width}', '${height}', '${color}')`)
      res.redirect('/rectangles')
  
    }catch(err) {
    }
  
});

app.post('/updaterect', async (req, res) => {

  var uid = req.body.uid;
  var name = req.body.name;
  var width = req.body.width;
  var height = req.body.height;
  var color = req.body.color;

  console.log(uid, name, width, height, color);

  try{
    await pool.query(`UPDATE rect SET name='${name}', width='${width}', height='${height}', color='${color}' WHERE uid='${uid}'`)
    res.redirect('/rectangles')
  }catch(err) {
  }
});


app.post('/deleterect', async (req, res) => {

  var uid = req.body.uid;

  console.log(uid);

  try{

    await pool.query(`Delete from rect WHERE uid='${uid}'`)
  
    res.redirect('/rectangles')


  }catch(err) {
  }


});
 
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

const db = require('../configs/db')
const models = {}

models.all = () => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM tbl_posts`)
    .then((res)=>{
      resolve(res.rows)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
models.detail = ({id}) => {
  return new Promise((resolve, reject) => {
    db.query(`SELECT * FROM tbl_posts WHERE id=$1`, [id])
    .then((res)=>{
      resolve(res.rows)
    })
    .catch((err)=>{
      reject(err)
    })
  })
}
models.store = ({title, description}) => {
  return new Promise ((resolve, reject) => {
    db.query(`INSERT INTO tbl_posts (title, description) VALUES ($1, $2) RETURNING *`, [title, description])
    .then((res) => {
      resolve(res.rows)
    }) 
    .catch((err) => {
      reject(err)
    })
  })
}

models.update = ({id,title, description}) => {
  return new Promise ((resolve, reject) => {
    db.query(`UPDATE tbl_posts SET title= $2, description= $3 WHERE id= $1 RETURNING *`
    ,
    [id, title, description])
    .then((res) => {
      resolve(res.rows)
    }) .catch((err) => {
      reject(err)
    })
  })
}

models.destroy = function (id) {
  return new Promise ((resolve, reject) => {
    db.query('DELETE FROM tbl_posts WHERE id = $1', [id])
    .then((res) => {
      resolve(res.rows)
    }) .catch((err) => {
      reject(err)
    })
  })
}

module.exports = models
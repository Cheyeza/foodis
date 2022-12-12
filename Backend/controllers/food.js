const pool = require("../connection");

const handleErr = (err, req, res, next) => {
  res.status(400).send({ error: err.message })
}

const getItems = (request, response) => {
    pool.query('SELECT * FROM public.food ORDER BY id ASC ', (error, results) => {
     
      response.status(200).json(results.rows)
    }),handleErr
  }

  const getItemByName = (request, res) => {
    const {category} = request.body
  
    pool.query('SELECT * FROM public.food WHERE category = $1', [category], (error, results) => {
    
      res.status(200).json(results.rows)
    }),handleErr
  }
  
  const postItem = (req, res) => {

    const { name,price,picture,category,status } = req.body

    pool.query('INSERT INTO public.food(name,price,picture,category,status) VALUES ($1, $2,$3,$4,$5)', [name,price,picture,category,status ], (error, results) => {
      if (error) {
        throw error
      }
      res.status(201).send()
    })
    
}
  
  const updateItem = (request, response) => {
    const id = parseInt(request.params.id);
    const { name,price,picture,category,status } = request.body
  
    pool.query('UPDATE public.food SET name=$1, price=$2, picture=$3, category=$4, status=$5  WHERE id=$6',[name,price,picture,category,status, id], (error, results) => {
        if (error) {
          throw error
        }
        //response.send(JSON.stringify(results));
        response.status(200).send()
      }
    )
  }

  const deleteItem = (request, response) => {
    const id = parseInt(request.params.id)
    console.log(id);
  
    pool.query('DELETE FROM public.food WHERE id = $1', [id], (error, results) => {
     
      response.status(200).send()
    }),handleErr
  }
  
  module.exports = {
    getItems,
    getItemByName,
    postItem,
    updateItem,
    deleteItem
  }

  

const pool = require("../connection");

const addBooking = (req,res)=>{
    const {option,booking_status,user_id, food_id} = req.body;
     pool.query('INSERT INTO public.booking(option,booking_status,user_id, food_id) VALUES ($1, $2, $3, $4) RETURNING *', [option,booking_status,user_id, food_id], (error, results) =>{
  
      if(error){
        throw error
      }
      res.status(201).send(`Booking added`)
     })
  }
  
  //GET ALL BOOKINGS
  const getAllBookings = (req,res)=>{
  
    pool.query('SELECT b.id,b.option,b.booking_status,b.user_id,b.food_id,u.firstname,u.lastname,u.email,f.name,f.price,f.category,f.description,f.image FROM booking b, users u, food f WHERE b.user_id = u.id AND b.food_id = f.id ORDER BY b.id ASC;',(error ,results)=>{
    if(error){
        throw error
    }
    res.status(200).json(results.rows)
    })
  }
  
  //GET BOOKINGS BY ID
  const getBookingById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM booking,users where users.id = booking.id and users.id = $1',[id], (error,results)=>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
  }

  //GET user booking details
  const getUserBooking = (req,res)=>{
  
    pool.query('SELECT b.option,b.booking_status,u.firstname,u.lastname,u.email,f.name,f.price,f.category,f.description,f.image FROM booking b, users u, food f WHERE b.user_id = u.id AND b.food_id = f.id ORDER BY b.id ASC;',(error ,results)=>{
    if(error){
        throw error
    }
    res.status(200).json(results.rows)
    })
  }
  
  
  
  //PUT__UPDATE BOOKING BY ID
  
  const updateBooking = (req,res)=>{
    const {option,booking_status,user_id, food_id} = req.body;
    const id = parseInt(req.params.id)
  
    try{
      pool.query('UPDATE public.booking SET option=$1, booking_status=$2, user_id=$3, food_id=$4 WHERE id=$5;',
      [option,booking_status,user_id, food_id, id],
        (error, results) => {
          if (error) {
            throw error
          }
        res.status(200).send(results)
        }
      )
    }
    catch(error)
  
    {
      console.log('didnt update')
    }
  
    
  }
  
  
  
  //DELETE BOOKING BY ID
//   const deleteBooking = (request, response)=>{
//     const id = parseInt(request.params.id)
  
//     pool.query('DELETE FROM public.booking WHERE id = $1', [id], (error,results)=>{
//         if(error){
//             throw error
//         }
//         response.status(200).send(`Booking deleted with ID: ${id}`)
//     })
//   }
  
  
  
  module.exports = {
    addBooking,
    getAllBookings,
    getBookingById,
    updateBooking,
    getUserBooking
    // deleteBooking
  }
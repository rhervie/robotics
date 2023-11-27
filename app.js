const express = require('express');
const mongoose = require('mongoose');
const User = require('./Models/user')
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.get('/', (req,res)=>{
  res.sendFile('./public/index.html')
})
app.post('/submit', async (req, res) => {
  const { username, email, password, password2 } = req.body;
  if (username==='' ){
   console.log('Please Enter User Name');
  } 
  const newUser = new User({
    username,
    email,
    password
  });
  // Save the user to the database
  try {
    const savedUser = await newUser.save();
    res.send('User registered successfully!');
  } catch (error) {
    res.status(400).send('Error registering user');
  }
});
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Assuming your HTML, CSS, and JS files are in the 'public' directory
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/robotics', 
 );
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Local DB Connected');
});


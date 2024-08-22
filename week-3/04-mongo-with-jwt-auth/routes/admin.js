const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")

// Admin Routes
router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })
     res.json({
        message: 'Admin created successfully'
    })
});

router.post('/signin', async(req, res) => {
     const username = req.body.username;
     const password = req.body.password;

     const user = await Admin.find({
        username,
        password
     })
     if(user){
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({
            token
        })
     }else{
        res.status(411).json({
            msg : "User and Password are incorrect"
        })
     }

});

router.post('/courses', adminMiddleware, async(req, res) => {
   const  title = req.body.title;
   const description = req.body.description;
   const price = req.body.price; 
   const imageLink= req.body.imageLink;

  const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
   const response = await Course.find({}
   )
   res.json({
    courses : response
   })
});

module.exports = router;
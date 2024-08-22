const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Admin,User, Course} = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    await User.create({
        username,
        password
    })
    res.json({
        msg : "user created sucessfully"
    })


});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
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

router.get('/courses', async(req, res) => {
    const courses = await Course.find({

    })
    res.json({
        courses : courses
    })
    
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourse: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
     const user = await User.findOne({
        username: req.username
    });

    console.log(user.purchasedCourse)
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourse
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router
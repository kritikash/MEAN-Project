const Student = require('../../model/Student')

//show list of students from database
const index = (req,res,next) => {
    Student.find()
    .then(response =>{
        res.status(200).json({
            response
        })
    })
    .catch(error =>{
        res.status(500).json({
            message: error
        })
    })
}
//return single student acc to student id #search:

const show = (req,res) =>{
    Student.find( {rollNumber: {$in: req.body.rollNumber } }).exec()
    .then(response =>{
        res.status(200).json({
            response
        })
    })
    .catch(error =>{
        res.status(500).json({
            message: error
        })
    })
}



//Add student to database
const store = (req, res) => {
    console.log(req.body)
     let student = new Student(req.body)
     student.save()
     .then(response =>{
         res.status(200).json({
             message: 'Student added succesfully'
         })
     })
     .catch(error =>{
         res.status(500).json({
             message: error
         })
     })
}

//update 
const update = (req,res)=>{

    let studentID = req.body.studentID

    let updatedData = {
        rollNumber: req.body.rollNumber,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email
    }

    Student.findByIdAndUpdate(studentID, {$set: updatedData})
    .then(() =>{
        res.status(200).json({
            message: 'updated succesfull'
        })
    })
    .catch(error =>{
        res.status(500).json({
            message: error
        })
    })
}

//delete
const destroy = (req,res) =>{
    let studentID = req.body.studentID
    Student.findOneAndRemove(studentID)
    .then(() =>{
        req.status(200).json({
            message:'deleted succesfully'
        })
    })
    .catch(error =>{
        req.status(500).json({
            message: error
        })
    })

}

module.exports = {
    index, show, store, update, destroy
}


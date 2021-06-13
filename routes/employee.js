const router = require('express').Router()
const Employee = require('../models/employee.js')

// add employee /employee/create
router.post('/create', async (req, res) => {
    const name = req.body.name[0]
    const age= req.body.age
    const cnic = req.body.cnic
    const email= req.body.email[0]
    const salary = req.body.salary
    const designation= req.body.designation[0]
    const token = req.body.token
    try {
        let employee = await Employee.findOne({ cnic: cnic })
        let employee1 = await Employee.findOne({ email: email })
        if (employee || employee1) {
            return res.status(400).json({ error: "This employee is already registered." })
        }
        employee = new Employee({
            name, age, cnic, email, salary, designation,token
            
        })

        await employee.save()
        res.status(201).json({ message: "user created successfully" })
    } catch (err) {
        console.log({ err })
    }
})



// get all employees /employee/all
router.get('/all/:token', async (req, res) => {
    try {
        
        const employee = await Employee.find({token: req.params.token})
        res.json(employee)
    } catch (err) {
        console.log(err)
    }
})

// SEARCH EMPLOYEE WITH NAME //employee/search

router.get('/search/:name/:token', async(req,res)=>{
    try {
        console.log(req.params.name,req.params.token)
        const searchEmp = await Employee.find({name: req.params.name,token: req.params.token})
        res.json(searchEmp);
    } catch (err) {
        console.log(err)
    }
})

// edit employee /employee/edit
router.put('/edit/:id', async (req, res) => {
    
    const name = req.body.name
    const age= req.body.age
    const cnic = req.body.cnic
    const email= req.body.email
    const salary = req.body.salary
    const designation= req.body.designation
    console.log( { name: name, age: age,cnic: cnic, email: email,salary: salary, designation: designation  })
    try {
        let employee = await Employee.findOneAndUpdate({ _id: req.params.id }, {
            name: name,
            age: age,
            cnic: cnic,
            email: email,
            salary: salary,
            designation: designation,

        }, {
            runValidators: true 
          })
        await employee.save()
        res.status(200).json({ message: "employee updated successfully" })
    } catch (err) {
        console.log(err)
    }
})

// employee deletion /emplpoyee/delete
router.delete('/delete/:id', (req,res)=>{
    try {
        Employee.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.json({message: "employee deleted successfully"})
        })
    } catch (err) {
        
    }
})

module.exports = router;
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT ||5000;

//Middleware
app.use(express.static('public'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '/public/index.html');
})

app.post('/',(req,res)=>{
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth :{
            user :'stanslousmusekiwa@gmail.com',
            pass:'brre befm itwj humz'



        }
    })
    const mailOptions={
        from: req.body.email,
        to:'stanslousmusekiwa@gmail.com',
        subject:`Message from ${req.body.email}`,
        text:`Your have a new applicant :  ${req.body.firstname} \n  Phone Number : ${req.body.phone}. \n email : ${req.body.email} 
       \n Grade: ${req.body.grade} 
       \n Learning Type: ${req.body.learningtype}
       \n Scheduled date: ${req.body.date}
       `,
       


    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            req.send('error');
            document.getElementsByClassName("chairman").innerHTML ="ERROR!"
        }
        else{
            console.log('Email sent: ' + info.response);
            res.send('success');
            
        }
    })


})



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
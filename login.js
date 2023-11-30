const express =  require('express');

function checkEmail(req,res,next){
    const UserEmail =  req.body.email;
    const UserPAssword = req.body.password;
    
    if(UserEmail === 'test@gmail.com' && UserPAssword === '123456'){
        sendEmail(UserEmail);
        next();
    } else{
        res.status(401).send('unauthorised emailand password');
    }
};

module.exports = checkEmail;
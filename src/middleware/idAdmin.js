function isAdmin(req,res,next) {
    if(!req.session.user || req.session.user.rol==2){
        res.redirect('/usuario/login')
    }
    next()
}

module.exports=isAdmin
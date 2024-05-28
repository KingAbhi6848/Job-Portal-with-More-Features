export const auth = (req,res,next)=>{
 
    if(req.session.isUser || req.session.isRecuriter){
        next();
    }
    else{
        res.render('loginrequired');
        // res.redirect('back');
    }


}
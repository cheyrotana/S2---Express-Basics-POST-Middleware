const TOKEN = 'banana';

export default function authenticator(req,res,next){
    const token = req.query.token;

    if(!token || token !== TOKEN) {
        return res.status(401).json(
            {
                error: "Unauthorized! invalid token."
            }
        );
    }
    next();
}
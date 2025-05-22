export default function logger(req,res,next){
    const method = req.method;
    const path  = req.path;
    const query = req.query; 
    const timeStamp = new Date().toISOString;
    
    console.log(`[${timeStamp}] ${method} ${path} Query:`, query);
    next();
}
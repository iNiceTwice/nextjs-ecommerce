import { serialize } from "cookie"


const handler = (req,res) => {
   
    switch (req.method) {
        case "GET":
            console.log("GET")
            res.setHeader("Set-Cookie",
                serialize("token", null,{
                    maxAge:0,
                    path:"/"
                }))
            console.log(req.cookies)    
            res.end()
            break;
    
        default:
            break;
    }

}

export default handler
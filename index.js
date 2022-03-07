const express=require("express")

const app=express()

app.use(logger) // MiddleWare for all function


app.get("/books",(req,res)=>{
    return res.send({ route: "/books"})
})

app.get("/libraries", checkPermission ,(req,res)=>{  // /  only libraries invoke checkPermission
    return res.send( { route: "/libraries", permission: true})  
})

app.get("/authors",checkPermission,(req,res)=>{  // /  only authors invoke checkPermission
    return res.send({ route: "/authors", permission: true})
})

function logger(req,res,next){
    console.log("Before Module+Route Handler")
    next()
    console.log("After Module+Route Handler")
}

function checkPermission(req,res,next){ // Second middle ware only for aurthor and libraries
    
    if(req.path==="/libraries"){
        // req.role="libraries"
        console.log(" For only libraries")
    }else if(req.path==="/authors"){
        // req.role="lauthors"
        console.log("For only aurthor")
    }else{
        req.role="Route is not found"
    }
    next()
    
}

app.listen(5000,()=>{
    console.log("Listing port 5000")
})
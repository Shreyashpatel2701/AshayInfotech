const express = require("express");
const app = express();

const PORT = 5000;

app.get('/',(req, res)=>{
 res.send("hello!!")
})

app.use(express.static('public'));

app.listen(PORT, ()=>{
    
    console.log('server running at 5000')

})
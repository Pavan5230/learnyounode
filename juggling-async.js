var http = require("http");
var bl = require("bl")
var count =0;
const results=[];

function printResults(){
    for(let i =0;i<3;i++){
        console.log(results[i])
    }
}

function httpGetIndex(index){
    http.get(process.argv[index+2],function(res){
        res.pipe(bl(function(err,data){
            if(err){
                console.log(err);
            
            }
            results[index]=data.toString();
            count++;
            if(count===3){
                printResults();
            }
        }))
    })
        
}

for(let i=0;i<3;i++){
    httpGetIndex(i);
}
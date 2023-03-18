
let equaal=document.getElementById("equal")
let textView=document.querySelector(".textview")
function insert(num){
    textView.value  +=num
}
function clean(){
    textView.value= ""

}
function back(){
    textView.value= textView.value.slice(0,-1)
}
function equal(){
    try{
        
        textView.value= eval(textView.value)
    }
    catch(err){
        textView.value= "Error"
    }
}
equaal.onblur = function(){
    textView.value= ""
}
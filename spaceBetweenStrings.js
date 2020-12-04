const stringSpacing = function(str){
    this.name=str;
}
const p1= new stringSpacing("Kalai",2000)
document.write(p1)

stringSpacing.prototype.spacing = function(){
    console.log(this.name.split("").join(" "));
}
p1.spacing();







 
 
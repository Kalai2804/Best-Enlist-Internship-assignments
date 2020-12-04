const findingSpecific = function( ){

    this.arr1=[{
        name:"Kalai",
         age:20
       },{
           name:"ram",
           age:23
    }]
 }
 const p1 = new findingSpecific()
 console.log(p1)


 findingSpecific.prototype.findobject=function(){
     
  let [n1,n2] =this.arr1
  console.log(n1.name,n2.name)

 

    

      
 
    
 }
 
 

 

 
 
 p1.befindobject()
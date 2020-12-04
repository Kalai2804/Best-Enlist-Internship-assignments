const addObject = function(){
    this. arr=[{
        name:"John",
        age:20
    },{
        name:"ram",
        age:24
    }]

}
 const person = new addObject()

  console.log(person)
  

  addObject.prototype.AddObject= function(){
      const arr= this.arr.map(function(a){
          a.country="india";
          return e
      })
      console.log(arr      ) 

  }
person.beAddObject()


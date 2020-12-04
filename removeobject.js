const removeObject = function(){
    this.arr=[{
        name:"kalai",
        age:20,
        country:"india"
    },{
        name:"john",
        age:24,
        country:"india"
    }]
}

const person = new removeObject()
console.log(person)

removeObject.prototype.remove = function(){
    return this.arr.filter(function(a){
        delete a.country;
        console.log(a)
    })

}



person.remove()
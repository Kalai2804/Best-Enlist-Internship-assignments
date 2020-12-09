const GetDate= function(){

 }
 const person = new GetDate()
 document.write(person)
 GetDate.prototype.findDate= function(){
    var  getDates = function(startDate, endDate) {
        var dates = [],
            currentDate = startDate,
            addDays = function(days) {
              var date = new Date(this.valueOf());
              date.setDate(date.getDate() + days);
              return date;
            };
        while (currentDate <= endDate) {
          dates.push(currentDate);
          currentDate = addDays.call(currentDate, 1);
        }
        return dates;
      };
      
   
      var dates = getDates(new Date(2020,11,2), new Date(2020,11,4));                                                                                                           
      dates.forEach(function(date) {
        document.write(date)
      });
 }
 person.findDate()
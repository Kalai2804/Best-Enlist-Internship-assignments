thisDay = new Date();

christmas = new Date("December 25, 2020");

msPerDay = 24 * 60 * 60 * 1000 ;

timeLeft = (christmas.getTime() - thisDay.getTime());

calculateDays = timeLeft / msPerDay;

daysLeft = Math.floor(calculateDays);

document.write("There are only " +  daysLeft + " days " );



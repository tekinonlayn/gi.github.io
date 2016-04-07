var quotes = [[]];

quotes[0] = ["ak akçe kara gün", "ali"];
quotes[1] = ["sakla samanı", "veli"];
quotes[2] = ["bilgisayar", "cem"];
quotes[3] = ["mühendisi", "can"];

var rand = Math.floor(Math.random()* 10 * quotes.length) % quotes.length;

document.getElementById("pid").innerHTML = quotes[rand][0] + "<p><b>"+ "- " + quotes[rand][1]+"</b></p>";

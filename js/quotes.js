var quotes = [[]];

quotes[0] = ["Hoşgeldiniz! Kendinize güvenin! Akranlarınızın, çağınızın, Ezelî ve Ebedî Gerçek’ten payınıza düşenin hakkını verin. Dil, din, ırk, cinsiyet ayrımının tuzağına düşmeden, zamanınızın en yetkin bilginleriyle, sanatçı ve filozoflarıyla dostluk kurun. Mahrem düşüncelerinizi aşkın zekalarla paylaşın.", "Uygur Diskuru"];
quotes[1] = ["sakla samanı", "veli"];
quotes[2] = ["bilgisayar", "cem"];
quotes[3] = ["mühendisi", "can"];

var rand = Math.floor(Math.random()* 10 * quotes.length) % quotes.length;

document.getElementById("pid").innerHTML = quotes[rand][0] + "<p><b>"+ "- " + quotes[rand][1]+"</b></p>";

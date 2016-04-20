var quotes = [[]];

quotes[0] = ["A mathematical formula should never be \"owned\" by anybody! Mathematics belong to God.", "Donald Knuth"];
quotes[1] = ["If we knew what it was we were doing, it would not be called research, wouldt it?", "Albert Einstein"];
quotes[2] = ["If 10 years from now, when you are doing something quick and dirty, you suddenly visualize that I am " +
"looking over your shoulders and say to yourself: 'Dijkstra would not have liked this', well that would be enough " +
"immortality for me.", "Edsger Dijkstra"];
quotes[3] = ["No legacy is so rich as honesty.", "William Shakespeare"];
quotes[4] = ["In the brain, you have connections between the neurons called synapses, and they can change. All your " +
"knowledge is stored in those synapses. You have about 1,000-trillion synapses - 10 to the 15, it's a very big number.", "Geoffrey Hinton"];
quotes[5] = ["No one knows what the right algorithm is, but it gives us hope that if we can discover some crude " +
"approximation of whatever this algorithm is and implement it on a computer, that can help us make a lot of progress.", "Andrew Ng"];
quotes[6] = ["More data beats clever algorithms, but better data beats more data.", "Peter Norvig"];
quotes[7] = ["You don't understand anything until you learn it more than one way.", "Marvin Minsky"];
quotes[8] = ["Science is a differential equation. Religion is a boundary condition.", "Alan Turing"];
quotes[9] = ["UNIX is basically a simple operating system, but you have to be a genius to understand the simplicity.", "Dennis Ritchie"];

var rand = Math.floor(Math.random()* 10 * quotes.length) % quotes.length;

document.getElementById("pid").innerHTML = quotes[rand][0] + "<p><b>"+ "- " + quotes[rand][1]+"</b></p>";

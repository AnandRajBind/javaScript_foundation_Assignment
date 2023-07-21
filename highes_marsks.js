
// Highest Marks
var marks=[90,89,85,68,98];
var highestMarkes=marks[0];

for(i=1; i<marks.length; i++){

highestMarkes = marks[i] > highestMarkes ? marks[i] : highestMarkes;

}
console.log("The higest markes scored by student: " +  highestMarkes);


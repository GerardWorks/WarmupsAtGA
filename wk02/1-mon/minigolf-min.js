var scores=[{name:"Bob",card:[3,2,6,11,9,2,6,9,10]},{name:"Jimbo",card:[5,12,9,22,13,7,16,10,11]},{name:"Fish",card:[2,2,4,5,4,3,6,4,1]}],totalScores=function(o){for(var r=[],a=0,e=0,c=o.length,n=0;n<c;n++){for(var l=0;l<o[n].card.length;l++)e+=o[n].card[l];r[n]=e,console.log(o[n].name+" score for the club is "+r[n])}};totalScores(scores);var scoreCompare=function(o){for(var r=[3,4,5,5,3,3,4,3,5],a=r.length,e=o,c=0;c<e.length;c++)for(var n=0;n<a;n++){var l=r[n]-e[c].card[n];l<r[n]?console.log("below par"):console.log("above par")}};
console.log("this is working");var grannyQuestion=function(r){var n;return"BYE"==r?n="What's that honey, I didn't hear you..":r==r.toLowerCase()?n="SPEAK UP SONNY JIM":r==r.toUpperCase()&&(randomYear=Math.round(20*Math.random()+1930),n="NO, NOT SINCE "+randomYear),n},randomizer=function(r,n){return Math.floor(Math.random()*(n-r)+0)},grandpaQuestion=function(r){for(var n=[],o=["A","E","I","O","U"],a=["a","e","i","o","u"],e=o[randomizer],t=a[randomizer],i=grannyQuestion(r).split(""),d=0;d<i.length;d++)a.includes(i[d])?n[d]=a[randomizer(0,5)]:o.includes(i[d])?n[d]=o[randomizer(0,5)]:n[d]=i[d];var u=n.join("");return u};
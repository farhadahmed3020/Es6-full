const ages =  [12 ,23,13,14,18,20];
const ages2 = [15,16,17]
const allAges = ages.concat(ages2).concat([5]).concat(ages2);
const allAges2 = [...ages ,...ages2];
console.log(allAges2);


const business = 650 ;
const minister = 450  ;
const  sochib = 250 ;
const money = [650, 450 ,250, 670];
//const maximum = Math.max (business ,minister , sochib);
const maximum = Math.max(...money);
console.log(maximum);
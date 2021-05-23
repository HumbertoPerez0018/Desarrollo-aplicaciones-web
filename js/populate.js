console.log("Populator load");
const lastnames = [
"Smith",
"Johnson",
"Williams",
"Brown",
"Jones",
"García",
"Miller",
"Davis",
"Rodríguez",
"Martínez",
"Hernández",
"López",
"González",
"Wilson",
"Anderson",
"Thomas",
"Taylor",
"Moore",
"Jackson",
"Martin",
"Lee",
"Pérez",
"Thompson",
"White",
"Harris",
"Sánchez",
"Clark",
"Ramírez",
"Lewis",
"Robinson",
"Walker"
];
const names =[
"James",
"Mary",
"Robert",
"Patricia",
"John",
"Jennifer",
"Michael",
"Linda",
"William",
"Elizabeth",
"David",
"Barbara",
"Richard",
"Susan",
"Joseph",
"Jessica",
"Thomas",
"Sarah",
"Charles",
"Karen",
"Christopher",
"Nancy"
];
const cardType = [
		"Visa",
		"MasterCard",
		"American"
];
function cardNumber(){
		return Math.floor((Math.random() * 10000000000) + 1);
}
function ExpDate(){
		var month= Math.floor((Math.random() * 30) + 1);
		var year =  getRndInteger();
		var date = month + "/"+ year;
		return date;
}

function getRndInteger() {
  return Math.floor(Math.random() * (2030 - 2021) ) + 2021;
}

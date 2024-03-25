const PRICE_PER_KM = 0.21 //number
const DISCOUNT_UNDER_18 = 20//number
const DISCOUNT_OVER_65 = 40 //number


let userAge = prompt("ciao utente quanti anni hai?") //string null
userAge = parseInt(userAge) //number|null
console.log(`L'utente ha ${userAge} anno/i`);

let kilometersToTravel = prompt("quanti chilometri deve percorrere?")
kilometersToTravel = parseInt(kilometersToTravel);
console.log(`L'utente deve percorrere ${kilometersToTravel} chilometro/i`);


let ticketPrice; 
let discountToApply = 0;
let finalTicketPrice;

if (userAge !== null && userAge > 0) { //validazione età
	ticketPrice =  PRICE_PER_KM * kilometersToTravel;
	if (userAge < 18) {
		//sconto minorenne
		console.log("hai diritto al 20% di sconto"); 
		discountToApply = (ticketPrice * DISCOUNT_UNDER_18) / 100;
		
	} else if (userAge > 65) {
		//sconto over 65
		console.log("hai diritto al 40% di sconto"); 
		discountToApply = (ticketPrice * DISCOUNT_OVER_65) / 100;
	}
	finalTicketPrice = ticketPrice - discountToApply;
	finalTicketPrice = finalTicketPrice.toFixed(2); //string
	finalTicketPrice = parseFloat(finalTicketPrice) //number
}
console.log(finalTicketPrice);

// userAge
// kilometersToTravel
// discountToApply
// finalTicketPrice

if (finalTicketPrice === undefined) {
	document.getElementById("result").innerHTML = `L'utente ha inserito dati non validi!`;
} else {
	document.getElementById("result")
		.innerHTML = `
			L'utente ha ${userAge} anni </br>
			Deve percorrere ${kilometersToTravel} chilometro/i </br>
			Gli spetta uno sconto pari a ${discountToApply.toFixed(2)} € </br>
			Il prezzo finlale del tuo biglietto é ${finalTicketPrice} €.
		`;
}


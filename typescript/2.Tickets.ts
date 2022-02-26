class Ticket {
	constructor(public destination: string, public price: number, public status: string) {}
}

function solve(tickets: String[], cryteria: string) {
	let result = [];
	tickets.forEach((ticket) => {
		let [destination, price, status] = ticket.split("|");
		result.push(new Ticket(destination, Number(price), status));
	});

	switch (cryteria) {
		case "destination":
			console.log(result.sort((a, b) => a.destination.localeCompare(b.destination)));
			break;
		case "status":
			console.log(result.sort((a, b) => a.status.localeCompare(b.status)));
			break;
		case "price":
			console.log(result.sort((a, b) => a.price - b.price));
			break;
	}
}

solve(
	[
		"Philadelphia|94.20|available",
		"New York City|95.99|available",
		"New York City|95.99|sold",
		"Boston|126.20|departed",
	],
	"destination"
);

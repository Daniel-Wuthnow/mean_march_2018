class deck{
	constructor(){
		this.deck = this.create_deck()
	}

	create_deck(){
		var deck = [];
		var suit = ["Spade","Heart","Club","Dimond"];
		for (var i = 0; i < suit.length; i++){
			for (var j = 1; j <= 13; j++) {
				deck.push([j,suit[i]]);
			}
		}
		console.log(deck)
		return deck
	}
	shuffle(deck) {
		var m = deck.length, t, i;

  // While there remain elements to shuffle…
		while (m) {

    // Pick a remaining element…
		i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
		t = deck[m];
		deck[m] = deck[i];
		deck[i] = t;
		}
		console.log(deck);
		return deck;
	}

	deal(deck){
		var card = deck[deck.length-1];
		this.deck.pop();
		console.log(deck.length)
		return card;
	}

	reset(deck){
		this.deck = this.create_deck();
		return this.deck;
	}

}

class player{
	constructor(name){
		this.name = name;
		this.hand = [];
	}

	draw(deal){
		this.hand.push(deal)
		console.log(this.hand)
		return this.hand
	}

	discard(){
		this.hand.pop()
		console.log(this.hand)
		return this.hand
	}


}
const cards = new deck()
cards.create_deck()
cards.shuffle(cards.deck)

let daniel = new player()
daniel.draw(cards.deal(cards.deck))
daniel.draw(cards.deal(cards.deck))
daniel.draw(cards.deal(cards.deck))
daniel.discard()
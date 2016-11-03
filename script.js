function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
}

$(document).ready(function(){
	var totalAvailableCash = 20;

	var apples = {
		name:"apple",
		price:1
	};

	var oranges = {
		name:"orange",
		price:2
	};

	var bananas = {
		name:"banana",
		price:3
	};

	var pears = {
		name:"pear",
		price:4
	};

	var fruits = [apples, oranges, bananas, pears];
	apples.price=5;
	//console.log(fruits);

	function changePrice (fruit){
		var prChange = randomNumber(-25, 25);
		fruit.price += prChange/100;
		//console.log("random number: "+prChange);
	}

	function intervalChange() {


		for (var i = 0; i < fruits.length; i++) {
			changePrice(fruits[i]);
			if (fruits[i].price > 9.99) {
				fruits[i].price = 9.99;
			} else if ( fruits[i].price < .50) {
				fruits[i].price = .50;
			}
			//console.log(fruits[i].name);
			var test = (fruits[i].name);
			//var tmpNum = fruits[i].price;
			$('#'+test+"Price").text((fruits[i].price).toFixed(2));

			//console.log(test);

		}

		//$('#applePrice').text(2);
		// $('#oranges').empty();
		// $('#bananas').empty();
		// $('#pears').empty();

		//intervalPrice();
	}


	//intervalChange();

	// changePrice(apples);
	// console.log(apples.price);

	$('h1').append('<h1><span></span>' + totalAvailableCash + '</h1>');

	$('#fruits').append('<div id="apples"></div>');
	$('#fruits').append('<div id="oranges"></div>');
	$('#fruits').append('<div id="bananas"></div>');
	$('#fruits').append('<div id="pears"></div>');

	$('#apples').append('<img src="fruit-pics/apple.jpg" alt="apple">');
	$('#oranges').append('<img src="fruit-pics/oranges.jpg" alt="orange">');
	$('#bananas').append('<img src="fruit-pics/bananas.jpg" alt="banana">');
	$('#pears').append('<img src="fruit-pics/pears.jpg" alt="pears">');

	$('#apples').append('<p id="applePrice">Price: $' + (apples.price).toFixed(2) + '</p>');
	$('#oranges').append('<p id="orangePrice">Price: $' + (oranges.price).toFixed(2) + '</p>');
	$('#bananas').append('<p id="bananaPrice">Price: $' + (bananas.price).toFixed(2) + '</p>');
	$('#pears').append('<p id="pearPrice">Price: $' + (pears.price).toFixed(2) + '</p>');


	// $('#applePrice').append('<button id="buyApples">Buy</button>');
	// $('#orangePrice').append('<button id="buyOranges">Buy</button>');
	// $('#bananaPrice').append('<button id="buyBananas">Buy</button>');
	// $('#pearsPrice').append('<button id="buyPears">Buy</button>');

	 setInterval(intervalChange, 1000);
	 //intervalChange();

	// function intervalPrice() {
	// 	$('#apples').append('<p id="applePrice">Price: $' + (apples.price).toFixed(2) + '</p>');
	// 	$('#oranges').append('<p id="orangePrice">Price: $' + (oranges.price).toFixed(2) + '</p>');
	// 	$('#bananas').append('<p id="bananaPrice">Price: $' + (bananas.price).toFixed(2) + '</p>');
	// 	$('#pears').append('<p id="pearsPrice">Price: $' + (pears.price).toFixed(2) + '</p>');
	// }





});

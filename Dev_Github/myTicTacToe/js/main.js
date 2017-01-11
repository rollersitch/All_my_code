$(document).ready( function() {

	// Images for X and O
	var xImage = 'images/x_image.jpg';
	var oImage = 'images/o_image.png';

	// Keep track of the user's choice
	var userImage, computerImage;

	// Winning combinations
	var winnings = [
		[1,2,3],
		[4,5,6],
		[7,8,9],
		[1,4,7],
		[2,5,8],
		[3,6,9],
		[1,5,9],
		[3,5,7]
	];

	var choice;

	function startGameLoop() {
		showChoice();
		attachListeners();
	}

	function showChoice() {
		choice = prompt("Choose X or O", "");

		if(choice && choice === 'X') {
			userImage = xImage;
			computerImage = oImage;
		}
		else {
			userImage = oImage;
			computerImage = xImage;
		}
	}


	//var turn = 'USER';

	function attachListeners() {
		$('table tr td').click(function(event) {
			event.preventDefault();

			var id = $(this).attr('id');
			//var val = $(this).attr('data-val') || '';

			if($(this).html() === "") {
					putImageOnCell(userImage,id);
					setTimeout(function(){
						putImageOnRandomCell(computerImage);
						}, 1000);


					if(checkWinners().wins === 'X') {
							alert('X Wins!!');
						}
					if(checkWinners().wins === 'O') {
						alert('O Wins!!');
					}
			}	
		});
	}

	function checkWinners() {
		var Xs = [];
		var Os = [];
		var i;

		for(i=1; i<10; i++) {
			if($('#'+i).data('val') === 'isX') {
				Xs.push(i);
			}
			if($('#'+i).data('val') === 'isO') {
				Os.push(i);
			}
		}

		function checkPlayer(array) {	

			var matched= false;

			for(var i = 0; i<winnings.length; i++) {
				for(var j=0; j<3; j++) {
					if(array.indexOf(winnings[i][j]) !== -1) {
						matched = true;
					}
					else {
						matched=false;
						break;
					}
				}
				if(matched) {
					return true;
				}	
			}
			return false;
		}

		var Xwins = checkPlayer(Xs);
		var Owins = checkPlayer(Os);

		if(Xwins) {
			return {
				wins: 'X'
			};
		}
		if(Owins) {
			return {
				wins: 'O'
			};
		}
		return {
			wins: ''
		};
	}

	

	function randomCellNumber() {
		return Math.floor((Math.random() * 9) +1);
	}

	function cellIsFree(cell) {
		if($('#'+cell).attr("data-val")) {
			return false;
		}
		else {
			return true;
		}
	}

	function putImageOnRandomCell(image) {
		var cell;
		var occupied = [];
		do {
			cell = randomCellNumber();
			if(cellIsFree(cell)) {
				putImageOnCell(image,cell);
				return;
			}
			else {
				occupied.push(cell);
			}
		}while(occupied.length <= 9);
		//refresh();
	}

	function putImageOnCell(image, cell) {
		if(image === xImage)
			$('#'+cell).html('<img src="' + image + '" >').attr('data-val', 'isX');
		else
			$('#'+cell).html('<img src="' + image + '" >').attr('data-val', 'isO');
	}

	function removeImageFromCell(id) {
		$('#'+id).html("").removeAttr('data-val');
	}


	function refresh() {
		for(var i= 0; i<10; i++) {
				removeImageFromCell(i);
				startGameLoop();
		}
	}

	$('a').click(function(event) {
			event.preventDefault();
			refresh();
		});

	startGameLoop();
});
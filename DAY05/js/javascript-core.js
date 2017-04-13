var count = 11;

if (count === 10) {
	console.log("count is ten.");
} else {
	console.log("count isn't ten.");
}


var button = document.querySelector('.show-hide-button');
var list = document.querySelector('.show-hide-list')

console.log('button:', button);
console.log('list:', list);

// 해당 객체에 이벤트 리스너(속성)를 설정
// button.onclick = detectVisibleProcess;

// 리스너가 감지한 이벤트를 처리할 핸들러(함수) 작성  (detect - 감지하다 )
// function detectVisibleProcess() {
// 	// console.log('clicked button');
// 	var condition = list.hasAttribute('style');
// 	if (condition) {console.log('condition is true.');}
// 	else {console.log('condition is false.');}
// }

function detectVisibleProcess() {
	
	var condition = list.hasAttribute('style');
	
	if (condition) {
		list.removeAttribute('style');
		button.textContent = '목록 감추기'
	} else {
		list.setAttribute('style', 'display:none');
		button.textContent = '목록 보이기'
	}
}

// javaScript로 CSS 제어    
var html = document.documentElement;  

html.setAttribute('class', 'js');



// card 제어

var card = document.querySelector('.card');
var card_toggle_button = card.querySelector('.card-header-icon');
var card_delete_button = card.querySelector('.card-delete-button');
var card_content = document.querySelector('.card-content');

// console.groupCollapsed('.Card Component Elements');
// console.log('card:', card);
// console.log('card_toggle_button:', card_toggle_button);
// console.log('card_delete_button:', card_delete_button);
// console.groupEnd('.Card Component Elements');

// card_toggle_button.onclick = toggleCardButton;
// card_delete_button.onclick = deleteCard;

var count = 0;
card_toggle_button.onclick = function(event) {
	event.preventDefault();
	// console.log(++count);

	var is_hidden = card_content.classList.contains('is-hidden');
	var icon = this.querySelector('.fa');

	if(is_hidden) {
		// 감춰진 상태
		card_content.classList.remove('is-hidden');
		this.setAttribute('title', 'Card Hide');
		this.setAttribute('aria-label', 'Card Hide');
		icon.classList.remove('fa-angle-up');
		icon.classList.add('fa-angle-down');   
	} else {
		// 보여지는 상태
		card_content.classList.add('is-hidden');
		this.setAttribute('title', 'Card Show');
		this.setAttribute('aria-label', 'Card Show');
		icon.classList.remove('fa-angle-down');
		icon.classList.add('fa-angle-up');   
	}
};

card_delete_button.onclick = function (event) {
	event.preventDefault();

	card.parentNode.removeChild(card);
};



// var condition = 'hard';

// if (condition === 'hard') {
// 	console.log('hard');
// }
// else if (condition === 'memory') {
// 	console.log('memory');
// } 
// else {
// 	console.log('else hard or memory');
// }



var num = 4;

if (num > 5 && num < 10) {
	console.log('num > 5 && num < 10');
} else if (num < 15 || num >= 45) {
	console.log('num < 15 || num >= 45');
}


// var use_jQuery = null;

// if (window.jQuery) {
// 	use_jQuery = true;
// } else {
// 	use_jQuery = false;
// }


// 3항 연산자 표현식
// var use_jQuery = window.jQuery ? true : false;


var received_data = window.receive ?
						'receive' :
						window.document ?
						'document' :
						window.mouseControl ?
						'mouseControl' :
						null;

// console.log('receive_data:', receive_data);


var today = '나의 요일';

switch(today) {
	default:
	console.info('입력하신 요일은 존재하지 않습니다');
	break;
	case '월요일' :
		console.log('today is 월요일');
	break;
	case '화요일' :
		console.log('today is 화요일');
		break;
	case '수요일' :
		console.log('today is 수요일');
		break;
	case '목요일' :
		console.log('today is 목요일');
		break;
	case '금요일' :
		console.log('today is 금요일');
		break;
	case '토요일' :
		console.log('today is 토요일');
		break;
	case '일요일' :
		console.log('today is 일요일');
		break;
}
console.log('today:', today);

















































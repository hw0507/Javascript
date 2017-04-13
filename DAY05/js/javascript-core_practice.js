// var button = document.querySelector('.show-hide-button');
// var list = document.querySelector('.show-hide-list');

// // console.log('button:', button);
// // console.log('list:', list);

// button.onclick = clickButton;

// function clickButton() {

// 	var condition = list.hasAttribute('style');

// 	if(condition) {
// 		list.removeAttribute('style');
// 		button.textContent = '목록 감추기'
// 	} else {
// 		list.setAttribute('style', 'display:none');
// 		button.textContent = '목록 보이기'
// 	}

// }

var card = document.querySelector('.card');
var card_toggle_btn = document.querySelector('.card-header-icon');
var card_delete_btn = document.querySelector('.card-delete-button');
var card_edit_btn = document.querySelector('.card-edit-button');
var card_content = document.querySelector('.card-content');

card_toggle_btn.onclick = function(event) {
	event.preventDefault();

	var is_hidden = card_content.classList.contains('is-hidden');
	var icon = this.querySelector('.fa');

	if(is_hidden) {
		card_content.classList.remove('is-hidden');
		this.setAttribute('title', 'Card Hide');
		this.setAttribute('aria-label', 'Card Hide')
		icon.classList.remove('fa-angle-up');
		icon.classList.add('fa-angle-down');
	} else {
		card_content.classList.add('is-hidden');
		this.setAttribute('title', 'Card Show');
		this.setAttribute('aria-label', 'Card Show')
		icon.classList.remove('fa-angle-down');
		icon.classList.add('fa-angle-up');
	}
}

card_delete_btn.onclick = function(event) {
	event.preventDefault();

	var is_transparent = card_content.classList.contains('is-transparent');

	if(is_transparent) {
		card_content.classList.remove('is-transparent');
	} else {
		card_content.classList.add('is-transparent');
	}
}

card_edit_btn.onclick = function(event) {
	event.preventDefault();
	card_content.setAttribute('contenteditable', true);
	card_content.focus();
}









































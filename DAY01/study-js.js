
// 이벤트: window 창이 load 되면
// 할일: 함수(function) > 제목을 찾아서 색상변경
window.onload = function(){
	// h1#heading 요소에 Javascript로 접근하여
	var heading = document.querySelector('#heading');
	console.log(heading);  // null -> 비어있다

	// 제목요소의 글자색상을 변경한다.
	heading.style.color = 'hotpink'; 
};

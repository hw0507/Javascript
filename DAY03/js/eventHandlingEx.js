var toggle_btn = document.querySelector('.toggle-button');
var memo = document.querySelector('.memo');

var memo_is_visible = true; // 보여지고 있다
var toggle_btn_content = 'Hide';  // hide <-> show

var toggleMemoControl = function() {

	// a == b : 비교 연산자
	if (memo_is_visible /*== true*/) {
		memo.style.opacity = 0;
		// 상태 변경
		toggle_btn_content = 'Show';
		// toggle_btn.innerText = toggle_btn_content; <- 중복

	} else {
		memo.style.opacity = 1;
		// 상태 변경
		toggle_btn_content = 'Hide';
		// toggle_btn.innerText = toggle_btn_content; <- 중복
	}
	// 중복되는 코드를 밖으로 꺼내줌
	toggle_btn.innerText = toggle_btn_content;
	// 코드 실행 이후에 상태가 변경되어야 함
	memo_is_visible = !memo_is_visible;
}

toggle_btn.onclick = toggleMemoControl;
// 기본값 = null
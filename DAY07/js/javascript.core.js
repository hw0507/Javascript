/*! javascript.core.js © hw0507, 2017 */

// media/ 디렉토리 내부의 cover이미지를
// 사용자 화면(view)에 뿌리기 위해(순환처리)
// 배열(집합) 데이터를 모델링 하시오.

// src, alt를 모두 HTML에 뿌려줘야 하기 때문에 배열(array)안에 객체로 src, alt 정보값을 집어넣어줌	

var coverList = [];

coverList.push({
  src: "001.EdSheeran-ShapeOfYou.jpg",
  alt: "Ed Sheeran - Shape Of You"
});
coverList.push({
  src: "002.TheChainsmokers&Halsey-Closer.jpg",
  alt: "The Chainsmokers & Halsey - Closer"
});
coverList.push({
  src: "003.Zayn&TaylorSwift-IDon'tWannaLiveForever(FiftyShadesDarker).jpg",
  alt: "Zayn & TaylorSwift - I Don't Wanna Live Forever (Fifty Shades Darker)"
});
coverList.push({
  src: "004.KatyPerry&SkipMarley-ChainedToTheRhythm.jpg",
  alt: "Katy Perry & Skip Marley - Chained To The Rhythm"
});
coverList.push({
  src: "005.Migos&LilUziVert-BadAndBoujee.jpg",
  alt: "Migos & Lil Uzi Vert - Bad And Boujee"
});
coverList.push({
  src: "006.TheChainsmokers-Paris.jpg",
  alt: "The Chainsmokers - Paris"
});
coverList.push({
  src: "007.Rihanna-LoveOnTheBrain.jpg",
  alt: "Rihanna - Love On The Brain"
});
coverList.push({
  src: "008.BrunoMars-That'sWhatILike.jpg",
  alt: "Bruno Mars - That's What I Like"
});
coverList.push({
  src: "009.BigSean-BounceBack.jpg",
  alt: "Big Sean - Bounce Back"
});
coverList.push({
  src: "010.MachineGunKelly&CamilaCabello-BadThings.jpg",
  alt: "Machine Gun Kelly & Camila Cabello - Bad Things"
});

// console.log('coverList :', coverList);


//     <ul class="music-coverlist is-list">
//         <li class="music-cover-item">
//             <img class="music-cover is-rwd" src="" alt="">
//         </li>
//     </ul>


// 1. 처음에 for 문

// for(var i = 0; i<coverList.length; ++i) {
// 	// console.log(i);
// 	// console.log(coverList[i]);
// 	var src = 'media/cover' + coverList[i];
// 	console.log(src);
// }


// 2. while문으로 변경  coverList.length; 를 변수 l로 만듬

// var i = 0;
// var l = coverList.length;  // 변수로 설정
// while(i < l) {
// 	// console.log(i);
// 	// console.log(coverList[i]);
// 	var src = 'media/cover' + coverList[i];
// 	console.log(src);
// }


// 3. 다시 for문으로 변경

var coverList_el = document.querySelector('.music-coverlist');
// console.log('coverList_el:', coverList_el);

var inner_html_code = '';  // 성능을 좋게 하기 위해서 빈 문자열 변수 1개 만듬

for(var i = 0, l = coverList.length; i < l; ++i) {
	// console.log(i);
 	// console.log(coverList[i]);
 	var src = 'media/cover/' + coverList[i].src;
 	var alt = coverList[i].alt;
 	// console.log(src);
 	// coverList_el // <ul>요소에 <li>넣기
 	

 	// 아래 코드는 성능이슈가 안좋음;;; 3번 X 10 = 총 30번에 반복됨 
//  	coverList_el.innerHTML += '<li class="music-cover-item">';
//  	coverList_el.innerHTML += '<img class="music-cover is-rwd" src="'+src+'" alt="'+alt+'">';
//  	coverList_el.innerHTML += '</li>';
	
	// 그래서 성능이슈가 좋게 수정; 변수 1개 더 만듬 그리고 변수 inner_html_code 를 for문 밖으로 빼줌
	inner_html_code += '<li class="music-cover-item">';
	inner_html_code += '<img class="music-cover is-rwd" src=" '+src+' " alt="">';
	inner_html_code += '</li>';

	// console.log(inner_html_code);
 }

// for문 맨 끝에 1번만 실행시켜주면 됨
coverList_el.innerHTML += inner_html_code; 





// 	버튼 컨트롤 이벤트 리스너 설정 및 핸들러 연결

// 현재 사용자에게 보여지는 커버의 인덱스 번호
var index = 0;
// console.log('index:', index);
// 커버 이미지 리스트 요소의 이동하는 거리
var distance = 600;

// 	3-1 버튼 컨트롤 찾기
var controller = document.querySelector('.player-controller');
var prev_btn =controller.querySelector('.is-prev');
var next_btn =controller.querySelector('.is-next');

// console.log(prev_btn);
// console.log(next_btn);

// 3-2 	버튼 컨트롤에 이벤트 리스터(속성) 설정
prev_btn.onclick = function() {
	index--;
	// console.log('prev', coverList_el)

	if(index < 0) {
		index = coverList.length - 1;
	}

	coverList_el.style.transform ='translateX('+ index * -1 * distance + 'px)';
};

next_btn.onclick = function() {
	index++;
	// console.log('next', coverList_el)

	if(index >= coverList.length) {
		index = 0;
	}

	coverList_el.style.transform ='translateX('+ index * -1 * distance + 'px)';
};


// step 4
// 인디케이터 디자인 설계
// 4.1 인디케이터 컨테이너 요소 탐색, 변수에 참조
var indicators = document.querySelector('.player-indicators');
// 4.2 인디케이터 마크업을 coverList 순환 처리하여 화면에 랜더링
// <a href role="button" class="indicator" arial-lavel=""></a>

var k = coverList.length,
	indicators_html = [];

// 처음에 while로 코드 짜고
// while(--k > -1) {
// 	console.log(coverList[k].alt);
// }

// for문으로 변경 후 기본 for문은 이렇게
// for(var k = coverList.length; k > -1; --k) {}

// 변칙 for문 > 변수선언을 괄호안에 안넣고 while문처럼 밖으로 빼도 됨
// 그리고 맨 마지막 ++ 부분을 두번째칸에 미리 써주고 세미콜론만 잘 붙이면 됨

for(; --k > -1;) {
	// console.log(coverList[k].alt);
	var label = coverList[k].alt;
	indicators_html.push ('<a href role="tab" class="indicator" arial-lavel="'+label+'"></a>');
}

// .join('') 을 붙여야 배열이 문자열로 바껴서 보여짐
// console.log(indicators_html.reverse().join(''));

indicators.innerHTML = indicators_html.reverse().join('');

// indicators.innerHTML = 'hi';

// 초기화 과정 수행 > 첫번째 버튼 활성화 
var indivators_tabs = indicators.querySelectorAll('a');
var active_indicator = indicators.querySelectorAll('a')[index];
active_indicator.classList.add('is-active');


for(var j = 0, h = indivators_tabs.length; j < h; j++) {
	var tab = indivators_tabs[j];
	// console.log(tab);
	tab.onclick = function(event) {
		// 웹브라우저 기본(default) 동작 차단(prevent)
		// a href 속성을 쓰면 창이 항상 새로고침이 됨 preventDefault() 속성을 써줘야 새로고침이 안됨
		event.preventDefault();
		// console.log('clicked tab');
	}
}































































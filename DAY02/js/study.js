/* study.js  */
/**
 *  변수(`var`iables)
 *  - "변하는 수": x, y
 *  상수(`const`ant)
 *  - "항상 일관된 수": 값(Value)
 */

// 변수 정의
// undefined 데이터(자료) 값
var favorite_item;

// 선언된 변수에 값을 할당(대입) <= 대입 연산자(=)
favorite_item = 'Macbook Pro';  // 값(Literal)

// 콘솔.기록하다(무엇을)
console.log('favorite_item =',favorite_item);    // Macbook Pro

// 문서에서 속성이 lang 이며, 속성 값이 "en"인 요소를 찾는다.
// document.querySelector('p[lang="en"]').innerText = favorite_item;

// 문서에서 찾은 객체는 다시 사용할 수 있게 메모리에 기억해둔다
// 변수 사용하는 이유
var target_p = document.querySelector('p[lang="en"]');

// target_p.innerText = favorite_item;


// $('p[lang="en"]').text(favorite_item); <- 이 아이는 제이쿼리 구문, 위와 동일 


// const 키워드를 사용하여 상수를 정의
// 선언과 동시에 값을 할당할 수도 있다
const PI = 3.141592;

console.log('PI =', PI);


// 연산자(Operator)
// 수와 관련된 연산

// single var pattern
var x, y;

// assign value
x = 10;
y = (x / x * 10) % 3;

console.log('y =', y);


// 문자와 관련된 연산
// 문자 + 문자 ???
var word1 = "paper",
	word2 = " strategy";

console.log('word1 =', word1);
console.log('word2 =', word2);
console.log('word1 + word2 =', word1 + word2);


// 숫자 + 문자 연결했을 떄

var current_year, year_word;
current_year = 2017;  // 숫자
year_word = '년'; // 문자

var current = current_year + year_word;
console.log('year_word =', current);


// 변수에 기억된 문서 객체에 접근하여 조작한다
// target_p.innerText = current;

// 'Macbook Pro, 2017년 모델'
// favorite_item + ', ' + current + ' 모델';
// target_p.innerText = favorite_item + ', ' + current + ' 모델';

// 문서에서 이벤트 제어를 처리할 버튼을 찾자
var answer_btn = document.querySelector('.answer-favorite-item');
// console.log('answer_btn:', answer_btn);

// 사용자가 버튼을 클릭하면
answer_btn.onclick = function() {
	// 수행할 일(function): 목표로 하는 단락 요소의 텍스트 값을 화면에 표시
	target_p.innerText = favorite_item + ', ' + current + ' 모델';
};

var z = 10;

// z++ // "후증가" 현재 라인에서는 z값이 변화하지 않는다. z=10
// console.log('z =', z);  // 다음 라인이기에 값은 변화된다. z = 11

// z-- // "후감소" 현재 라인에서는 z값이 변화하지 않는다. z=10
// console.log('z =', z);  // 다음 라인이기에 값은 변화된다. z = 9

++z // "선증가" 현재 라인에서 z값이 변화한다. z=11
console.log('z =', z);  // 다음 라인이기에 값은 변화된다. z = 11

--z // "선감소" 현재 라인에서 z값이 변화한다. z=9
// console.log('z =', z);  // 다음 라인이기에 값은 변화된다. z = 9


var k = 99; // 숫자

// k = k + 10;  // 99 + 10 = 109;

// 위 방법과 아래 방법은 결과적으로 동일함
k += 10;

console.log('k:', k); // 109



// 이스케이프(Escape) 처리, 백슬래시(\)


// 논리(Boolean)
// true | false
// 숫자 중에서 오직 0 만이 자동으로 Boolean 값을 바뀌었을 떄 false가 된다

// 상태(State)를 기억하기 위한 변수는 일반적으로 Boolean 값을 담는다.
// is_*
// has_*
// [BEM] 표기법 알아보기 
var is_opened = false;
var has_children = true;



// 변수를 선언만 하고, 값을 할당하지 않은 초기 상태의 값은 undefined 이다.
// 문서 객체의 이벤트 초기 속성값은 모두 null 이다.















































다
















// 자바스크립트 데이터 유형
// single 'var' pattern

var num = 1, 
	str = 'phone', 
	boo = true, 
	fun = function(){},
	arr = [],
	obj = {};

// 데이터 형 변환

Boolean(num);   // true
Boolean(0);     // false
Boolean(-1000); // true
Boolean(str);   // true
Boolean('');    // false
Boolean(' ');   // true


// array




var favorite_items = [
	'coffee',
	'macbook',
	'remote controller',
	'house',
	'car'
];

var data_list = [3, 'hey', false, function(){}, [3], {a:9}];

console.log('data_list[0]:', data_list[0]);
 
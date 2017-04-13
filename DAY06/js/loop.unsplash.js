    // <img src="https://source.unsplash.com/category/nature/620x314" alt="">


// 포토 갤러리 컨테이너 요소 참조
var photo_gallery = document.querySelector('.photo-gallery');

// console.log('photo_gallery:', photo_gallery);

// 2장 가져올려면 = 에 + 를 붙여서 += 을 만들어야 2장 가져옴 / 1장 이상 가져올 떄 += 를 붙여줌
// photo_gallery.innerHTML += '<img src="https://source.unsplash.com/category/nature/620x314" alt="">';

// var n = 1;
// var max = 9;
// while (max--) {  // 후감소
// 	photo_gallery.innerHTML += '<img src="https://source.unsplash.com/category/nature/303x300">'
// }


// 카테고리를 순환하여 화면에 이미지 출력

var categories = [];
categories.push('buildings');
categories.push('food');
categories.push('nature');
categories.push('people');
categories.push('technology');
categories.push('objects');
categories.push('buildings');
categories.push('food');
categories.push('technology');
categories.push('objects');
categories.push('nature');
categories.push('people');



// var categories_len = categories.length;
// while (categories_len--) {  // 후감소  < 이렇게 쓸수도 있고 아래처럼 쓸수도 있다. 대신 이렇게 쓰면 아래에 i++ 안써줘도 된


var i = 0, source, size;	오
while (i < categories.length) {

	// source = 'https://source.unsplash.com/category/' + categories[i] +'/400x400'  // 이렇게 하면 같은 카테고리는 사진이 똑같음  
                                                                                  // 사진사이즈를 변경하면 사진이 변함 
																						// 정사각형 이니까 사이즈를 변수로 만듬

size = (i+10) *20;
size = size +'x'+ size;

source = 'https://source.unsplash.com/category/' + categories[i] +'/' + size;

	photo_gallery.innerHTML += '<img src="' + source + '" alt="">'                

	i++;
}
// console.log('categories.length:', categories.length);

for(i=0; i<categories.length; i++) {
	var size = (i+10) *20;
	size = size +'x'+ size;
	var source = 'https://source.unsplash.com/category/' + categories[i] +'/' + size;

}




// do, while 문

// var k = 10;
// do {
// 	k++;
// } while(k > 20);


// while(k > 20) {
// 	// console.length(k);
// 	// k++
// }


// for 문

// var i = 0;
// while(i < categories.length) {
// 	console.log(i);
// 	i++;
// }

// for(var i=0; i < categories.length; i++) {  // 위랑 코드가 같음
// 	console.log(i);
// }














































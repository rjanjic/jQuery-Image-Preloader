jQuery-Image-Preloader
======================

jQuery-Image-Preloader



Examples:


elements

`````javascript
$('img').preload(function(e){
	console.log(e.attr('src') + ' - Loaded');
}, function(){
	console.log('All done');
});
`````

array

`````javascript
$(['/images/img-1.gif', '/images/img-2.jpg', '/images/img3.png']).preload(function(e){
	console.log(e + ' - Loaded');
}, function(){
	console.log('All images are loaded');
});
`````

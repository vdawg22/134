import {MyToolkit} from './mytoolkit.js';

// Implement a MyToolkit Button
var btn = new MyToolkit.Button;
btn.move(100,100);
btn.onclick(function(e){
	console.log(e);
});

var cb = new MyToolkit.Button;
cb.move(20,500);
cb.onclick(function(e){
	console.log(e);
});
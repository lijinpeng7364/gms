import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   // Add the image to our existing div.
// 	var myIcon = new Image();
// 	myIcon.src = Icon;

// 	element.appendChild(myIcon);

// 	btn.innerHTML = 'Click me and check the console!';
// 	btn.onclick = printMe;
	
// 	element.appendChild(btn);
// 	console.log(123)
//   return element;
// }

// let element = component(); // Store the element to re-render on print.js changes
// document.body.appendChild(element);


// if (module.hot) {
// 	module.hot.accept('./print.js', function() {
// 		console.log(' Accepting the updated printMe module!');
// 		printMe();
// 		document.body.removeChild(element);
// 		element = component(); // Re-render the "component" to update the click handler
// 		document.body.appendChild(element);
// 	})
// }

import React from 'react';
import ReactDOM from 'react-dom';
var str = 'hello world ljp'

const render = () => (ReactDOM.render(
	<p >{str}</p>,
    document.getElementById('root')
));

render();

if (module.hot) {
	module.hot.accept('./', function() {
		console.log(' Accepting the updated printMe module!');
		printMe();
		render();
	})
}
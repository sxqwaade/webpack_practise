require('./main.css');
require('./main.scss');

var sub = require('./sub');
var $ = require('jquery');
var moment = require('moment');
var app = document.createElement('div');


app.innerHTML = '<h1>Hello 333333 </h1>';
app.appendChild(sub());
document.body.appendChild(app);


$("body").append('<p>look at me ! now is '+moment().format()+'</p>');

// import './main.css';
// import './main.scss';
// import sub from './sub';
// import $ from 'jquery';
// import moment from 'moment';
//
// let app = document.createElement('div');
// const myPromise = Promise.resolve(42);
// myPromise.then((number)=>{
//   $('body').append('<p>Promise result is '+number+' now is '+moment().format()+' </p>');
// });
// app.innerHTML = '<h1>Hello h1 World</h1>';
// document.body.appendChild(app);
// app.appendChild(sub());

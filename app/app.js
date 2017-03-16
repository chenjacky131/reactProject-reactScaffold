import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import NewsList from './list.js';


function get(url){
	return Promise.resolve($.ajax(url));
}
get('https://chenjacky131.github.io/test/list.json').then(function(lists){
	render(<NewsList items={lists.lists}/>,$('#content')[0]);
}).catch(function(err){
	console.log('error occur'.err);
})
import React from 'react';
import ReactDOM from 'react-dom';
import JsonParser from './JsonParser';
import jsontest from './jsontest';

it('Is test', () => {
	expect("fakeName").toEqual("fakeName");
});

it('Test getStartTime', () => {
	const testJson = new JsonParser(jsontest);
	expect(testJson.getStartTime(0)).toEqual("15:00:00");
});

it('Test getEndTime', () => {
	const testJson = new JsonParser(jsontest);
	expect(testJson.getEndTime(0)).toEqual("16:15:00");
});

it('Test getID', () => {
	const testJson = new JsonParser(jsontest);
	expect(testJson.getID(0)).toequal("12345");
});

it('Test getDate', () => {
	const testJson = new JsonParser(jsontest);
	expect(testJson.getDate(0)).toEqual("2019-05-08T");
});
	

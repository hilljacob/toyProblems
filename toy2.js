// Description: 7 kyu  Mumbling
//
// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	var newArray = s.toLowerCase().split('');
	for(var i= 0; i<newArray.length; i++){
	  newArray[i] = newArray[i].repeat(1 +i);

	}
	for(var j= 0; j<newArray.length; j++){
	  newArray[j] = newArray[j].charAt(0).toUpperCase() + newArray[j].slice(1);

	}
	var yup = newArray.join('-');
	return yup;
}

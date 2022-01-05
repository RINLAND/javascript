var person = 'Mike';
var age = 27;

function myTag(strings, personExp, ageExp){

    var str0 = strings[0];
    var str1 = strings[1];
    
    var ageStr;
    if (ageExp > 99 ){
        ageStr = 'centenarian';
    }else{
        ageStr = 'youngster';
    }
    return str0 + personExp + str1 + ageStr;

}

var output = myTag`that ${ person } is a ${age}`;
console.log(output);
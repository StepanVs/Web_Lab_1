var sort = require('./sort');
var nsd = require('./NSD')
var user = require('./User')
var last = require('./last')
//1.
function stringToStrArr(text){
    var res = [];
    var a = 0;
    var b = 0;
    var space = false;
    if(text[text.length -1] !== ' '){
        text += ' ';
    }
    for(let i = 0;i < text.length;i++){
        if(space && text[i] !== ' ')
        {
            a = i;
            space = false;
        }
        if(!space && text[i] === ' '){
            console.log(text.slice(a,i));
            res.push(text.slice(a,i));
            space = true;
        }
    }
    return res;
}
//2.
function wordSort(word){
    let a  = sort.bubbleSort(word);
        console.log(a);
        console.log(word);
}
//5
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function main(args){
    //1
    console.log("//1");
    stringToStrArr("hello world !!!")

    //2
    console.log("//2");
    wordSort("cbadgfe");
    //3
    console.log("//3");
    console.log(nsd.NSD(15,3));
    //4
    console.log("//4");
    console.log(sort.bogoSort([0,1,2,3,4,5,6,7]));
    //5
    console.log("//5");
    console.log( "Лютий 1902р: ", daysInMonth(2,1902), " днів");
    console.log( "Лютий 1903р: ", daysInMonth(2,1903), " днів");
    console.log( "Лютий 1904р: ", daysInMonth(2,1904), " днів");
    console.log( "Лютий 1905р: ", daysInMonth(2,1905), " днів");
    //6
    console.log("//6");
    console.log(user.SortedUsers(['Vlad','Vlst','Lomchez','Lnton']))
    //7
    console.log("//7");
    last.main();

}


main(null);
"use strict";

$(document).ready(function() {

    /****************** MAP, FILTER, REDUCE ******************/

    // Array of MacBookPro{} objects
    var mbpModels = [
        {
            id: 'MA464LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core Duo" 2.0',
            model: 'A1150',
            year: '2006',
            price: 3199
        },
        {
            id: 'MB986LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core 2 Duo" 2.8',
            model: 'A1286',
            year: 'Mid-2009',
            price: 2799
        },
        {
            id: 'MD311LL/A ',
            desc: 'Apple MacBook Pro 17-Inch "Core i7" 2.4',
            model: 'A1297',
            year: 'Late-2011',
            price: 2399
        },
        {
            id: 'MGXA2LL/A',
            desc: 'Apple MacBook Pro 15-Inch "Core i7" 2.2',
            model: 'A1398',
            year: 'Mid-2014',
            price: 2299
        }
    ];


    // ES6
    // var cartTotal = cart.reduce((total,item) => total + item.cost, 0);

    // *****************   ******     ******************//
    // *****************  TODO: MAP() ******************//
    // *****************   ******     ******************//

    // Print a list of id's of the mbpModels array
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6


    /********************************* 1 *********************************/

    //  1. Using forEach()


    /********************************* 2 *********************************/

    //  2. Using map()


    /********************************* 3 *********************************/

    //  3. Use ES6


    /**************************** createList() ***************************/
    /******* returns a <li> type list in raw HTML ************************/
    function createList(arr) {
        var html = '';
        arr.forEach(function (item) {
            html += '<li>' + item + '</li>';
        });
        return html;
    }
    /**************************** createList() ***************************/


    // *****************   ******     ******************//
    // **************  TODO: FILTER() ******************//
    // *****************   ******     ******************//

    // Print a list of the models made in 2011 and later
    //  1. Use forEach()
    //  2. Use map()
    //  3. Use ES6

    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get year from string *****************************/
    function getYear(yearString) {
        let yearArr,bucket;
        [yearArr, bucket] = [yearString.split(''),[]];
        for(var i=3; i>=0; i--) {
            bucket[i] = yearArr.pop();
        }
        return bucket.join('');
    }
    /********************* END function to get year from string ***************************/


    /********************************* 1 *********************************/
    //  1. Use forEach()


    /********************************* 2 *********************************/
    //  2. Use filter()


    /********************************* 3 *********************************/
    //  3. Use ES6


    // *****************   ******     ******************//
    // **************  TODO: REDUCE() ******************//
    // *****************   ******     ******************//

    // Determine the total value of all MacBook Pros together
    //  1. Use forEach()
    //  2. Use reduce()
    //  3. Use ES6

    /********************************* 1 *********************************/
    //  1. Use forEach()


    /********************************* 2 *********************************/
    //  2. Use reduce()


    /********************************* 3 *********************************/
    //  3. Use ES6


    /**************************** LEAVE IN FOR STUDENTS **(********************************/
    /*********************** function to get commas in number *****************************/
    function commaThousandsRefactor(number) {
        let numArr = number.toString().split('');
        let numDigits = numArr.length;
        numArr.reverse();
        // 1-3 : no commas
        // 4-6 : 1 comma
        // 7-9 : 2 commas
        // ...   ...
        // 1. 123456789
        // 2. 123456,789
        // 3. 123,456,789
        for(let i=0; i<(numDigits+numDigits%3)/3; i++) {
            numArr.splice(3, 0, ','); //987,654321
            numArr.splice(7, 0, ','); //987,654,321
            
        }

    }
    commaThousandsRefactor(10485);
    function commaThousands(number) {
        var numArr = number.toString().split('');
        var startPos = numArr.length % 3;
        var initialLength = numArr.length;
        var first = true;
        var extra = 0;
        // add commas every third digit from the end
        if( numArr.length <= 3) {
            return number;
        } else {
            for(var i = 0; i < (numArr.length - numArr.length % 3) / 3; i++) {
                console.log('for iteration');
                console.log(i * 3 + extra + startPos);
                if(i*3+extra+startPos >= initialLength+extra) {
                    // console.log('stop');
                    break;
                } else {
                    if((startPos !== 0) && first) {
                        numArr.splice(startPos,0,',');
                        first = false;
                        extra++;
                    } else{
                        numArr.splice((i*3+extra),0,',');
                        extra++;
                    }
                }
            }
            // console.log(numArr.join(''));
            numArr.splice(0,0,'$');
            return numArr.join('');
        }
    }
    /**************************** DON'T WORRY HOW THIS FUNCTION WORKS ********************************/

});



const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    let users1 = users.filter(x => x.languages.length >= 3);
        console.log(users1);

// Use .map to create an array of strings where each element is a user's email address

    let users2 = users.map(x => x.email);
        console.log(users2);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    let users3 = users.reduce((total, x) => {
        return x.yearsOfExperience + total;
    }, 0);
        console.log(users3);

// Use .reduce to get the longest email from the list of users.

    let users4 = users2.sort(
        (x, y) => y.length - x.length
    );
        console.log(users4[0]);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

    let users5 = users.reduce((total, x) => {
        return total + x.name + " ";
    }, "");
        console.log(users5);
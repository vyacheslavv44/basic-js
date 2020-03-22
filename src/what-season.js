module.exports = function getSeason(date) {
    //throw 'Not implemented';
    // remove line with error and write your code here


    //var date = new Date();


    /*if (!date) {
        return 'Unable to determine the time of year!';
    }*/

    if (date == undefined) {
        return 'Unable to determine the time of year!';
    };

    if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error();
        //return 'TypeError: Cannot read property \'getMonth\' of undefined';
    }

    /*if (isNaN(date)) {
        throw new Error();
    }*/

    var n = date.getMonth();

    if ([11, 0, 1].includes(n)) {
        return 'winter';
    }

    if ([2, 3, 4].includes(n)) {
        return 'spring';
    }

    if ([5, 6, 7].includes(n)) {
        return 'summer';
    }

    if ([8, 9, 10].includes(n)) {
        return 'autumn';
    }


};
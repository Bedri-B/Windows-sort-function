//Checks if the string contains number
function isNumeric(string){
    for(let i=0; i<string.length;i++){
        try{
            let num = parseInt(string[i]);
            if(!isNaN(num)) return true;
        }
        catch(error){
            console.log(string[i] + " Is not a number")
        }
    }
    return false;
}

//Split each letter and numbers(as one)
function SplitNum(string){
    string = string.toString().toLowerCase();
    let _string = [];
    let temp = "";
    let num = false;
    for(let i=0; i < string.length; i++){
        while(i < string.length){
            if(isNumeric(string[i])){
                temp += string[i];
                i++;
                num = true;
                continue;
            }
            else{
                if(num){
                    _string.push(temp);
                    temp = "";
                    num = false;
                }
                temp += string[i];
            }
            _string.push(temp);
            temp = "";
            break;
        }
        if(num){
            _string.push(temp);
            temp = "";
        }
    }
    return _string;
}


//Sorting based on the split letters and numbers
/**
 * @return {boolean}
 */
function Sort(a, b){
    a = SplitNum(a);
    b = SplitNum(b);
    let al = a.length;
    let bl = b.length;
    for(let i=0; i<(al < bl ? al : bl); i++){
        if(isNumeric(a[i]) && isNumeric(b[i])){
            if(parseInt(a[i]) !== parseInt(b[i])) return parseInt(a[i]) < parseInt(b[i]);
        }
        else if(!isNumeric(a[i]) && isNumeric(b[i])){
            return false;
        }
        else if(isNumeric(a[i]) && !isNumeric(b[i])){
            return true;
        }
        else if(!isNumeric(a[i]) && !isNumeric(b[i])){
            if(a[i] !== b[i]) return a[i] < b[i];

        }
    }
    return true;
}

//Sorting Call 
//Return sorted list 
//order(boolean):  true for "ASCENDING" and false for "DESCENDING"
function WindowsSort(list, order){
    let x = (order ? 1 : -1);
    let y = (!order ? 1 : -1);
    return list.sort((a,b) => {return Sort(a,b) ? x : y});
}

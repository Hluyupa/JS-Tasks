function Multiply(a, b){
    a = a.split('').reverse();
    b = b.split('').reverse();
    let result = [];
    
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {

            if(result[i + j]){
                result[i + j] += a[i] * b[j];
            }
            else{
                result[i + j] = a[i] * b[j];
            }
        }
    }

    for (let i = 0; i < result.length; i++) {
        if(result[i] > 9){
            let valueInCell = result[i] % 10;
            let valueToNextCell = Math.floor(result[i] / 10);
            result[i] = valueInCell;
            if(valueToNextCell!=0){
                if(result[i+1]!=0){
                    result[i+1]+=valueToNextCell;
                }
                else{
                    result[i+1]=valueToNextCell;
                }
            }
        }
    }
    return result.reverse().join('');
}


function Sum(a, b){
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');
    let result = [];
    if (a.length > b.length) {
        for (let i = 0; i <= a.length - b.length; i++) {
            b += "0";
        }
    }
    else if(a.length < b.length){
        for (let i = 0; i <= b.length - a.length; i++) {
            a += "0";
        }
    }
    a = a.split('');
    b = b.split('');
   
    for (let i = 0; i < a.length; i++) {
        result.push(Number(a[i]) + Number(b[i]));
    }

    for (let i = 0; i < result.length; i++) {
        if(result[i] > 9){
            let valueInCell = result[i] % 10;
            let valueToNextCell = Math.floor(result[i] / 10);
            result[i] = valueInCell;
            if(valueToNextCell!=0){
                if(result[i+1]){
                    result[i+1]+=valueToNextCell;
                }
                else{
                    result.push(valueToNextCell);
                }
            }
        }
    }

    return result.reverse().join('');
}

function Subtraction(a, b){
    aIsBiggerNumber = true;
    let result = [];
    if (a.length > b.length) {
        aIsBiggerNumber = true;
        for (let i = 0; i <= a.length - b.length; i++) {
            b = "0" + b;
        }
    }
    else if(a.length < b.length){
        aIsBiggerNumber = false;
        for (let i = 0; i <= a.length - b.length; i++) {
            a = "0" + a;
        }
    }
    else{
        for (let i = 0; i < a.length; i++) {
            if (Number(a[i]) > Number(b[i])) {
                aIsBiggerNumber = true;
                break;
            }
            else if (Number(a[i]) < Number(b[i])){
                aIsBiggerNumber = false;
                break;
            }
        }
    }

    if(aIsBiggerNumber){
        for (let i = 0; i < a.length; i++) {
            value = a[i] - b[i];
            if (value == 0) {
                result.push(value);
            }
            else if (value > 0){
                result.push(value);
            }
            else{
                for (let j = 0; j < result.length; j++) {
                    
                }
            }
        }
    }
    
}

export {Sum, Multiply};
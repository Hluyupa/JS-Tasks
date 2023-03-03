import { Product } from "./Product";

let Products = [
    new Product("Помидор", 20, 10, "Красный"),
    new Product("Огурец", 30, 5, "Зелёный"),
    new Product("Яблоко", 15, 20, "Вкусное"),
];

let conditionSymbols = ["<", ">", "="];

let result = [];

GetProduct("description-ends-й&price->=2&quantity->=5");

function GetProduct(paramsRow){
    result = Products;
    let splittedParams = SplitRow(paramsRow, "&");
    for (let param of splittedParams) {
        let splittedCondition = SplitRow(param, "-");
        splittedCondition[0] = splittedCondition[0][0].toUpperCase() + splittedCondition[0].slice(1, splittedCondition[0].length);

        if(splittedCondition.length == 2){
            let temp = splittedCondition[1];
            if (temp.includes(">=") || temp.includes("<=")) {
                splittedCondition[1]=temp.slice(0, 2);
                splittedCondition.push(temp.slice(2, temp.length));
            }
            else {
                splittedCondition[1]=temp.slice(0, 1);
                splittedCondition.push(temp.slice(1, temp.length));
            }
        }

        if (result.length != 0) {
            switch (splittedCondition[1]) {
                case "contains":   
                    SearchEvent((index)=>{
                        if(!result[index][splittedCondition[0]].includes(splittedCondition[2])){
                            result.splice(index, 1);
                        }
                    });
                    break;
                case "starts":   
                    SearchEvent((index)=>{
                        if(!result[index][splittedCondition[0]].startsWith(splittedCondition[2])){
                            result.splice(index, 1);
                        }
                    });
                    break;
                case "ends":
                    SearchEvent((index)=>{
                        if(!result[index][splittedCondition[0]].endsWith(splittedCondition[2])){
                            result.splice(index, 1);
                        }
                    });     
                    break;
                case "=":     
                    SearchEvent((index)=>{
                        if(result[index][splittedCondition[0]] == Number(splittedCondition[2])){
                            
                        }
                        else{
                            result.splice(index, 1);
                        }
                    });   
                    break;
                case "<":  
                    SearchEvent((index)=>{
                        if(result[index][splittedCondition[0]] < Number(splittedCondition[2])){
                            
                        }
                        else{
                            result.splice(index, 1);
                        }
                    });     
                    break;
                case ">":   
                    SearchEvent((index)=>{
                        if(result[index][splittedCondition[0]] > Number(splittedCondition[2])){
                            
                        }
                        else{
                            result.splice(index, 1);
                        }
                    });       
                    break;
                case "<=": 
                    SearchEvent((index)=>{
                        if(result[index][splittedCondition[0]] <= Number(splittedCondition[2])){
                            
                        }
                        else{
                            result.splice(index, 1);
                        }
                    });         
                    break;
                case ">=":
                    SearchEvent((index)=>{
                        if(result[index][splittedCondition[0]] >= Number(splittedCondition[2])){
                            
                        }
                        else{
                            result.splice(index, 1);
                        }
                    });          
                    break;
                default:
                    break;
            }
        }
    }
}

function SplitRow(str, char){
    let rows = [];
    let startPosition = 0;
    let endPosition = 0;
    while(true){
        if((endPosition = str.indexOf(char, startPosition)) != -1){
            rows.push(str.slice(startPosition, endPosition));
            startPosition = endPosition + 1;
        }
        else{
            if (startPosition != str.length) {
                rows.push(str.slice(startPosition, str.length));
            }
            break;
        }

    }
    return rows;
}

function SearchEvent(searchHandler){
    for (let i = 0; i < result.length; i++) {
        searchHandler(i);
    }
}

export {GetProduct};
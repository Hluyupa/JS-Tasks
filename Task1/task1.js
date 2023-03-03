const punctuationMarks = [
    "!", 
    "\"",
    "\'", 
    ";",
    ":",
    "?",
    ",",
    ".",
    "(",
    ")",
];
//Задание 1.1
function FirstLetterUp(row){
    return row.toLowerCase()[0].toUpperCase() + row.slice(1);
}

//Задание 1.2
function ConvertToCorrectRow(row){
    let position = 0;
    let markPosition = 0;
    for (let mark of punctuationMarks) {
        while(true){
            if((markPosition = row.indexOf(mark, markPosition)) != -1){
                do{
                    if(row[markPosition - 1] == " "){
                        row = row.slice(0, markPosition - 1) + row.slice(markPosition, row.length); 
                        markPosition--;
                    }
                    else{
                        break;
                    }
                }while(true)
                if(row[markPosition + 1] != " " && markPosition < row.length - 1){
                    row = row.slice(0, markPosition + 1) + " " + row.slice(markPosition + 1, row.length); 
                }
                markPosition++;
            }
            else{
                break;
            }
        }
    }
    
    while(true){
        if((position = row.indexOf(" ", position)) != -1){
            if(row[position + 1] == " "){
                row = row.slice(0, position) + row.slice(position + 1, row.length); 
                position--;
            }
            position++
        }
        else{
            break;
        }
    }
    return row;
}

//Задание 1.3
function CountWordsInRow(row){
    let countWord = 0;
    let position = 0;
    while(true){
        if((position = row.indexOf(" ", position)) != -1){
            if(row[position + 1] != " "){
                if(row[position - 1] == " " && countWord==0){
                    position += 1;
                    countWord++;
                    continue;
                }
                position += 1;
                countWord++;
            }
            else if(row[position + 1] == " "){
                position += 1;
            }
        }
        else{
            break;
        }
    }
    return countWord;
}

//Задание 1.4
function CountEachWordInRow(row){
    row = row.toLowerCase();
    let words = new Map();
    let startWordIndex = 0;
    let endWordIndex = 0;
    while(true){
        if((endWordIndex = row.indexOf(" ", startWordIndex)) != -1){
            checkWords(words, deletePunctuationMarks(row.slice(startWordIndex, endWordIndex)));
            startWordIndex = endWordIndex + 1;
        }
        else{
            if(startWordIndex < row.length){
                checkWords(words, deletePunctuationMarks(row.slice(startWordIndex, row.length)));
            }
            break;
        }
    }
    return words;
}

function checkWords(words, word){
    if (words.has(word)) {
        let count = words.get(word)+1;
        words.set(word,  count);
    }
    else{
        words.set(word,  1);
    }
}

function deletePunctuationMarks(str){
    let markPosition = 0;
    for (let mark of punctuationMarks) {
        if((markPosition = str.indexOf(mark, 0)) != -1){
            str = str.slice(0, markPosition) + str.slice(markPosition + 1, str.length);
        }
    }
    return str
}

export {FirstLetterUp, ConvertToCorrectRow, CountWordsInRow, CountEachWordInRow};
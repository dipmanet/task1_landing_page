

function findWords(number, words){
    let passedWords = [];
    for (i=1; i<=words.length; i++ ){
        const word = words[i-1];
        let pass="";
        for (j=1; j<=word.length; j++ ){
            a = word.charCodeAt(j-1);
            b = ~~((a - 97) / 3) + 2;
            b = b==10?0:b;
            pass = pass.concat(b.toString());
            console.log(a,b,pass);
        }
        if ( number.indexOf(pass) >= 0){
            passedWords.push(word);
        }
        console.log(pass, passedWords);
    }
    return passedWords;
}
const try1 = findWords("2345",["bay","behgg","ae"]);
console.log(try1);


function nokianumber(word){
    let pass="";
    for (j=1; j<=word.length; j++ ){
        a = word.charCodeAt(j-1);
        b = ~~((a - 97) / 3) + 2;
        b = b>9?0:b;
        pass = pass.concat(b.toString());
        console.log(a,b,pass);
    }

}
// nokianumber("dipesh");
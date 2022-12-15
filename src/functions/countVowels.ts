
//this function receives a text and returns the number of vowels inside the text
export default function countVowels(text:string, numberOfVowels:number):boolean {
    const vowels: Array<string> = ["a", "e", "i", "o", "u"]
    let vowelsCount:number = 0;
    let i;
    for(i = 0; i < text.length; i++){
        if(vowels.indexOf(text[i].toLowerCase()) != -1){
            vowelsCount++
        }
    }
    if(vowelsCount === numberOfVowels){
        return true;
    }else{
        return false;
    }
}
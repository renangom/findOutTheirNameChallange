import countVowels from "./countVowels";

//usually the number of vowels is the number of 
export default function numberOfSyllabes(text:string):number{
    const vowels: Array<string> = ["a", "e", "i", "o", "u"]
    let vowelsCount:number = 0;
    let i;
    for(i = 0; i < text.length; i++){
        if(vowels.indexOf(text[i].toLowerCase()) != -1){
            vowelsCount++
        }
    }
    return vowelsCount;
}
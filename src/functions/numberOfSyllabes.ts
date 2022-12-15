import countVowels from "./countVowels";

//usually the number of vowels is the number of 
//this function was made for brazilian words
export default function numberOfSyllabes(text:string, numberOfSyllabes:number):boolean{
    const vowels: Array<string> = ["a", "e", "i", "o", "u"]
    let syllabeCount:number = 0;
    let i;
    for(i = 0; i < text.length; i++){
        if(vowels.indexOf(text[i].toLowerCase()) != -1){
            syllabeCount++
        }
    }
    if(syllabeCount === numberOfSyllabes){
        return true;
    }else{
        return false;
    }
}
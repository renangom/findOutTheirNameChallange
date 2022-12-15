import containsString from "./containsStringFunction";
import countVowels from "./countVowels";
import numberOfSyllabes from "./numberOfSyllabes";
import startsWith from "./startsWithFunction";

//This function receives an array of names e returns an array with the names that has cetain properties
export default function findName(names:Array<string>, contains: string, starts:string, numSyllabes:number, numVowels:number) : Array<string> {
    return names.filter((name) => startsWith(name, starts) && numberOfSyllabes(name, numSyllabes) && countVowels(name, numVowels) && containsString(name, contains))
}
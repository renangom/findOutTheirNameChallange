

export default function containsString(text:string, contains:string):boolean {
    if(text.toLowerCase().includes(contains)){
        return true;
    }else{
        return false;
    }
}
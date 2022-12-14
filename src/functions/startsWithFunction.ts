//Here I gonna create the function responsible for return if a name begins with some word or syllabe

export default function startsWith(text:string, begins:string):boolean {

    if(text.slice(0, begins.length).toLowerCase() === begins.toLowerCase()){
        return true
    }

    return false;
}
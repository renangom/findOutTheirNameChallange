import { Request, Response, Router } from "express";
import multer from "multer";
import { Readable } from "stream";
import readline from 'readline';
import findName from "./functions/findNameFunction";
import fs from 'fs'
import checkingBody from "./middleWares/checkingBody";

export const routes = Router()
const multerConfig = multer();

let names:Array<string> = [];
//multer works as a middleware
routes.post("/names", multerConfig.single('file') , async (req:Request, res:Response) => {

    const {includes, beginsWith, vowels, syllabe} = req.body;
    console.log(includes, beginsWith, vowels, syllabe)
    const buffer = req.file?.buffer

    //here we got the file
    const readableFile = new Readable();
    readableFile.push(buffer);
    readableFile.push(null);

    //now I want to read this file line by line
    const namesLine = readline.createInterface({
        input: readableFile
    })


    for await (let line of namesLine) {
        const nameSplit = line.split(`"`)
        names.push(nameSplit[1].toString())
    }
    let namesFounded: Array<string> = []

    namesFounded = findName(names, includes, beginsWith, Number(vowels), Number(syllabe))

    if(names.length === 0){
        res.json("There are no names with this parameters")
    }else if(names.length === 1){
        res.json("Here it is my friend " + namesFounded )
    }else {
        res.json("The possible names are " + namesFounded)
    }
})

routes.post("/names2",checkingBody, (req:Request, res:Response) => {
    //variable
    const includes:string =  req.body.includes;
    const beginsWith:string = req.body.beginsWith;
    const vowels:number = Number(req.body.vowels);
    const syllabes:number = Number(req.body.syllabes);

   
    let namesArray: Array<string> = []

    //create a read stream
    const stream = fs.createReadStream(__dirname + "/data/ibge-fem-10000.csv")
    const stream2 = fs.createReadStream(__dirname + "/data/ibge-mas-10000.csv")
    const rl = readline.createInterface({
        input: stream
    })
    const rl2 = readline.createInterface({
        input: stream2
    })

    //reading
    rl.on("line", (row) => {
        namesArray.push(row.split(`"`)[1])
    });
    rl.on("close", () => {
        let namesFounded: Array<string> = []
        namesFounded = findName(namesArray, includes, beginsWith, vowels,syllabes);
        if(namesArray.length === 0){
            res.json("There are no names with this parameters")
        }else if(namesArray.length === 1){
            res.json("Here it is my friend " + namesFounded )
        }else {
            res.json("The possible names are " + namesFounded)
        }
    })
    rl2.on("line", (row) => {
        namesArray.push(row.split(`"`)[1])
    });


})

export default names
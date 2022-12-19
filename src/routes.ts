import { Request, Response, Router } from "express";
import readline from 'readline';
import findName from "./functions/findNameFunction";
import fs from 'fs'
import checkingBody from "./middleWares/checkingBody";

export const routes = Router()

let names:Array<string> = [];
routes.post("/names",checkingBody, (req:Request, res:Response) => {
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
import { NextFunction, Request, Response } from "express";

export default function(req:Request, res:Response, next:NextFunction){
    const includes:string =  req.body.includes;
    const beginsWith:string = req.body.beginsWith;
    const vowels:number = Number(req.body.vowels);
    const syllables:number = Number(req.body.syllables);

    if(!includes || !beginsWith || !vowels || !syllables){
        res.status(400).json("You forgot to send something")
    }
    if(typeof(includes) !== "string" || typeof(beginsWith) !== "string" || typeof(vowels) !== "number" || typeof(syllables) !== "number"){
        res.status(400).json("There is something wrong, includes and beginsWith must be a string and vowels and syllabes must be a number")
    }

    next();
}
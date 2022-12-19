# findOutTheirNameChallange

## What was made ?
I created an API, where you can send through post method hints about a name and it returns all the names that match the hints

## How to run the API? 
- To run the api, just clone the repository and inside the project using your terminal use the command "npm install"
- After installing all the dependencies use the command "npm run start" and the API will work

## Body of post method
- The post method must be send to "http://localhost:3000/names"
- The body of the post method must contain the following properties:
-- "includes" as a string representing some letters that are inside the name
-- "begins with" as a string representing some letters the name begins 
-- "vowels" as a number representing the number of vowels inside the name
-- "syllables" as the number representing the number syllables inside the name

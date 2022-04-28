import axios from "axios";
import {load} from "cheerio";


// URL of the page we want to scrape
// const url = "https://www.dreamcancel.com/wiki/index.php/The_King_of_Fighters_XV/Omega_Rugal/Data";
const url = "https://www.dreamcancel.com/wiki/index.php/The_King_of_Fighters_XV";


// Query Selectors 
// document.querySelectorAll('#mw-content-text > div.mw-parser-output > table.noprint.toccolours > tbody > tr:nth-child(3) > td:nth-child(2) > ul > li > div > div.thumb > div > a > img')
async function getCharacters(): Promise<string[]> {

    const selector : string = '#mw-content-text > div.mw-parser-output > table.noprint.toccolours > tbody > tr:nth-child(3) > td:nth-child(2) > ul > li > div > div.thumb > div > a'

    try {

        const { data } = await axios.get(url)
        const $ = load(data)

        // Let's make an empty array to hold our character strings
        const characterTags : string[] = []

        // Use cheerio to select all the characters on the homepage, loop through them and push them to our characterTags array
        $(selector)
        .each((i, e) =>{
            characterTags.push($(e).attr('href'))
         })

        if (characterTags.length < 40) {
            throw new Error("Made a request, but couldn't actually scrape the characters")
        }    
        return characterTags
        
    } catch (error) {
        console.error(error)
    }
}

// // Async function which scrapes the data
// async function scrapeData() {
//   try {
//     // Fetch HTML of the page we want to scrape
//     const { data } = await axios.get(url);
//     // Load HTML we fetched in the previous line
//     const $ = cheerio.load(data);
//     // Select all the list items in plainlist class
//     const listItems = $("#\{\{\{\{input\}\}\}\}");
//     // Stores data for all countries
//     // const countries = [];

//     console.log(listItems)
// //     // Use .each method to loop through the li we selected
// //     listItems.each((idx, el) => {
// //       // Object holding data for each country/jurisdiction
// //       const country = { name: "", iso3: "" };
// //       // Select the text content of a and span elements
// //       // Store the textcontent in the above object
// //       country.name = $(el).children("a").text();
// //       country.iso3 = $(el).children("span").text();
// //       // Populate countries array with country data
// //       countries.push(country);
// //     });
// //     // Logs countries array to the console
// //     console.dir(countries);
// //     // Write countries array in countries.json file
// //     fs.writeFile("coutries.json", JSON.stringify(countries, null, 2), (err) => {
// //       if (err) {
// //         console.error(err);
// //         return;
// //       }
// //       console.log("Successfully written data to file");
// //     });
//   } catch (err) {
//     console.error(err);
//   }
// }

getCharacters()
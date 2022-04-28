"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
// URL of the page we want to scrape
// const url = "https://www.dreamcancel.com/wiki/index.php/The_King_of_Fighters_XV/Omega_Rugal/Data";
var url = "https://www.dreamcancel.com/wiki/index.php/The_King_of_Fighters_XV";
// Query Selectors 
// document.querySelectorAll('#mw-content-text > div.mw-parser-output > table.noprint.toccolours > tbody > tr:nth-child(3) > td:nth-child(2) > ul > li > div > div.thumb > div > a > img')
function getCharacters() {
    return __awaiter(this, void 0, void 0, function () {
        var selector, data, $_1, characterTags_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    selector = '#mw-content-text > div.mw-parser-output > table.noprint.toccolours > tbody > tr:nth-child(3) > td:nth-child(2) > ul > li > div > div.thumb > div > a';
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url)];
                case 2:
                    data = (_a.sent()).data;
                    $_1 = (0, cheerio_1.load)(data);
                    characterTags_1 = [];
                    $_1(selector)
                        .each(function (i, e) {
                        characterTags_1.push($_1(e).attr('href'));
                    });
                    if (characterTags_1.length < 40) {
                        throw new Error("Made a request, but couldn't actually scrape the characters");
                    }
                    return [2 /*return*/, characterTags_1];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
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
getCharacters();

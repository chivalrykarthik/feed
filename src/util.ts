import { FUNCTION_WORDS } from "./constant";

export const removeFunctionWords= (text:string):Array<string>=> {
  if(!text) return [];
  // Define a set of common function words in English
  const functionWords = new Set(FUNCTION_WORDS);

  const textWithoutPunctuation = text.replace(/[^a-z\s]/gi, "").toLowerCase();

  // Split the text into lowercase words
  const words = textWithoutPunctuation.toLowerCase().split(' ');
  // Filter out the function words
  const contentWords = words.filter(word => !functionWords.has(word) && word.length>1);
  // Join the content words back into a string
  return contentWords;
}

export const processResults = (contents:Array<any>):Array<any>=>{
    const maxLen = Math.max(...contents.map((c:any)=>c.length))
    const contentLen = contents.length;
    let results = [];
    let titles = [];
    for(let i = 0; i<maxLen;i++){
        for(let j = 0;j<contentLen;j++ ){
          if(contents[j][i]){
            titles.push(removeFunctionWords(contents[j][i]?.data?.title))
            results.push(contents[j][i])
          }
        }
      }
      return [results,titles];
}

export const calculateTimeDifference = (unixTimestamp:number) => {
  // Create a new Date object for the current time
  const now = new Date();

  // Create a new Date object from the Unix timestamp
  // Unix timestamp is in seconds, JavaScript Date object constructor expects milliseconds, hence the multiplication by 1000
  const givenDate = new Date(unixTimestamp * 1000);

  // Calculate the difference in milliseconds
  let difference = Math.abs(now.getTime() - givenDate.getTime());

  // Convert the difference to the appropriate unit (days, hours, or minutes)
  let result;
  let title;
  if (difference >= 1000 * 60 * 60 * 24) {
      // Convert to days
      result = Math.floor(difference / (1000 * 60 * 60 * 24));
      title =  "day";
  } else if (difference >= 1000 * 60 * 60) {
      // Convert to hours
      result = Math.floor(difference / (1000 * 60 * 60));
      title =  "hour";
  } else {
      // Convert to minutes
      result = Math.floor(difference / (1000 * 60));
      title =  "minute";
  }
  const diff = result;
  const period = `${title}${result>1?'s':''}`

  return {
    diff,period
  }
}



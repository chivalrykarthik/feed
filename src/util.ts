export const processResults = (contents:Array<any>):Array<any>=>{
    const maxLen = Math.max(...contents.map((c:any)=>c.length))
    const contentLen = contents.length;
    let results = [];
    for(let i = 0; i<maxLen;i++){
        for(let j = 0;j<contentLen;j++ ){
          if(contents[j][i]){
            results.push(contents[j][i])
          }
        }
      }
      return results;
}
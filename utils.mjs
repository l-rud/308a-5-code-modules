export function flattenArr( arr, result = [] ) {
    for( let item of arr ) {
      if( Array.isArray(item) ) {
        flattenArr( item, result ) 
      } else {
        result.push( item )
      }
    }
    return result
  }
  
  export function uniqueChar(str) {
    // Use a regex pattern to match unique characters
    let unique = str.match(/(.)(?!\1)/g);
  
    return unique;
  }
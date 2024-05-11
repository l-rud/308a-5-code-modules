export default flattenArr

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
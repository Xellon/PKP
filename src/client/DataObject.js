//@ts-check

/**
 * JSON response data object
 * @typedef {Object} DataObject
 * @property {string[]} valueNames Axes names and additional properties
 * @property {[[]]} values Axis values
 */
var DataObject = (()=>{  
    return {
        valueNames: [],
        values: [[]]
    };
  })();
  
  export default DataObject;
'use strict';
module.exports = function() {

  var theVault = {
  };

  function setValue(key, value){
      theVault[key] = value;
      return theVault;
    }

  function getValue(key){
      if(theVault.hasOwnProperty(key)){
        return theVault[key];
      } else {
        return null;
      }
    }

  return{
    setValue: setValue,
    getValue: getValue
  };


};
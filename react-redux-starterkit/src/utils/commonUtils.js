export function checkURL(input){
  if(input) {
    var valid = /^(http|https|www):\/\/[^ "]+$/.test(input);
    if(!valid){
      return "http://"+input;
    } else {
      return input;
    }
  }
  return "";
}

export function isEmpty(input){
 return input == null || input == "";
}

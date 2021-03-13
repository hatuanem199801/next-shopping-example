import jsCookie from "js-cookie";

export default function useCookie(key, value) {
  let result = [];

  if (key && !value) {
    const localData = jsCookie.get(key);
    if (localData && localData.length > 0) {
      result = JSON.parse(localData);
    }
  }
  if (key && value) {
    console.log("function 2");
    jsCookie.set(key, JSON.stringify(value));
  }

  return result;
}

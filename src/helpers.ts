import { Verb } from "./constants";

export function shuffleArray(array: Verb[]) {
  let copy = array.slice();

  var j, x, i;

  for (i = copy.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = copy[i - 1];
    copy[i - 1] = copy[j];
    copy[j] = x;
  }

  return copy;
}

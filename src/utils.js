export function randomizeArray(arr) {
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    let temp = Math.floor(Math.random() * i);
    let swap = arr[temp];
    arr[temp] = arr[i];
    arr[i] = swap;
  }

  return arr;
}

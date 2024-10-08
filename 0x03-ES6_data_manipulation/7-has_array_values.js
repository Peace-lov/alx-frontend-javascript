export default function GasValuesFromArray(set, arr) {
  return arr.reduce((prev, curr) => prev && set.has(curr), true);
}
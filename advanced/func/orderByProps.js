export default function orderByProps(obj, sortBy) {
  const ordered = Object.keys(obj).sort().reduce(
    (unordered, key) => {
      unordered[key] = obj[key];
      return unordered;
    },
    {},
  );

  const arr = [];
  sortBy.forEach((item) => {
    arr.push({ key: item, value: obj[item] });
  });

  for (const key in ordered) {
    if (sortBy.find((item) => item === key) === undefined) {
      arr.push({ key, value: obj[key] });
    }
  }

  return arr;
}

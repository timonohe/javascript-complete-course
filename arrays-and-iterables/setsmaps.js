const ids = new Set([1, 2, 3]);
console.log(ids.has(1));
// A Set has unique entries
ids.add(2);
console.log(ids.has(2));
console.log(ids);

for (const entry of ids.entries()) {
  console.log(entry);
}

ids.delete(3);
console.log(ids);
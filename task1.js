export function solution(A) {
  let filtered = [0];

  A.forEach(num => {
    if (num > 0) {
      filtered[num] = true;
    }
  });

  for (let i = 1; i < filtered.length + 1; i++) {
    if (!filtered[i]) {
      return i;
    }
  }
}

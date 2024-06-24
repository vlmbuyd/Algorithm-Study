// 풀이1
function solution(my_string) {
  const arr = [...my_string]
    .map((item) => parseInt(item))
    .filter((item) => item % 1 === 0);
  let answer = 0;
  for (const el of arr) {
    answer += el;
  }
  return answer;
}

// 풀이2
function solution(my_string) {
  const answer = [...my_string]
    .map((item) => parseInt(item))
    .filter((item) => !isNaN(item))
    .reduce((sum, curr) => sum + parseInt(curr), 0);
  return answer;
}

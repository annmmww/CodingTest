function solution(participant, completion) {
    var map = new Map();

    for (let part of participant) {
      map.set(part, map.has(part) ? map.get(part) + 1 : 1);
    }

    for (let part of completion) {
      map.set(part, map.get(part) - 1);
    }

    var answer;

    for (let [key, value] of map) {
      if (map.get(key) === 1) {
        answer = key;
      }
    }
    return answer;
}
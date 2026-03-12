function solution(nums) {
    let map = new Map();
    
    for (let num of nums) {
        map.set(num, map.get(num) ? map.get(num) + 1 : 1);
    }
    var answer = 0;
    for (let m of map) {
        answer++;
    }
    if (answer >= nums.length / 2) {
        answer = nums.length / 2;
    }
    return answer;
}
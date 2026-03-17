function solution(arr)
{
    var answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (answer.length === 0) {
            answer.push(arr[i]);
            continue;
        }
        if (answer[answer.length - 1] === arr[i]) {
            continue;
        }
        answer.push(arr[i]);
    }
    
    return answer;
}
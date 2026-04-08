function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];
    let top = -1;
    for (let i = 0; i < prices.length; i++) {
        if (stack.length === 0) {
            stack.push(i);
            top++;
            continue;
        }
        
        while (prices[stack[top]] > prices[i]) {
            answer[stack[top]] = i - stack[top];
            stack.pop();
            top--;
        }
        
        stack.push(i);
        top++;
    }
    
    for (let i = 0; i < stack.length; i++) {
        answer[stack[i]] = prices.length - 1 - stack[i];
    }
        
    return answer;
}
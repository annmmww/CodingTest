function solution(babbling) {
    var answer = 0;
    
    const words = ["aya", "ye", "woo", "ma"];
    
    for (let bab of babbling) {
        let isAnswer = true;
        let i = 0;
        while(i < bab.length) {
            let isConcluded = false;
            for (let word of words) {
                if (bab.startsWith(word, i)) {
                    isConcluded = true;
                    i += word.length;
                    break;
                }
            }
            if (!isConcluded) {
                isAnswer = false;
                break;
            }
        }
        if (isAnswer) {
            console.log(bab);
            answer++;
        }
    }
    return answer;
}
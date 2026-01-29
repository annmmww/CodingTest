function solution(sides) {
    
    let max = 0;
    for (let i = 0; i < 3; i++) {
        if (sides[max] < sides[i]) {
            max = i;
        }
    }
    
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        if (i === max) {
            continue;
        }
        sum += sides[i];
    }
    if (sides[max] < sum) {
        return 1;
    }
    
    return 2;
}
function solution(bridge_length, maxWeight, truck_weights) {
    let time = 0;
    let nextTruckIndex = 0;
    let currentWeight = 0;

    const bridge = [];
    let head = 0;

    while (nextTruckIndex < truck_weights.length || head < bridge.length) {
        time++;

        // 다리에서 나가는 트럭 처리
        while (head < bridge.length && bridge[head].exitTime === time) {
            currentWeight -= bridge[head].weight;
            head++;
        }

        // 다음 트럭 올릴 수 있으면 올리기
        if (nextTruckIndex < truck_weights.length) {
            const nextWeight = truck_weights[nextTruckIndex];

            if (currentWeight + nextWeight <= maxWeight) {
                currentWeight += nextWeight;
                bridge.push({
                    weight: nextWeight,
                    exitTime: time + bridge_length
                });
                nextTruckIndex++;
            }
        }
    }

    return time;
}
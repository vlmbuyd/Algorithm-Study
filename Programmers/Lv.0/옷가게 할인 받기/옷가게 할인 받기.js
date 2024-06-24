function solution(price) {
    const answer = price >= 500000 ? Math.floor(price * 0.8)
                    : price >= 300000 ? Math.floor(price * 0.9)
                    : price >= 100000 ? Math.floor(price * 0.95) : Math.floor(price);
    return answer;
}
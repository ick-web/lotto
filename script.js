// 버튼이 눌렸을 때, 이벤트가 작동되도록 이벤트리스너를 넣어준 코드입니다.
document.getElementById('generateButton').addEventListener('click', function () {
    let numbers = generateLottoNumbers();  // 버튼이 눌리면 이 함수가 실행이 될 거에요.
    document.getElementById('numbers').textContent = numbers.join(', ');
});


function generateLottoNumbers() {
    /* 여기에 generateLottoNumbers 함수를 완성해주세요. */
    const num = [];
    while (num.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1; //45이하 랜덤숫자 생셩

        if (!num.includes(randomNumber)) {          // 랜덤숫자가 num과 다르면 true 
            num.push(randomNumber);                 // true 일떄 숫자 추가
        }
    }
    return num.sort((a, b) => a - b)            // 오름차순 정렬
    
};

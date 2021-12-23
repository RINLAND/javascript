function calculatePrice(total, tax = 0.1 , tip= 0.05){
    //  tax나 tip에 값을 할당하지 않으면 기본값으로 0.1과 0.05가 쓰인다.
    return total + (tatal * tax) + (total * tip);
}
calculatePrice(100, 0.15); 
// 값이 각각 total, tax에 할당된다.
calculatePrice(100, undefined, 0.15); 
// 값이 total, tip 에 할당된다.

function calculatePrice({total = 0, tax = 0.1 , tip = 0.05,} = {}){
    return total + (total * tax ) + (tatal * tip);
}

const bill = calculatePrice({tip: 0.15, total: 150});

// 3.1 다음 코드에서 arg1과 arg2를 변경하여 첫 번째는 tax를 나타내고 두 번째는 tip값을 나타내게 만들어보자.
// tax에는 기본값 0.1을 지정하고 tip에는 기본값 0.05를 지정하자.
function calculatePrice(total, arg1, arg2 ){
    return total + (total * tax) + (total * tip);
}
calculatePrice(10);

function calculatePrice( {total, tax =0.1, tip =0.05}={}){
    return total + (total * tax) + (total * tip);
}
calculatePrice(10);
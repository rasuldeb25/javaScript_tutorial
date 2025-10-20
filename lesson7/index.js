//Counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabeBtn = document.getElementById("countLabeBtn");
let count =0;

    increaseBtn.onclick = function(){
        count++
        countLabeBtn.textContent = count;
    }
    decreaseBtn.onclick = function(){
        count--
        countLabeBtn.textContent = count;
    }
        resetBtn.onclick = function(){
        count = 0;
        countLabeBtn.textContent = count;
    }
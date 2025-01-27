let count = 0;

document.getElementById("diminuir").onclick = function () {
    count -= 1;
    document.getElementById("countL").innerHTML = count
};

document.getElementById("resetar").onclick = function () {
    count = 0;
    document.getElementById("countL").innerHTML = count
};

document.getElementById("aumentar").onclick = function () {
    count += 1;
    document.getElementById("countL").innerHTML = count
};

document.getElementById("submit").onclick = function () {
    count = parseInt(document.getElementById("input-number").value)
    document.getElementById("countL").innerHTML = count;
};





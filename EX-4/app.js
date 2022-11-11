function Soma(){
    let valor1 = document.getElementById('nota1').value
    let valor2 = document.getElementById('nota1').value
    let valor3 = document.getElementById('nota1').value
    let valor4 = document.getElementById('nota1').value

    let total = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4

    document.getElementById('resposta').innerHTML = total
}
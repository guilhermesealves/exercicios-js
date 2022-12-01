function Soma(){
    let soma = document.getElementById('Dinheiro').value
    let litro = parseFloat(soma / 5)
    let km = parseFloat(litro * 20)
    
    document.getElementById('Litros').innerHTML = litro
    document.getElementById('KM').innerHTML = km


}
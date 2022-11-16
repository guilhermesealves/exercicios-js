function Soma(){
    let valorMetros = document.getElementById('metros').value

    let coverte = parseFloat(valorMetros) * 100

    document.getElementById('total').innerHTML = coverte


}
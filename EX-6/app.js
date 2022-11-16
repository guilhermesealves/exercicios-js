function Soma(){
  let valor1 = document.getElementById('valor').value
  let valor2 = document.getElementById('valor').value
   
  let converter = parseFloat(valor1) * parseFloat(valor2)

  document.getElementById('total').innerHTML = converter
}

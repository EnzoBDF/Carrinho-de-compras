let produtos = document.querySelector("#produtos");
let botao = document.querySelector("#comprar");

botao.addEventListener("click", comprar);
function comprar() {
  let compra = "Produto Comprado\n";
  if (produtos.value == "Pizza") {
    compra += "Produto: " + produtos.value + ",valor: R$35,00";
  } else if (produtos.value == "Hamburguer") {
    compra += "Produto: " + produtos.value + ",valor: R$45,00";
  } else if (produtos.value == "Empada") {
    compra += "Produto: " + produtos.value + ",valor: R$75,00";
  } else {
    compra += "produto não selecionado";
  }
  alert(compra);
}

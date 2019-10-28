// ITERATION 1



function updateSubtotal($product) {

  const price = parseFloat($product.querySelector(".price span").innerText);
  const quantity = $product.querySelector(".quantity input").valueAsNumber;
  const $tableSubtotal = $product.querySelector(".subtotal span");
  const $subtotal = price * quantity;

  $tableSubtotal.innerText = $subtotal; 
 
return $subtotal
 
}


function calculateAll() {
  let $product = document.getElementsByClassName('product');
  let table = document.querySelectorAll(".product");
  let $total = 0;
  for( i = 0; i < table.length; i++) {
    
    $total += updateSubtotal($product) }
  
}

const $calculateTrigger = document.getElementById("calculate");

$calculateTrigger.addEventListener("click", calculateAll);

// ITERATION 4

function addProductRemoveListener($removeButton) {}

// ITERATION 5

function createProduct(event) {
  // ...
}

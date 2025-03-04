function changeColor(color) {
  document.getElementById('color-changing-image').style.filter = `hue-rotate(${getColorRotationValue(color)}deg)`;
}

function getColorRotationValue(color) {
  switch(color) {
    case 'red':
      return 0;
    case 'green':
      return 120;
    case 'blue':
      return 240;
    case 'yellow':
      return 60;
    case 'brown':
      return 30;
    case 'black':
      return 0;
    case 'white':
      return 0; 
    default:
      return 0;
  }
}


const fileInput = document.getElementById('fileInput');

const uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener('click', function() {
    fileInput.click();
});


fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const preview = document.getElementById('preview');
            preview.src = event.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file.');
    }
});


document.addEventListener("DOMContentLoaded", function() {
  // Get references to HTML elements
  const quantityInput = document.getElementById("quantity");
  const pricePerItemSpan = document.getElementById("pricePerItem");
  const totalPriceSpan = document.getElementById("totalPrice");
  
  // Function to update total price based on quantity and price per item
  function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value);
    const pricePerItem = parseFloat(pricePerItemSpan.textContent.replace("$", ""));
    const totalPrice = quantity * pricePerItem;
    totalPriceSpan.textContent = "$" + totalPrice.toFixed(2);
  }
  
  // Update total price when quantity or price per item changes
  quantityInput.addEventListener("input", updateTotalPrice);
  
  // Initial update of total price
  updateTotalPrice();
});


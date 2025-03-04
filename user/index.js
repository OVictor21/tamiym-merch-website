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

     function copyText() {
        var textElement = document.getElementById("textToCopy");

        var range = document.createRange();
        range.selectNode(textElement);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        
        document.execCommand("copy");

        window.getSelection().removeAllRanges();

    
        alert("Copied the text: " + textElement.textContent);
    }

    function copyText() {
        var textElement = document.getElementById("textToCopy-1");

        var range = document.createRange();
        range.selectNode(textElement);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        
        document.execCommand("copy");

        window.getSelection().removeAllRanges();

    
        alert("Copied the text: " + textElement.textContent);
    }
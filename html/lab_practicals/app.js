document.getElementById('fileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var fileURL = URL.createObjectURL(file);
  
    var embedElement = document.createElement('embed');
    embedElement.setAttribute('src', fileURL);
    embedElement.setAttribute('width', '100%');
    embedElement.setAttribute('height', '600px');
  
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.innerHTML = ''; // Clear previous content
    pdfViewer.appendChild(embedElement);
  });
  

  
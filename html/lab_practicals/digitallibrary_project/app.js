function openBook(file) {
    var fileURL = file;
    //var fileURL = URL.createObjectURL(file);
    var embedElement = document.createElement('embed');
    embedElement.setAttribute('src', fileURL);
    embedElement.setAttribute('type', 'application/pdf');
    embedElement.setAttribute('width', '100%');
    embedElement.setAttribute('height', '600px');
  
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.innerHTML = '';
    pdfViewer.appendChild(embedElement);
  }
  
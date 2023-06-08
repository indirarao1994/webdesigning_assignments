document.getElementById('fileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var fileReader = new FileReader();
  
    fileReader.onload = function() {
      var pdfData = new Uint8Array(this.result);
      PDFJS.getDocument({ data: pdfData }).promise.then(function(pdf) {
        renderPDF(pdf);
      });
    };
  
    fileReader.readAsArrayBuffer(file);
  });
  
  function renderPDF(pdf) {
    var container = document.getElementById('pdfViewer');
  
    for (var i = 1; i <= pdf.numPages; i++) {
      pdf.getPage(i).then(function(page) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var viewport = page.getViewport({ scale: 1.5 });
        
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        page.render({
          canvasContext: context,
          viewport: viewport
        });
  
        container.appendChild(canvas);
      });
    }
  }
  
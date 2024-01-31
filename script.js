
let inputFile = document.getElementById('file-ul');
let testInputFile = document.getElementById('file-lg');
let inputContainer = inputFile.parentElement;

// test upload file
inputFile.addEventListener('change', function() {
    if (inputFile.disabled) {
        inputContainer.classList.add('disabled');
    } else {
        inputContainer.classList.remove('disabled');
    }
});
// for the file name on the input

var ro = new ResizeObserver(entries => {
    for (let entry of entries) {
      const fileNameDiv = entry.target.querySelector('.file-name');
      const width = entry.contentRect.width;
      if (fileNameDiv) fileNameDiv.style.maxWidth = ( width -50) + 'px';
    }
  });
  
let containers = document.querySelectorAll('.input-file-container');
  
//listen input file change

function listenInputFileChange(element) {
    element.addEventListener('change', function(e) {
        let fileName = e.target.files[0].name;
        let parentContainer = e.target.parentElement;
        let label = parentContainer.querySelector('.input-label');
        let fileNameDiv = document.createElement('div');
        fileNameDiv.className = 'file-name';
        fileNameDiv.textContent = fileName;
    
        if (parentContainer.classList.contains('input-container-underline')) {
            label.style.transform = 'translateY(-125%)'; 
        } else {
            label.style.display = 'none'
        }
        parentContainer.appendChild(fileNameDiv);
        containers.forEach(container => ro.observe(container));
    });
    
}


listenInputFileChange(testInputFile);
listenInputFileChange(inputFile);

let inputFile = document.getElementById('file-ul');
let testInputFile = document.getElementById('file-lg');
let inputContainer = inputFile.parentElement;


inputFile.addEventListener('change', function() {
    if (inputFile.disabled) {
        inputContainer.classList.add('disabled');
    } else {
        inputContainer.classList.remove('disabled');
    }
});

//listen input file change

function listenInputFileChange(element) {
    element.addEventListener('change', function(e) {
        var fileName = e.target.files[0].name;
        var parentContainer = e.target.parentElement;
        var label = parentContainer.querySelector('.input-label');
        var fileNameDiv = parentContainer.querySelector('.file-name');
    
        if (parentContainer.classList.contains('input-container-underline')) {
            label.style.transform = 'translateY(-125%)'; 
            fileNameDiv.textContent = fileName;
        } else {
            label.textContent = fileName;
        }
    });
    
}

listenInputFileChange(testInputFile);
listenInputFileChange(inputFile);
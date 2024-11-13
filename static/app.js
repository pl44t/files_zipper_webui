document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const filesList = document.getElementById('files-ul');
    filesList.innerHTML = '';

    const files = document.getElementById('file-upload').files;
    for (let i = 0; i < files.length; i++) {
        const li = document.createElement('li');
        li.textContent = files[i].name;
        filesList.appendChild(li);
    }

    const selectedFormat = document.getElementById('zip-format').value;
    
    const zipBtn = document.getElementById('zip-btn');
    zipBtn.innerText = "Zipping..."; 
    zipBtn.disabled = true;

    fetch('/zip-files', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        zipBtn.innerText = "Zip Files";
        zipBtn.disabled = false;
        
        const downloadLink = document.getElementById('download-link');
        downloadLink.style.display = 'block';
        document.getElementById('download-btn').href = data.filepath;
    })
    .catch(error => {
        zipBtn.innerText = "Error";
        zipBtn.disabled = false;
        console.error('Error:', error);
    });
});
document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch('/zip-files', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.filepath) {
            const downloadLink = document.getElementById('download-link');
            const downloadBtn = document.getElementById('download-btn');
            
            // Set the download link's href to the path of the zip file
            downloadBtn.href = data.filepath;
            downloadBtn.style.display = 'inline-block';  // Make the download link visible
        } else {
            alert('There was an error creating the zip file.');
        }
    })
    .catch(error => {
        alert('An error occurred while processing your request.');
        console.error('Error:', error);
    });
});

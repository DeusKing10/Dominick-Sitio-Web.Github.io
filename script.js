document.getElementById('btnFile1').addEventListener('click', function() {
    openFile('Código 01.txt');
});

document.getElementById('btnFile2').addEventListener('click', function() {
    openFile('Código 02.txt');
});

document.getElementById('btnFile3').addEventListener('click', function() {
    openFile('Código 03.txt');
});

function openFile(fileName) {
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Crear un nuevo elemento para mostrar el contenido
            const pre = document.createElement('pre');
            pre.textContent = data;
            document.body.appendChild(pre);
        })
        .catch(error => {
            console.error('Hubo un problema con la petición Fetch:', error);
        });
}

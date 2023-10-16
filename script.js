function generateReport() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const doctor = document.getElementById('doctor').value;
    const remarks = document.getElementById('remarks').value;
    const image = document.getElementById('image').files[0];

    // Vous devez téléverser l'image sur votre serveur et obtenir son URL.

    // Ensuite, vous pouvez utiliser l'API PDFShift pour générer le PDF du rapport.
    // Assurez-vous d'utiliser votre propre clé API PDFShift.
    const pdfShiftApiKey = 'e1477f9c-508b-4a50-8b25-bca3778d7036';

    const pdfShiftEndpoint = 'https://api.pdfshift.io/v2/convert';
    const requestBody = {
        source: '<h1>Rapport Médical</h1>' +
                `<p>Nom du patient: ${name}</p>` +
                `<p>Date: ${date}</p>` +
                `<p>Nom du médecin: ${doctor}</p>` +
                `<p>Remarques: ${remarks}</p>` +
                '<img src="URL_DE_VOTRE_IMAGE" alt="Image" style="max-width: 100%;">',
        css: 'styles.css',
        'page-size': 'Letter',
        'margin-top': '20mm',
        'margin-right': '20mm',
        'margin-bottom': '20mm',
        'margin-left': '20mm'
    };

    fetch(pdfShiftEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(pdfShiftApiKey + ':')
        },
        body: JSON.stringify(requestBody)
    })
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const iframe = document.createElement('iframe');
        iframe.src = url;
        document.getElementById('preview').innerHTML = '';
        document.getElementById('preview').appendChild(iframe);
    })
    .catch(error => console.error('Erreur lors de la génération du rapport: ' + error));
}

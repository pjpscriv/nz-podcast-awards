let fileObj;

fileObj = ({
  link: $('.LBM25IAoFtd0wh7k3EGM.bFtVZZnZgTWjjyzkPA5k.VPnrctjNWVzCtyD7DZAG.PgTMmU2Gn7AESFMYhw4i').src,
	name: $('.encore-text-headline-large.encore-internal-color-text-base').innerText
						 .replaceAll(' ', '').replaceAll('#', '').replaceAll(':', '')
						 .replaceAll('’', '').replaceAll('|', '').replaceAll('.', '')
	           .replaceAll('?', '').replaceAll('-', '').replaceAll('…', '')
})

async function downloadImage(obj) {
  try {
    // Fetch the image
    const response = await fetch(obj.link);
    const blob = await response.blob();
    
    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = `${obj.name}.jpg`;
    
    // Trigger the download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    console.log(`Downloaded ${obj.name}.jpg`);
  } catch (error) {
    console.error('Download failed:', error);
  }
}

// Call the function
downloadImage(fileObj);

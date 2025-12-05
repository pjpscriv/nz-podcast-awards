// Run on : https://stoppress.co.nz/news/new-zealand-podcast-awards-2025-winners-announced/


// let items, names, uniqueNames;

items = document.querySelectorAll('tr td:nth-child(2)');
names = Array.from(items).flatMap(e => {
	const texts = e.innerText.split('\n').filter(i => !!i)
	const namesOnly = texts.map(i => i.split(':')[1]).map(i => i.trim())
	return namesOnly
});
uniqueNames = Array.from(new Set(names))
console.log(uniqueNames)

uniqueNames.forEach(n => {
	const s = n.replaceAll(' ', '')
						 .replaceAll('#', '')
		         .replaceAll(':', '')
	           .replaceAll('’', '')
	           .replaceAll('|', '')
	           .replaceAll('.', '')
	           .replaceAll('?', '')
	           .replaceAll('-', '')
	           .replaceAll('…', '')
	console.log(`const ${s}: Podcast = { name: '${n}' }`)
})

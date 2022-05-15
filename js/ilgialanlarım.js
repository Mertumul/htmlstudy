const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '3e79731d1cmsh05515e441da762fp10fb00jsn90feaa5c9d37'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=the%20walking%20dead', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d;
        list.map((item) => {
            const name =item.l;
            const poster =item.i.imageUrl;
            const movie =`<li><img src="${poster}"> <h2>${name}</h2>></li>`
            document.querySelector('.movies').innerHTML +=movie;


        })
    })
	.catch(err => console.error(err));
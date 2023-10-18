
const getMovies = async () => {
    const url = 'https://it-its.id/api/movies';
    const options = {
        method: 'GET',
    };
    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            for (let index = 0; index < response.length; index++) {
                let outputTitle = '';
                // let outputTitle =+ '<div>';
                const elementTitle = response[index];
                const elementPlot = response[index];
                const optionTitle = document.createElement('h3');
                const optionPlot = document.createElement('p');
                console.log(elementTitle.Title);
                console.log(elementPlot.Plot);
                optionPlot.innerHTML = elementPlot.Plot;
                optionTitle.innerHTML = elementTitle.Title;
                document.getElementById('title').appendChild(optionTitle);
                document.getElementById('plot').appendChild(optionPlot);
                
            }
        })
        .catch(err = console.error(err));
}
getMovies();

// let output = '';
// data.items.map(item => {
//     output += `
//         <h1>${item.title}</h1>
//         <li>
//         <a href="${item.url}">${item.url}</a>
//         </li>
//         `;
      
// })
// document.querySelector('.result').innerHTML = output;

// response.response.forEach(c => {
//     const option = document.createElement('option');
//     option.innerHTML = c.country;
//     document.getElementById('countries').appendChild(option);
// })
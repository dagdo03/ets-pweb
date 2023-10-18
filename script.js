
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
                const elementTitle = response[index];
                const elementPlot = response[index];
                
                // Creating a new card for each index
                const card = document.createElement('div');
                card.classList.add('card', 'container', 'my-3'); // Adding some Bootstrap classes for styling
            
                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');
            
                const optionTitle = document.createElement('h3');
                const optionPlot = document.createElement('p');
            
                optionPlot.innerHTML = elementPlot.Plot;
                optionTitle.innerHTML = elementTitle.Title;
            
                // Appending title and plot to the card body
                cardBody.appendChild(optionTitle);
                cardBody.appendChild(optionPlot);
            
                // Appending card body to the card
                card.appendChild(cardBody);
            
                // Appending the card to the main container
                document.getElementById('card').appendChild(card);
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
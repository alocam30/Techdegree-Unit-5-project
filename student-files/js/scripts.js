

const galleryContainer = document.querySelector('.search-container');
const gallery = document.getElementById('gallery');
let employeeData = [];

//GALLERY CONTAINER
galleryContainer.innerHTML = `
<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
                        </form>
`;

//SEARCH BAR
//source: https://teamtreehouse.com/library/javascript-search/javascript-search
const searchBar = document.getElementById('search-input')
searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    

})



// FETCH is requesting data from the Random User API
fetch('https://randomuser.me/api/')
    .then(response => response.json)
    .then(data => {
        employeeData = data.results
    })
    .then ( () => {
        generateHTML(employeeData);
    })


 // function to generate the received employee data and to modify the DOM
function generateHTML(data) {
    for (let i = 0; i < data.length; i++) {
        const cardDiv = `
        <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src=${data[i].picture.thumbnail} alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last} </h3>
                        <p class="card-text">${data[i].email}</p>
                        <p class="card-text cap">${data[i].location.city}, ${data[i].location.state}</p>
                    </div>
                </div>
        `;
        gallery.insertAdjacentElement('beforehand', cardDiv);
    }
}


//MODAL 




//MODAL BUTTON 
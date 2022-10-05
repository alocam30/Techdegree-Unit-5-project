

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


// FETCH is requesting data from the Random User API
fetch('//https://randomuser.me/api/?results=12')
    .then(response => response.json())
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
        <div class="card c" data-index='${i}'>
                    <div class="card-img-container c">
                        <img class="card-img" src=${data[i].picture.thumbnail} alt="profile picture">
                    </div>
                    <div class="card-info-container c">
                        <h3 id="name" class="card-name cap">${data[i].name.first} ${data[i].name.last} </h3>
                        <p class="card-text">${data[i].email}</p>
                        <p class="card-text cap">${data[i].location.city}, ${data[i].location.state}</p>
                    </div>
                </div>
        `;
        gallery.innerHTML += cardDiv;
    }
}
// //SEARCH BAR 
// //source: https://teamtreehouse.com/library/javascript-search/javascript-search
const searchBar = document.getElementById('search-input')
searchBar.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    let employees = document.querySelectorAll('h3#name');
    employees.forEach(employee => {
        if(employee.textContent.toLowerCase().includes(currentValue)) {
            employee.parentNode.parentNode.style.display = 'block';
        } else {
            employee.parentNode.parentNode.style.display = 'none';
        }
    });
});

                                                                                                                
//MODAL 

const modal = document.querySelector(".modal-container");
const closeBtn = document.getElementById("modal-close-btn");


function displayModal (data) {
    const modalContainer = `
    <div class="modal-container">
                <div class="modal">
                    <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                    <div class="modal-info-container">
                        <img class="modal-img" src=${data.picture.thumbnail} alt="profile picture">
                        <h3 id="name" class="modal-name cap">${data.name.first} ${data.name.last}</h3>
                        <p class="modal-text">${data.email}</p>
                        <p class="modal-text cap">${data.location.city}, ${data.location.state}</p>
                        <hr>
                        <p class="modal-text">${data.cell}</p>
                        <p class="modal-text">${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state}, ${data.location.postCode}</p>
                        <p class="modal-text">${data.dob.date}</p>
                        </div>
                    </div>
                </div>`;

    gallery.insertAdjacentHTML('beforeend', modalContainer);                   

};



gallery.addEventListener('click', e => {
    if (e.target !== gallery && e.target.parentNode.classList.contains('c') ) {
    const card = e.target.closest('.card');
    const index = card.getAttribute('data-index');
        displayModal(employeeData[index]);
    } else if (e.target.classList.contains('modal-close-btn') || e.target.tagName === 'STRONG'){
        gallery.removeChild(gallery.lastElementChild);
    }
});





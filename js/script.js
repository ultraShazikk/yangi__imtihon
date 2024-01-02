const elList = document.querySelector(".kategoriya__list");
const elRenderList = document.querySelector(".films__list");
const elRenderListt = document.querySelector(".films__listt");
const elBrendList = document.querySelector(".brend__list");
const elStoreList = document.querySelector(".store__list");
const elTemplate = document.querySelector("#template__1").content;
const elFilmTemplate = document.querySelector("#film-template").content;
const elFilmTemplatet = document.querySelector("#film-templatet").content;
const elStoreTemplate = document.querySelector("#store__template").content;
const elBrendTemplate = document.querySelector("#brend__template").content;

const elForm = document.querySelector(".header__input")
const elInput = document.querySelector(".header__search")


function Templ(array) {

    array.forEach((pics) => {

        const templateKate = elTemplate.cloneNode(true);

        templateKate.querySelector('.kategoriya__img').src = pics.rasm;
        templateKate.querySelector('.heading').textContent = pics.title;


        elList.appendChild(templateKate);

    })

}

Templ(pics)



// f.i.l.m.s.
function render(array) {

    array.forEach((films) => {

        const filmsGet = elFilmTemplate.cloneNode(true);

        filmsGet.querySelector('.film__image').src = films.poster;
        filmsGet.querySelector('.film__title').textContent = films.title;
        filmsGet.querySelector('.film__overview').textContent = films.overview;
        filmsGet.querySelector('.film__title').textContent = films.release_date;


        elRenderList.appendChild(filmsGet);

    });

};

render(films,)




// f.i.l.m.
function renderr(array) {

    array.forEach((filmjon) => {

        const filmsGet = elFilmTemplatet.cloneNode(true);

        filmsGet.querySelector('.filmjon__image').src = filmjon.poster;
        filmsGet.querySelector('.filmjon__title').textContent = filmjon.title;
        filmsGet.querySelector('.filmjon__overview').textContent = filmjon.overview;
        filmsGet.querySelector('.filmjon__title').textContent = filmjon.release_date;


        elRenderListt.appendChild(filmsGet);

    });

};

renderr(filmjon, elRenderListt) 




// elFilmForm.addEventListener('submit', function (evt) {
//     evt.preventDefault()

//     const searchValue = elfilmsSearchInput.value.trim();


//     //S.E.A.R.CH

//     const regex = new RegExp(searchValue, 'gi');
//     const   elfilmsSearchInput = films.filter((film) => film.title.match(regex))
// })


// // b.r.e.n.d.
function ella(array) {

    array.forEach((brends) => {

        const brendGet = elBrendTemplate.cloneNode(true);

        brendGet.querySelector('.brend__img').src = brends.logo;

        elBrendList.appendChild(brendGet);
    });
};

ella(brends)


// s.t.o.r.e.

function bella(array) {
    array.forEach((store) => {
        const storeGet = elStoreTemplate.cloneNode(true);

        storeGet.querySelector('.store__img').src = store.img;

        elStoreList.appendChild(storeGet);

    });

};

bella(store)

elForm.addEventListener("submit", (evt) => {

    evt.preventDefault()

    const inputValue = elInput.value.trim()

    elRenderListt.innerHTML = null

    const filterTitle = films.filter((film) => film.title.includes(inputValue),);

    const regex = new RegExp(inputValue, 'gi');
    const filterBysearch = filterTitle.filter((film) => film.title.match(regex),);

    renderFilms(filterBysearch, elAboutListt)
    
})



// elFilmForm.addEventListener('submit', function (evt) {
//     evt.preventDefault()

//     const searchValue = elfilmsSearchInput.value.trim();


//     //S.E.A.R.CH

//     const regex = new RegExp(searchValue, 'gi');
//     const filterEdBySearch = filteredByGenre.filter((film) => film.title.match(regex))
// })

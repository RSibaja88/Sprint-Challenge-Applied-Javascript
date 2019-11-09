// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the info data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((info) => {
        info.data.articles['javascript'].forEach((article) => {
            const newArt = artCard(article.headline, article.authorPhoto, article.authorName);
            cardEntry.appendChild(newArt);
        })
        info.data.articles['bootstrap'].forEach((article) => {
            const newArt = artCard(article.headline, article.authorPhoto, article.authorName);
            cardEntry.appendChild(newArt);
        })
        info.data.articles['technology'].forEach((article) => {
            const newArt = artCard(article.headline, article.authorPhoto, article.authorName);
            cardEntry.appendChild(newArt);
        })
        info.data.articles['jquery'].forEach((article) => {
            const newArt = artCard(article.headline, article.authorPhoto, article.authorName);
            cardEntry.appendChild(newArt);
        })
        info.data.articles['node'].forEach((article) => {
            const newArt = artCard(article.headline, article.authorPhoto, article.authorName);
            cardEntry.appendChild(newArt);
        })
        console.log(info.data);
    });


const cardEntry = document.querySelector('.cards-container');

function artCard(headline, imgUrl, authorsName) {
    const cardContainer = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    cardContainer.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    cardContainer.appendChild(headlineDiv);
    cardContainer.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(img);
    authorDiv.appendChild(span);

    headlineDiv.textContent = headline;
    img.src = imgUrl;
    span.textContent = authorsName;

    return cardContainer;
}
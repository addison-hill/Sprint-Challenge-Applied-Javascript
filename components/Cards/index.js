// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
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

const artContainer = document.querySelector('.cards-container');

axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    response.data.articles.javascript.forEach(item => {
        const myJavascript = Article(item);
        artContainer.appendChild(myJavascript);
    })
    response.data.articles.bootstrap.forEach(item => {
        const myBootstrap = Article(item);
        artContainer.appendChild(myBootstrap);
    })
    response.data.articles.technology.forEach(item => {
        const myTechnology = Article(item);
        artContainer.appendChild(myTechnology);
    })
    response.data.articles.jquery.forEach(item => {
        const myJquery = Article(item);
        artContainer.appendChild(myJquery);
    })
    response.data.articles.node.forEach(item => {
        const myNode = Article(item);
        artContainer.appendChild(myNode);
    })
    })

.catch(error => {
    console.log("There was an error", error);
})

function Article(data) {
    // Define new elements
    const newArticle = document.createElement('div');
    const newArticleHeadline = document.createElement('div');
    const newArticleAuthor = document.createElement('div');
    const newArticleImgContainer = document.createElement('div');
    const newArticleImg = document.createElement('img');
    const newArticleFooter = document.createElement('span');


    // const att = document.createAttribute("class");
    // att.value = "img-container";
    // newArticleImgContainer.setAttributeNode(att);


    //Setup structure
    newArticle.appendChild(newArticleHeadline);
    newArticle.appendChild(newArticleAuthor);
    newArticleAuthor.appendChild(newArticleImgContainer);
    newArticleAuthor.appendChild(newArticleImg);
    newArticleAuthor.appendChild(newArticleFooter);
    newArticleImgContainer.appendChild(newArticleImg);

    // Set class names
    newArticle.classList.add('card');
    newArticleHeadline.classList.add('headline');
    newArticleAuthor.classList.add('author');
    newArticleImgContainer.classList.add('img-container');
    newArticleImg.classList.add('img');

    // newArticleImgContainer.setAttributeNode(newArticleImg);

    // Set text content
    newArticleHeadline.textContent = data.headline;
    // newArticleAuthor.textContent = data.authorName;
    newArticleImg.src = data.authorPhoto;
    newArticleFooter.textContent = `By ${data.authorName}`;
    // newArticleImgContainer.setAttributeNode(newArticleImg);
    

    return newArticle
}
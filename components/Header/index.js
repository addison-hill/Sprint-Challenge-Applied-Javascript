// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const container = document.querySelector('.header-container');
container.appendChild(Header());

function Header() {
    //define new elements
    const header = document.createElement('div');
    const headerDate = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const headerTemp = document.createElement('span');

    //Setup Structure
    header.appendChild(headerDate);
    header.appendChild(headerTitle);
    header.appendChild(headerTemp);

    //set class names
    header.classList.add('header');
    header.classList.add('date');
    header.classList.add('temp');

    //set text content
    headerDate.textContent = "March 28, 2019";
    headerTitle.textContent = "Lambda Times";
    headerTemp.textContent = "98°"

    return header
}

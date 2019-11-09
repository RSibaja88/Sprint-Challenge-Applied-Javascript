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

function Header() {
    const theHeader = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1Title = document.createElement('h1');
    const tempSpan = document.createElement('span');

    theHeader.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    dateSpan.textContent = 'SMARCH 28, 2019';
    h1Title.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';

    theHeader.appendChild(dateSpan);
    theHeader.appendChild(h1Title);
    theHeader.appendChild(tempSpan);


    return theHeader;
}

const headEntry = document.querySelector('.header-container');
headEntry.appendChild(Header());
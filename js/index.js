const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//my code 

//options: 
//.innerHTML (navItems.innerHTML)
//navItems.style.borderBottom = "solid 3px blue";
//

let navItems = document.querySelector('nav');


let a = document.getElementsByTagName('a');

//navItems[0].textContent = siteContent["nav"]["nav-item-1"];
//navItems[1].textContent = sitContent["nav"]["nav-item-2"];

//tried this, but it overrides
////navItem1.textContent = siteContent["nav"]["nav-item-1"];
//navItems.textContent = siteContent["nav"]["nav-item-2"];

//console.log(a);

//-----------------------------
//this gets me navigation bar 
//-----------------------------

for(let i = 0 ; i < 6 ; i++){
  let nav_item = 'nav-item-' + (i+1);
  a[i].textContent = siteContent['nav'][nav_item];
}

//----------------------------
//this is my version using indexes
/*
a[0].textContent = siteContent['nav']['nav-item-1'];  
a[1].textContent = siteContent['nav']['nav-item-2'];
a[2].textContent = siteContent['nav']['nav-item-3'];
a[3].textContent = siteContent['nav']['nav-item-4'];
a[4].textContent = siteContent['nav']['nav-item-5'];
a[5].textContent = siteContent['nav']['nav-item-6'];
*/
//----------------------------
    
//console.log(document.getElementsByClassName('cta-text'.all));
//trying to get all the elements in this class to see how many

//----------------------------
//this gets me the cta class elements which contain the header, button and image

//question: is it better to use cta or cta-text?
//----------------------------

let elementsOfCtaClass = document.getElementsByClassName('cta')[0];
console.log(elementsOfCtaClass);

//console.log(mainTitle);
//mainTitle.textContent = siteContent['cta']['h1'];
//mainTitle.innerText = siteContent['cta']['h1'];

let mainTitle = elementsOfCtaClass.getElementsByTagName('h1')[0].innerText = siteContent['cta']['h1'];

//mainTitle.getElementsByClassName('cta-text')[0].innerHTML = siteContent['cta']['h1] will return element with different font
//.innerHTML, .innerText, textContent
//how do I see how many elements are in a class?

let button = elementsOfCtaClass.getElementsByTagName('button')[0].innerText = siteContent['cta']['button'];

//console.log(button);

//let roundImage = elementsOfCtaClass.getElementsById('cta-img');

//-------------------------------------------------------
//example from above
//-------------------------------------------------------

// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

//-------------------------------------------------------

//-------------------------------------------------------
//this gets me the round image
//-------------------------------------------------------

//let roundImage = elementsOfCtaClass.getElementsByTagName('img')[0];              //this will work

//let roundImage = elementsOfCtaClass.getElementById('cta-img');                   //this doesn't work

let roundImage = document.getElementById('cta-img');                               //this works and is what is being implemented

roundImage.setAttribute('src', siteContent['cta']['img-src']);


//--------------------------------------------------------
//this gets me top-content 
//--------------------------------------------------------

let topContent = document.getElementsByClassName('top-content')[0];

let firstTContentTitle = topContent.getElementsByTagName('h4')[0].innerText = siteContent['main-content']['features-h4'];
let firstTContentText = topContent.getElementsByTagName('p')[0].innerText = siteContent['main-content']['features-content'];

let secondTContentTitle = topContent.getElementsByTagName('h4')[1].innerText = siteContent['main-content']['about-h4'];
let secondTContentText = topContent.getElementsByTagName('p')[1].innerText = siteContent['main-content']['about-content'];

//-------------------------------------------------------
//this gets me middle image 
//-------------------------------------------------------

let middleImage = document.getElementsByClassName('middle-img')[0];
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);


//-------------------------------------------------------
//this gets me bottom content
//-------------------------------------------------------

let bottomContent = document.getElementsByClassName('bottom-content')[0];

let firstBContentTitle = bottomContent.getElementsByTagName('h4')[0].innerText = siteContent['main-content']['services-h4'];
let firstBContentText = bottomContent.getElementsByTagName('p')[0].innerText = siteContent['main-content']['services-content'];

let secondBContentTitle = bottomContent.getElementsByTagName('h4')[1].innerText = siteContent['main-content']['product-h4'];
let secondBContentText = bottomContent.getElementsByTagName('p')[1].innerText = siteContent['main-content']['product-content'];

let thirdBContentTitle = bottomContent.getElementsByTagName('h4')[2].innerText = siteContent['main-content']['vision-h4'];
let thirdBContentext = bottomContent.getElementsByTagName('p')[2].innerText = siteContent['main-content']['vision-content'];

//------------------------------------------------------
//this gets me contact information
//------------------------------------------------------

let contact = document.getElementsByClassName('contact')[0];

let firstHeader = contact.getElementsByTagName('h4')[0].innerText = siteContent['contact']['contact-h4'];
let firstP = contact.getElementsByTagName('p')[0].innerText = siteContent['contact']['address'];
let secondP = contact.getElementsByTagName('p')[1].innerText = siteContent['contact']['phone'];
let thirdP = contact.getElementsByTagName('p')[2].innerText = siteContent['contact']['email'];

//------------------------------------------------------
//this gets me copyright
//------------------------------------------------------

let footer = document.getElementsByTagName('footer')[0];

let copyright = footer.getElementsByTagName('p')[0].innerText = siteContent['footer']['copyright'];







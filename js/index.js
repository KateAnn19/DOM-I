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

//let roundImage = elementsOfCtaClass.getElementsByTagName('img')[0];              //this will work

//let roundImage = elementsOfCtaClass.getElementById('cta-img');                   //this doesn't work

let roundImage = document.getElementById('cta-img');                               //this works and is what is being implemented

roundImage.setAttribute('src', siteContent['cta']['img-src']);


//.setAttribute('src', siteContent['cta']['img-src']);


//logo.setAttribute('src', siteContent["nav"]["img-src"])







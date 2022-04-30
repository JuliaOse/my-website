// Adding an event in our page with the submit button
MyForm = document.querySelector('#contactForm');

// console.log(MyForm);

MyForm.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    alert("Form not configured. Reach me via julia.osei@gmail.com");
}

// Changing the background of the LandingPage after a few seconds 
// as soon as someone comes unto the platform.

// setTimeout(function(){}, 2000);

// setTimeout(() => {
//     greet = document.querySelector('.Details');
//     greet.children[0].innerText = 'Hello';
//     document.querySelector('#landingpage').style.background = 'linear-gradient(to right, #eecda3  0%, #ef629f 100%)';
// }, 3000);

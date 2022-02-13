//PAGE 2 - Modal Windows(ADD TO BAG)

//PAGE 5 - Newsletter Submit Form
// Javascript #1 Use event object to display a message typed and enteredin an input field

// User enters full name
let newsLet = document.querySelector('.newsLet');
let pDisplay = document.querySelector('.display');

newsLet.addEventListener('submit', function(e){
  e.preventDefault();
  let user = document.querySelector('.inputName').value;
  pDisplay.innerHTML = '';

  if(user=="" || user==parseInt(user)){
    alert(`You didn't enter a name. Please enter a name again.`);
  }
  else{
    pDisplay.innerHTML = `Woohoo! Thank you ${user} for joining my newsletter!`;
  }
});

// Javascript #2 Use event object to prevent the default use of an "a" tag
let terms = document.querySelector('.terms');
terms.addEventListener('click', function(e){
  e.preventDefault();
  alert('The Terms & Conditions Page is currently unavailable!');
})

//PAGE 6 - To Top Button
//Javascript #3 Use addEventListener to add a scroll event to the window when to hide or show an element
let topIcon = document.querySelector('.toTop');
window.addEventListener('scroll', function(){

  pageTopLoc = window.pageYOffset;
  if (pageTopLoc>700){
    topIcon.style.display = 'block';
  }
  else{
      topIcon.style.display = "none";
  }
});

let loginbtn = document.querySelector('.loginbtn');
let signbtn = document.querySelector('.signupbtn'); // Corrected selector
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let head = document.querySelector('.head');
let Description = document.querySelector('.description')

signbtn.addEventListener('click', () => {
  title.innerHTML = 'SIGNUP';
  loginbtn.classList.add('disable');
  signbtn.classList.remove('disable');
  underline.style.transform = "translateX(35px)"
  head.innerHTML = 'Thanks For Trusting US';
  Description.innerHTML ='Welcome to our website, your ultimate destination for exploration and connection. Dive into a world of curated content, interactive features, and a thriving community. Discover endless possibilities, from insightful articles to engaging discussions. Join'
});
loginbtn.addEventListener('click', () => {
    title.innerHTML = 'USER LOGIN';
    loginbtn.classList.remove('disable');
    signbtn.classList.add('disable');
    underline.style.transform = "translateX(0)"
    head.innerHTML = 'Special Offer For You';
    Description.innerHTML = 'For our valued customers, welcome back to your trusted hub of knowledge and connection. Rediscover familiar favorites and explore exciting new updates tailored just for you. Engage with our community, share your insights, and continue your journey with us. Thank you for being part of our story.'
  });

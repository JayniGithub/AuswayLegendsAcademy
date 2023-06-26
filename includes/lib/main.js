let mobNav = document.getElementById('nav-mov-view');
let closeBtn = document.getElementById('close-id');
let hamBtn = document.getElementById('hamburg-id');

hamBtn.addEventListener('click', function() {
    mobNav.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    mobNav.style.display = 'none';
});
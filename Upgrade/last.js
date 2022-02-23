//let playSound = () => new Audio("audio/click.mp3").play();
document.querySelector(".btn-danger").addEventListener("click",handleClick);
function handleClick(){
  audio=new Audio('audio/click.mp3');
  audio.play();
}
function phoneNumbers(evt) {
  console.log('evt.key = '+evt.key);
  return  /\d/.test(evt.key);
}
let ready = document.getElementById('ready'),
    output = document.getElementById('output');

ready.addEventListener('click', function() {
  output.innerHTML = 'Name '+document.userData.name.value+'<br>'+ 'Phone number: ' + 
                     document.userData.phone.value;
  document.userData.reset();
})
document.addEventListener('keypress', (event) => {
  console.log('submit' + event.key);
});


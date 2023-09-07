let burger = document.getElementById('burger');
let checkbox = document.getElementById('checkbox')
burger.addEventListener('click', function(){
  burger.classList.toggle('open')
  if(burger.classList.contains('open')){
    checkbox.checked = true
  }else{
    checkbox.checked = false
  }
})

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.card .btn').forEach(b=>b.addEventListener('click',()=>console.log('Open:',b.getAttribute('href'))));
});
document.addEventListener('DOMContentLoaded',()=>{
 const overlay=document.getElementById('photoOverlay');
 if(overlay){
  document.querySelectorAll('.gallery img, .profile-card img').forEach(img=>{
    img.addEventListener('click',()=>{
      overlay.querySelector('img').src=img.src;
      overlay.classList.add('visible');
    });
  });
  overlay.addEventListener('click',()=>overlay.classList.remove('visible'));
 }
});
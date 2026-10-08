const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navLinks.classList.toggle('open',open)});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}});
const roles=['Data Analytics','Business Analyst','Product Analyst','Machine Learning'];
const typing=document.getElementById('typing');
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){let role=0;let char=roles[0].length;let deleting=true;function type(){const word=roles[role];if(deleting){char--;typing.textContent=word.slice(0,char);if(char===0){deleting=false;role=(role+1)%roles.length;setTimeout(type,350);return}}else{char++;typing.textContent=roles[role].slice(0,char);if(char===roles[role].length){deleting=true;setTimeout(type,2200);return}}setTimeout(type,deleting?45:85)}setTimeout(type,2500)}
document.getElementById('year').textContent=new Date().getFullYear();
const sections=document.querySelectorAll('main section[id]');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.nav-links a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))}})},{rootMargin:'-15% 0px -65% 0px',threshold:0});sections.forEach(section=>observer.observe(section))}
document.querySelectorAll('[data-lightbox]').forEach(button=>button.addEventListener('click',()=>{const dialog=document.getElementById('image-dialog');const img=button.querySelector('img');dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.querySelector('p').textContent=img.alt;dialog.showModal()}));
const imageDialog=document.getElementById('image-dialog');
if(imageDialog){imageDialog.querySelector('button').addEventListener('click',()=>imageDialog.close());imageDialog.addEventListener('click',event=>{if(event.target===imageDialog){const r=imageDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)imageDialog.close()}})}


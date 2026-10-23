import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/cormorant-garamond/latin-400-italic.css';
import './style.css';
const works = [
 {id:74,name:'Fire & instinct',style:'Color',alt:'Red and gold creature tattoo covering an upper arm'},
 {id:73,name:'In the details',style:'Black & grey',alt:'Black and grey palm trees and coastal scene tattoo'},
 {id:3,name:'American eagle',style:'Black & grey',alt:'Detailed eagle and American flag shoulder tattoo'},
 {id:45,name:'A little life in color',style:'Color',alt:'Pink rose with yellow butterfly tattoo'},
 {id:18,name:'Rose study',style:'Black & grey',alt:'Realistic rose tattoo on the shoulder'},
 {id:29,name:'Ornamental lines',style:'Detail',alt:'Intricate symmetrical ornamental tattoo'},
 {id:4,name:'Wild at heart',style:'Black & grey',alt:'Detailed leopard portrait tattoo'},
 {id:17,name:'A world of color',style:'Color',alt:'Colorful illustrative tattoo with a lantern and flowers'},
 {id:21,name:'Faith in the details',style:'Detail',alt:'Radiant cross tattoo with fine details'},
 {id:70,name:'A different perspective',style:'Black & grey',alt:'Close-up of a detailed face tattoo'},
 {id:10,name:'In flight',style:'Color',alt:'Three colorful butterflies tattoo'},
 {id:16,name:'Drawn from nature',style:'Detail',alt:'Illustrative owl and floral tattoo'}
];
const imagePath = id => `/images/${String(id).padStart(2,'0')}.jpg`;
const gallery=document.querySelector('#gallery');
let filtered=works, current=0;
function render(){gallery.innerHTML=filtered.map((w,i)=>`<button class="portfolio-piece" data-index="${i}" aria-label="View ${w.name}"><span class="portfolio-image"><img src="${imagePath(w.id)}" alt="${w.alt}" width="${w.id>72?540:206}" height="${w.id>72?960:206}" loading="lazy"><span class="image-open" aria-hidden="true"><svg class="arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 13 13 3M3 3h10v10" fill="none" stroke="currentColor" stroke-width="1.2"/></svg></span></span><span class="piece-caption"><span>${w.name}</span><span>${w.style}</span></span></button>`).join('');gallery.querySelectorAll('img').forEach(img=>{const ready=()=>img.parentElement.classList.add('loaded');if(img.complete)ready();else{img.addEventListener('load',ready);img.addEventListener('error',ready);}});}
render();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false');});button.classList.add('active');button.setAttribute('aria-pressed','true');filtered=button.dataset.filter==='All'?works:works.filter(w=>w.style===button.dataset.filter);render();}));
const dialog=document.querySelector('#lightbox');
function showImage(){const w=filtered[current];document.querySelector('#lightbox-image').src=imagePath(w.id);document.querySelector('#lightbox-image').alt=w.alt;document.querySelector('#lightbox-caption').textContent=`${w.name} · ${current+1} / ${filtered.length}`;}
gallery.addEventListener('click',e=>{const b=e.target.closest('[data-index]');if(!b)return;current=Number(b.dataset.index);showImage();dialog.showModal();document.body.classList.add('modal-open');});
function move(delta){current=(current+delta+filtered.length)%filtered.length;showImage();}
document.querySelector('#previous').onclick=()=>move(-1);document.querySelector('#next').onclick=()=>move(1);
document.querySelector('.close-dialog').onclick=()=>dialog.close();dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});dialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')move(-1);if(e.key==='ArrowRight')move(1);});

const menu=document.querySelector('.menu');menu.onclick=()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close':'Menu';document.querySelector('#navigation').classList.toggle('open',open);};document.querySelectorAll('#navigation a').forEach(a=>a.onclick=()=>{menu.setAttribute('aria-expanded','false');menu.textContent='Menu';document.querySelector('#navigation').classList.remove('open');});
document.querySelectorAll('[data-image]').forEach(d=>d.addEventListener('toggle',()=>{if(!d.open)return;document.querySelectorAll('[data-image]').forEach(other=>{if(other!==d)other.open=false;});const img=document.querySelector('#style-image');img.src=imagePath(Number(d.dataset.image));img.alt=d.dataset.alt;}));
document.querySelector('#inquiry').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.target);const body=`Hi Robb,\n\nI'd like to discuss a tattoo.\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nPlacement: ${data.get('placement')}\nStyle: ${data.get('style')}\n\nMy idea:\n${data.get('idea')}\n\nThanks!`;const url=`mailto:tattooedncolor@gmail.com?subject=${encodeURIComponent('Tattoo inquiry from '+data.get('name'))}&body=${encodeURIComponent(body)}`;const status=document.querySelector('#form-status');status.replaceChildren(document.createTextNode('Your email draft is ready. '));const link=document.createElement('a');link.href=url;link.target='_blank';link.rel='noopener';link.textContent='Open your email draft';status.append(link,document.createTextNode(' if your email app did not open. Review your message and press Send in your email app. You can also call (760) 912-0549.'));link.click();});
document.querySelector('#year').textContent=new Date().getFullYear();

const mapFrame=document.querySelector('.live-map iframe');
const mapLabel=document.querySelector('#map-view-label');
const mapButtons=document.querySelectorAll('[data-map-city],[data-map-view]');
mapButtons.forEach(button=>button.addEventListener('click',()=>{
 mapButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 const city=button.dataset.mapCity;
 const studio=button.dataset.mapView==='studio';
 const query=city?`${city}, California, US`:studio?'40555 California Oaks Road Suite 131 Murrieta CA':'Murrieta California';
 const params=new URLSearchParams({q:query,output:'embed',z:city?'12':studio?'16':'10'});
 if(!city&&!studio)params.set('ll','33.61,-117.22');
 mapFrame.src=`https://www.google.com/maps?${params}`;
 mapFrame.title=city?`Google Maps: ${city}, California`:studio?'Google Maps: ThINK Tattoo studio address':'Google Maps: regional view of the five communities served';
 mapLabel.textContent=city?`${city.toUpperCase()}, CA, US · AREA SERVED`:studio?'40555 CALIFORNIA OAKS ROAD · STUDIO':'ALL AREAS · SOUTHWEST RIVERSIDE COUNTY';
 document.querySelector('.live-map>div a').href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}));

const root=document.documentElement,button=document.querySelector('.lang');
function setLanguage(lang){root.dataset.lang=lang;root.lang=lang==='zh'?'zh-CN':'en';document.querySelectorAll('[data-zh][data-en]').forEach(el=>el.textContent=el.dataset[lang]);button.textContent=lang==='zh'?'EN':'中文';button.setAttribute('aria-pressed',String(lang==='en'));localStorage.setItem('az-lang',lang)}
button.addEventListener('click',()=>setLanguage(root.dataset.lang==='zh'?'en':'zh'));
setLanguage(localStorage.getItem('az-lang')||((navigator.language||'').startsWith('zh')?'zh':'en'));
document.getElementById('year').textContent=new Date().getFullYear();


(() => {
  'use strict';
  const config = window.SHILPKAR_CONFIG || {};
  const days = [
    { label: 'DAY 01 · PREPARE', title: 'Begin with intention', text: 'Discover the challenge, understand important precautions, and set an intention for a mindful week.', items: ['Welcome and orientation', 'Health and suitability checklist', 'Personal intention setting'], prompt: 'BEGIN WITH', word: 'intention.' },
    { label: 'DAY 02 · UNDERSTAND', title: 'Learn about hydration', text: 'Explore fluid balance, fasting fundamentals, and what signs mean it is time to seek help.', items: ['Hydration education', 'Fasting benefits and limitations', 'Symptoms and red flags'], prompt: 'FIND YOUR', word: 'balance.' },
    { label: 'DAY 03 · NOTICE', title: 'Listen to your body', text: 'Practice understanding hunger, mood, energy and the difference between mindful awareness and pushing past warning signs.', items: ['Body-awareness check-in', 'Guided breathing', 'Rest and recovery fundamentals'], prompt: 'WELCOME', word: 'awareness.' },
    { label: 'DAY 04 · RESTORE', title: 'Find your calm', text: 'Slow the pace with restorative yoga, relaxation and a supportive approach to everyday wellbeing.', items: ['Gentle yoga practice', 'Meditation and relaxation', 'Sleep and stress reflection'], prompt: 'BREATHE IN', word: 'calm.' },
    { label: 'DAY 05 · LEARN', title: 'Understand the science', text: 'Explore what research says about fasting, where uncertainty remains and why individual needs matter.', items: ['Evidence versus fasting myths', 'Who should avoid fasting', 'Questions for your healthcare professional'], prompt: 'GROW WITH', word: 'wisdom.' },
    { label: 'DAY 06 · PLAN', title: 'Build lasting rituals', text: 'Choose a realistic wellbeing routine and learn why stopping a prolonged fast requires appropriate medical guidance.', items: ['Mindful eating habits', 'Safety and return-to-eating education', 'Personal routine planning'], prompt: 'CREATE', word: 'harmony.' },
    { label: 'DAY 07 · CONTINUE', title: 'Carry the calm forward', text: 'Celebrate what you have learned and build a sustainable plan beyond the seven-day experience.', items: ['Reflect on the experience', 'Create a 30-day habit plan', 'Closing mindful practice'], prompt: 'CARRY FORWARD', word: 'renewal.' },
  ];
  document.querySelectorAll('[data-brand]').forEach(el => el.textContent = config.brandName || 'Shilpkar Dance & Fitness Center');
  document.querySelectorAll('[data-brand-short]').forEach(el => el.textContent = config.shortName || 'Shilpkar');
  document.getElementById('year').textContent = String(new Date().getFullYear());
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }));
  let currentDay = 0;
  const dayTabs = [...document.querySelectorAll('.day-tab')];
  const panel = document.getElementById('day-panel');
  function renderDay(index, focus = false) {
    currentDay = (index + days.length) % days.length;
    const d = days[currentDay];
    panel.classList.remove('day-enter');
    void panel.offsetWidth;
    document.getElementById('day-label').textContent = d.label;
    document.getElementById('day-title').textContent = d.title;
    document.getElementById('day-description').textContent = d.text;
    document.getElementById('art-prompt').textContent = d.prompt;
    document.getElementById('art-word').textContent = d.word;
    document.getElementById('art-day').innerHTML = String(currentDay + 1).padStart(2,'0') + '<span>/07</span>';
    document.getElementById('day-activities').replaceChildren(...d.items.map(item => { const li = document.createElement('li'); li.textContent = item; return li; }));
    dayTabs.forEach((tab,i) => { tab.setAttribute('aria-selected',String(i === currentDay)); tab.classList.toggle('is-active',i === currentDay); tab.tabIndex = i === currentDay ? 0 : -1; });
    panel.setAttribute('aria-labelledby','tab-' + currentDay);
    panel.classList.add('day-enter');
    if (focus) dayTabs[currentDay].focus();
  }
  dayTabs.forEach((tab,index) => {
    tab.tabIndex = index === 0 ? 0 : -1;
    tab.addEventListener('click',() => renderDay(index));
    tab.addEventListener('keydown',(event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'Home' || event.key === 'End') {
        event.preventDefault();
        renderDay(event.key === 'Home' ? 0 : event.key === 'End' ? 6 : currentDay + (event.key === 'ArrowRight' ? 1 : -1), true);
      }
    });
  });
  document.getElementById('prev-day').addEventListener('click', () => renderDay(currentDay-1));
  document.getElementById('next-day').addEventListener('click', () => renderDay(currentDay+1));
  const toast = document.getElementById('toast');
  function showToast(message) {
    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add('visible');
  }
  function paymentUrl() {
    const url = String(config.paymentPageUrl || '').trim();
    try { const target = new URL(url); return target.protocol === 'https:' ? target.href : null; }
    catch (_) { return null; }
  }
  document.getElementById('pay-now').addEventListener('click', () => {
    const url = paymentUrl();
    if (url) window.location.assign(url);
    else showToast('Payment checkout is not connected yet. Add your secure ₹99 payment link in config.js.');
  });
  const observer = 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ? new IntersectionObserver(entries => entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
      }), { threshold: .1 }) : null;
  document.querySelectorAll('.observe').forEach(el => { if (observer) observer.observe(el); else el.classList.add('in-view'); });
})();

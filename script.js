// BURGER MENU TOGGLE
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// SKILLS ANIMATION
const skills = document.querySelectorAll('.skill');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;

    if(skillTop < triggerBottom){
      const percent = skill.querySelector('span').innerText;
      skill.querySelector('::after');
      skill.style.setProperty('--width', percent);
      skill.querySelector('::after');
      skill.style.setProperty('width', percent);
      skill.querySelector('::after').style.width = percent;
      skill.querySelector('::after').style.width = percent;
      skill.querySelector('::after').style.transition = 'width 1s ease';
      skill.querySelector('::after').style.background = '#ff3366';
      skill.querySelector('::after').style.borderRadius = '25px';
      skill.querySelector('::after').style.height = '100%';
      skill.querySelector('::after').style.position = 'absolute';
    }
  });
});

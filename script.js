'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //Proress Bar during scrolling

  {
    const about_btn = document.querySelector("#about");
    const course_btn = document.querySelector('#course');
    const price = document.querySelector('#prices');
    const body = document.querySelector('body');

    const about_scroll = (e) => {
      window.scrollTo({
        top: '1144',
        behavior: 'smooth'
      });
      e.preventDefault();
    }
    const course_scroll = (e) => {
      window.scrollTo({
        top: '1544',
        behavior: 'smooth'
      });
      e.preventDefault();
    }
    const body_event = (e) => {
      e.className = '';
      e.style.paddingRight = '0';
    }
    const progress = document.querySelector('.progressbar');

    const progressBar = () => {
      let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let per = windowScroll / windowHeight * 100;
      progress.style({
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'height': '4px',
        'background': 'tomato'
      });
      progress.style.width = per + '%';
    }
    window.addEventListener('scroll', progressBar);
    body.addEventListener('click', body_event);
    about_btn.addEventListener('click', about_scroll);
    course_btn.addEventListener('click', course_scroll);


  }




})
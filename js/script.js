'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //Proress Bar during scrolling
  {
    const progress = document.querySelector('.progressbar');

    const progressBar = () => {
      let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      let per = windowScroll / windowHeight * 100;
      progress.style.width = per + '%';
    }
    window.addEventListener('scroll', progressBar);
  }

  {
    const about_btn = document.querySelector("#about");
    const course_btn = document.querySelector('#course');
    const price_modal = document.querySelector('#price-modal');
    const price_btn = document.querySelector('#price-btn');
    const body = document.querySelector('body');
    const contact_btn = document.querySelector('#contact');
    const contact_modal = document.querySelector('#contact-modal');
    const preloader = document.querySelector('#cube-loader');
    const name = document.querySelector('#name');
    const phone = document.querySelector('#phone-number');
    const mail = document.querySelector('#mail');
    const question = document.querySelector('#question');
    const close_price = document.querySelector('#close-price');
    const error = document.querySelector('#error');



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
    const contact_event = () => {
      contact_modal.classList.add('show');
      contact_modal.style.display = 'block';
      body.style.overflow = 'hidden';
      // e.stopImmediatePropagation();
    }

    const sendingData = () => {
      const container = document.querySelector('.container');
      const loader = document.querySelector('svg');
      preloader.style.display = 'flex';
      const succes_message = setTimeout(() => {
        container.style.display = 'block';
        loader.classList.add('animate');
        setTimeout(() => {
          container.style.display = 'none';
          loader.classList.remove('animate');
        }, 2000);
      }, 2500);
    }

    const close_price_event = () => {
      body.classList.remove('modal-open');
    }

    const form_events = (e) => {
      const closeData = e.target.getAttribute('data-action');
      const elemId = e.target.getAttribute('id');
      if (closeData) {
        contact_modal.classList.remove('show');
        contact_modal.style.display = 'none';
        body.style.overflow = 'visible';
      } else if (elemId === 'send-btn') {
        if (name.value === '' || phone.value === '' || mail.value === '' || question.value === '') {
          error.style.display = 'block';
        } else {
          error.style.display = 'none';
          sendingData();
          const timer_to_loader = setTimeout(() => {
            preloader.style.display = 'none';
          }, 2500);
        }
      }

    }

    close_price.addEventListener('click', close_price_event);
    contact_modal.addEventListener('click', form_events);
    contact_btn.addEventListener('click', contact_event);
    about_btn.addEventListener('click', about_scroll);
    course_btn.addEventListener('click', course_scroll);
  }





});
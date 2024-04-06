const elements = {
  box: document.querySelector('.js-box'),
  clickMe: document.querySelector('.js-click'),
  query: document.querySelector('.js-query'),
  form: document.querySelector('.js-form'),
};

// elements.clickMe.addEventListener('click', handlerClick);
// let step = 0;
// function handlerClick() {
//   step += 1;
//   elements.box.style.marginTop = `${step}px`;
//   elements.box.style.marginLeft = `${step}px`;
// }

// elements.query.addEventListener('input', handlerQuerySearch);

// function handlerQuerySearch(evt) {
//   console.dir(evt.currentTarget.value.trim());
// }

// elements.form.addEventListener('submit', handlerSubmit);

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   console.dir(evt.currentTarget);

//   const { comment, email, password } = evt.currentTarget.elements;
//   console.log(comment.value);
//   console.log(email.value);
//   console.log(password.value);
// }

document.addEventListener('keydown', handlerKey);

// function handlerKey(evt) {
//   if (evt.ctrlKey && evt.code === 'KeyC') {
//     evt.preventDefault();
//   }
// }

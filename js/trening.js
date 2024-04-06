// const elements = {
//   box: document.querySelector('.js-box'),
//   clickMe: document.querySelector('.js-click'),
//   query: document.querySelector('.js-query'),
//   form: document.querySelector('.js-form'),
// };

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

// document.addEventListener('keydown', handlerKey);

// function handlerKey(evt) {
//   if (evt.ctrlKey && evt.code === 'KeyC') {
//     evt.preventDefault();
//   }
// }

// фільтер автомобілів

// const vehicles = [
//   {
//     id: 1,
//     car: 'Toyota Camry',
//     type: 'Sedan',
//     price: 25000,
//     img: 'https://scene7.toyota.eu/is/image/toyotaeurope/1-toyota-camry-exterior?wid=1280&fit=fit,1&ts=0&resMode=sharp2&op_usm=1.75,0.3,2,0',
//   },
//   {
//     id: 2,
//     car: 'Ford F-150',
//     type: 'Truck',
//     price: 35000,
//     img: 'https://static.hnonline.sk/images/slike/2023/07/04/o_2166685_1024.jpg',
//   },
//   {
//     id: 3,
//     car: 'Honda Civic',
//     type: 'Compact',
//     price: 20000,
//     img: 'https://dam.nmhmedia.sk/image/48d0d9d7-acfd-4b3d-8126-7c183af10a8d_dam-urlqu1ayl.jpg/960/540',
//   },
//   {
//     id: 4,
//     car: 'Chevrolet Corvette',
//     type: 'Sports',
//     price: 60000,
//     img: 'https://spiatocka.sk/wp-content/uploads/2023/12/Chevrolet-Camaro-.jpg',
//   },
// ];

// const elements = {
//   form: document.querySelector('.js-form'),
//   container: document.querySelector('.js-list'),
// };

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ id, car, type, price, img }) => `<li data-id="${id}">
//         <img src="${img}" alt="${type}" width="300px" heidth="200px"/>
//         <h2>${car}</h2>
//         <h3>${type}</h3>
//         <span>${price}</span>
//       </li>`
//     )
//     .join('');
// }

// elements.container.insertAdjacentHTML('beforeend', createMarkup(vehicles));

// elements.form.addEventListener('submit', handlerSubmit);

// function handlerSubmit(evt) {
//   evt.preventDefault();
//   const { options, query } = evt.currentTarget.elements;
//   const result = vehicles.filter(item =>
//     item[options.value].toLowerCase().includes(query.value.toLowerCase())
//   );

//   elements.container.innerHTML = createMarkup(result);
// }

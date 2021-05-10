/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

document.addEventListener('mousemove', (e) => {});

export function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('draggable-div');

  newDiv.style.background =
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
  newDiv.style.top = Math.floor(Math.random() * 100) + '%';
  newDiv.style.left = Math.floor(Math.random() * 100) + '%';
  newDiv.style.width = Math.floor(Math.random() * 100) + 'px';
  newDiv.style.height = Math.floor(Math.random() * 100) + 'px';
  newDiv.draggable = true;

  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});

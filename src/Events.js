/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', deleteButton);
    document.body.append(btn);
    function deleteButton(e) {
        e.target.remove();
    }
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');

    arr.forEach((element) => {
        let li = document.createElement('li');
        li.textContent = element;
        li.addEventListener('mouseover', (e) => {
            e.target.setAttribute('title', e.target.textContent);
        });
        ul.append(li);
    });
    document.body.prepend(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.textContent = 'tensor';
    a.addEventListener('click', clicker());
    document.body.append(a);
    function clicker() {
        let count = 0;
        return function (e) {
            if (count === 0) {
                e.preventDefault();
                a.textContent = a.textContent + ' ' + a.getAttribute('href');
                count++;
            }
        };
    }
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let button = document.createElement('button');

    li.textContent = 'Пункт';
    button.textContent = 'Добавить пункт';
    ul.append(li);

    ul.addEventListener('click', function (e) {
        e.target.textContent = e.target.textContent + '!';
        e.stopPropagation;
    });
    button.addEventListener('click', function () {
        let li = document.createElement('li');
        li.textContent = 'Пункт';
        ul.append(li);
    });
    document.body.prepend(ul, button);
}

# Домашнее задание к лекции «Синтаксические конструкции»

### **Важные моменты** 

1. Каждая задача выполняется в виде отдельного проекта с собственным GitHub-репозиторием.
2. Код должен проходить ESLint без ошибок (warning допускается).
3. Тесты должны обеспечивать 100-процентное покрытие функций по строкам.
4. Решения должны быть построены на базе [шаблона webpack](/ci-template).

В личном кабинете на сайте [netology.ru](http://netology.ru/) в поле комментария к домашней работе добавьте ссылки на ваши GitHub-проекты.

---

## `try ... catch`

### Легенда

Ошибки могут возникать, нужно просто уметь с ними работать. Ваши коллеги разработали форму, которая принимает от пользователя количество покупаемых единиц товара. Вас же попросили написать функцию-преобразователь. Она возвращает число, если всё хорошо, и генерирует ошибку, если ввод не является числом в десятичной системе счисления.

### Описание

Используйте возможности стандартной библиотеки JS для преобразования строки в число. Не забудьте написать Unit-тесты, которые обеспечивают покрытие всех веток ввода — валидного и невалидного.

---

##  Closures

### Легенда

Есть необходимость реализовать в игре удобный глобальный поиск по всей системе. Для этого решено сделать специальный виджет, который прозводит этот поиск с использованием синтаксиса: `<фраза> by:<prop>`. Пока не рассматривайте сценарий, что поля `<prop>` может не быть в объекте.

### Описание

Массив объектов, по которым вам нужно производить поиск, будет выглядеть следующим образом:
```javascript
[
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
]
```

Реализуйте функцию `findBy`, которая будет возвращать замыкание, позволяющее совершать поиск по нужному полю.

Пример использования:
```javascript
const finder = findBy('name', 'урон');
const results = [
  {name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями'},
  {name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием'},
  {name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса'},
].filter(finder);

console.log(results);
/*
[{
  name: 'урон',
  type: 'help',
  description: 'Страница описания элемента интерфейса'
}]
*/
```

Не забудьте написать Unit-тесты на своё решение.

---

## Closures * (задача со звёздочкой)

**Важно: это необязательная задача.**

### Легенда

В игре вы можете приобрести защитное заклинание для своих персонажей. Оно будет уменьшать наносимый противником урон, распределяя его равномерно по всем вашим персонажам. Когда противник атакует одного из ваших персонажей, из жизни каждого персонажа вычитается равная доля урона.

Важно: если жизнь персонажа дошла до 0, на него больше не распространяется это правило, а делится на оставшихся живых. Если баллы атаки не делятся нацело на количество живых персонажей, то остаток достаётся тому, которого атакуют.

### Описание

Массив ваших персонажей выглядит следующим образом:
```javascript
const characters = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
```

Что нужно сделать: создайте функцию, которая принимает на вход массив персонажей и на выходе возвращает массив из функций, которые и будут заниматься расчётом урона.

Как это должно выглядеть:
```javascript
/**
 * @param items — массив с объектами ваших персонажей;
 * @param shield — включена общая защита или нет. 
 */
function setUpAttacks(items, shield = true) {
  const result = [];
    
  // TODO: ваш код
    
  return result; 
}

const characters = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
]

const attacks = setUpAttacks(characters);

attacks[1](9); // атакуем лучника 9 баллами урона.

console.log(characters)
/*
[
  {name: 'маг', health: 97},
  {name: 'лучник', health: 77},
  {name: 'мечник', health: 7},
]
*/
```

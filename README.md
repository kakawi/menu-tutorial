# menu-tutorial
Тут буду выкладывать код всех менюшек, что сделаю :)

# MENU TOP (Верхнее меню)
## Одноуровневое
### [Example_1](https://jsfiddle.net/kakawi/tqyo82fm/)
Меню сделано на **inline-block**

Итог
* (+) Самый простой способ
* (-) Пробелы между элементами


### [Example_2](https://jsfiddle.net/kakawi/7v4gbfsd/)
Меню сделано на **float:left**

Итог
* (+) Нету пробелов 
* (-) Необходимо добавлять clearfix

## Двухуровневое
### [Example_3](https://github.com/kakawi/menu-tutorial/tree/master/menu_top/example_3)
####[Example_3_1](https://jsfiddle.net/kakawi/Ltydyce6/)
####[Example_3_2](https://jsfiddle.net/kakawi/1syha9a4/)
####[Example_3_3](https://jsfiddle.net/kakawi/putzkkrs/)
Меню сделано на **float:left + display:none**

Итог: рекомендую использовать **display:none**, а для выравнивания подменю
* left: 50%
* position: relative
* z-index:1
* transfrom: translateX(-50%)
* min-width: ....

## Многоуровневое
### [Example_4](https://jsfiddle.net/kakawi/Lb4x5r5z/)
Меню вложенностью >= 3

### [Example_5](https://jsfiddle.net/kakawi/je0fab8u/)
Воспользуеся **flexbox** для 1-го уровня

### [Example_5_2](https://jsfiddle.net/kakawi/f3tbc9o9/)
А сделаемка все уровни меню горизонтальными

### [Example_6](https://jsfiddle.net/kakawi/at593z0b/)
А повторим тоже самое и на **float:left**

Основная особенность замеченная мною: Если использовать **flex**, то меню по горизонтали спокойно выходит *за границы*, а если использовать **float:left**, то ширина для подменю ограничена *размером контейнера*.

Выводы:
* flex позволяет избавиться от clearfix
* но привносит свои особенности с тем от чего считаются left & top и с шириной меню

## Mega Drop Down Menu
### [Example_7](https://jsfiddle.net/kakawi/37avojjy/)
На **flexbox'е**. А почему бы и нет?

### [Example_7_2](http://codepen.io/kakawi/pen/EPLOZK)
Я не удержался. SASS + Susy
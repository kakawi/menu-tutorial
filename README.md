# menu-tutorial
Тут буду выкладывать код всех менюшек, что сделаю :)

# [MENU TOP (Верхнее меню)](https://github.com/kakawi/menu-tutorial/tree/master/menu_top/)
## [Одноуровневое](https://github.com/kakawi/menu-tutorial/tree/master/menu_top/one_level/)
### [Example_1](http://codepen.io/kakawi/pen/adgmzp)
Меню сделано на **inline-block**

Итог
* (+) Простота
* (-) Пробелы между элементами


### [Example_2](http://codepen.io/kakawi/pen/mVZrxv)
Меню сделано на **float:left**

Итог
* (+) Нету пробелов 
* (-) Необходимо добавлять clearfix

### [Example_3](http://codepen.io/kakawi/pen/wMLzjw)
Меню сделано на **flexbox**

Итог
* (+) Простота
* (+) Обширные настройки
* (-) Вопрос в поддержке (практически неактуален)

## [Двухуровневое](https://github.com/kakawi/menu-tutorial/tree/master/menu_top/two_levels/)
### [Example_1](http://codepen.io/kakawi/pen/LGKRmm)
left: -9999px;

### [Example_2](http://codepen.io/kakawi/pen/BjgLxX)
display:none

### [Example_3](http://codepen.io/kakawi/pen/KVjgez)
Отцентрированное меню по центру

### [Example_4](http://codepen.io/kakawi/pen/EPBgRw)
Меню сделано на **visibility:hidden + opacity:0**

## [Многоуровневое](https://github.com/kakawi/menu-tutorial/tree/master/menu_top/multimenu/)
### [Example_1](http://codepen.io/kakawi/pen/gPNwKy)
Меню вложенностью >= 3

### [Example_2](http://codepen.io/kakawi/pen/NxZRBP)
Все подменю тоже горизонтальные (**float:left**)

### [Example_3](http://codepen.io/kakawi/pen/yedaqa)
Все подменю горизонтальные (**FlexBox**)

Выводы:
* flex позволяет избавиться от clearfix
* но привносит свои особенности с тем от чего считаются left & top и с шириной меню

## [Mega Drop Down Menu](https://github.com/kakawi/menu-tutorial/tree/master/menu_top/mega_menu/)
### [Example_1](http://codepen.io/kakawi/pen/YwoGjR)
На **flexbox'е**. А почему бы и нет?
Вместо подменю (**ul**) у нас теперь **div** с собственной разметкой

### [Example_2](http://codepen.io/kakawi/pen/RrzGBv)
Я не удержался. SCSS + Susy

## [CSS + JS](https://github.com/kakawi/menu-tutorial/tree/master/menu_top/css_js/)
Для работы со сложной анимацией без JS необойтись
### [Example_1](http://codepen.io/kakawi/pen/dGBNLz)
Самый простой вариант

### [Example_2](http://codepen.io/kakawi/pen/OMeWGo)
Добиваемся идеала с помощью таймера

# [Sidebar (Боковое вертикальное меню)](https://github.com/kakawi/menu-tutorial/tree/master/sidebar/)
Оказывается чтобы сделать вертикальное меню достаточно не делать 1-ый уровень горизонтальным :)
## [Example_1](http://codepen.io/kakawi/pen/qbzRGr)
Например так.



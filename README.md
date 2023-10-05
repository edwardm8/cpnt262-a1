# CPNT-262 Strings and Numbers

## Edward Mah

### Code Journal
Diffrent ways to render js to html. Using DOM or inner html

DOM
```
var tag_id = document.getElementById('tagid');
var newNode = document.createElement('p');
newNode.appendChild(document.createTextNode('html string'));
```

Inner
```
var tag_id = document.getElementById('tagid');
tag_id.innerHTML = 'HTML string';
```
### Attributions
[mozilla developer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

[render js to html](https://www.digitalocean.com/community/tutorials/how-to-add-javascript-to-html)
let result;

result = document.body;
result = document.head;
result = document.URL;
result = document.domain;
result = document.contentType;
result = document.characterSet;
result = document.doctype;
result = document.forms;
result = document.forms[0];
result = document.forms[0].id;
result = document.forms[0].method;
result = document.forms[0].action;
result = document.links;
result = document.links[0];
result = document.links[0].id;
result = document.links[0].className;
result = document.links[0].classList;
result = document.links[0].classList[0];
result = document.images;
result = document.scripts;
result = document.scripts[2].getAttribute('src');
result = document.scripts[2].getAttribute('type');
result = Array.from(document.scripts);

result.forEach(element => {
    console.log(result);
});

console.log(result);
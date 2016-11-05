window.addEventListener('load', function () {
    // получение доступа к элементу link и чтение содержимого через свойства import 
    var content = document.querySelector("#list-import").import;
    var list = content.querySelector(".container");
    document.body.appendChild(list);
});
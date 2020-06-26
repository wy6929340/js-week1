var todoData = [];
var txtinput = document.querySelector(".txtinput");
var addtodo = document.querySelector(".addtodo");
var todtoList = document.querySelector(".todoList");
var listNum = document.querySelector(".listNum");
var NumNumber = document.querySelector(".Num-number");
var listBtn;
var allDelete = document.querySelector(".alldelete");
var listbtn
var str = "";
var Num;
addtodo.addEventListener("click", updateData);

allDelete.addEventListener("click", alldelete);

/*--------------------------------------------------新增資料---------資料----*/
function updateData() {
    if (txtinput.value != "") {
        todoData.push({
            "name": txtinput.value,
        })
    }

    rander(todoData);
}
/*--------------------------------------------------刪除資料---------資料----*/
function deleteData(e) {
    todoData.splice(e.target.dataset.index, 1);

    rander(todoData);
}
/*--------------------------------------------------刪除資料---------資料----*/

/*--------------------------------------------------刪除全部---------資料----*/
function alldelete() {

    todoData.splice(0, todoData.length);
    rander(todoData);
}
/*--------------------------------------------------刪除全部---------資料----*/


/*--------------------------------------------------更新畫面---------畫面----*/
function rander(arry) {
    txtinput.value = "";
    str = "";

    todoData.forEach(function (item, index) {
        str += `<li class="todoList-list container d-flex align-item-center justify-content-space-b mt-3">
            <div class="d-flex align-item-center">
            <div>
            <input type="checkbox">
            </div>

            <label for=""> ${item.name} </label>
            </div>
            <button class="list-btn"  data-index="${index}">X</button>

            </li>`

    })
    Num = todoData.length;
    todtoList.innerHTML = str;
    NumNumber.textContent = Num;
    listBtn = document.querySelectorAll(".list-btn");
    listBtn.forEach(function (btn) {
        btn.addEventListener("click", deleteData)
    })
}
/*--------------------------------------------------更新畫面---------畫面----*/
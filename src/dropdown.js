export const dropDownBtn = document.querySelector(".drop-down__btn");
export const dropDownItems = document.querySelectorAll('.drop-down__item')
const dropDownMenu = document.querySelector(".drop-down");


class Dropdown {
  showMenu() {
    dropDownMenu.classList.toggle('hidden')
  };
}

export default new Dropdown()

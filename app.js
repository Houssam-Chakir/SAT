import Dropdown, { dropDownBtn, dropDownItems } from "./src/dropdown.js";
import { fp } from "./src/datePicker.js";
import caseSection from "./src/caseSection.js";
import subAdvisors, { subAdvisorsSection } from "./src/subAdvisors.js";

let dropDownList, dropDownTargetBtn
//Event Listeners
dropDownBtn.addEventListener("click", () => Dropdown.toggleMenu());
dropDownItems.forEach((item) => {
  item.addEventListener("click", () => {
    caseSection.updateShift(item.id);
    Dropdown.toggleMenu();
  });
});
subAdvisorsSection.addEventListener("click", (e) => {
  if (
    e.target.id === "menu-button__SA" ||
    e.target.parentElement.id === "menu-button__SA"
  ) {
    dropDownTargetBtn = e.target.closest(".drop-down__btn")
    dropDownList = dropDownTargetBtn.nextElementSibling;
    dropDownList.classList.toggle('hidden')
    subAdvisors.dropDownEvenListener(dropDownList, dropDownTargetBtn)

  } else {
    subAdvisorsSection.querySelectorAll('.drop-down').forEach(menu => {
      menu.classList.add('hidden')
    })
  }
});


// init flatPicker
fp();
subAdvisors.formGenerator();

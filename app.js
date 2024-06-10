import Dropdown, { dropDownBtn, dropDownItems } from "./src/dropdown.js";
import { fp } from "./src/datePicker.js";
import caseSection from "./src/caseSection.js";
import subAdvisors, { subAdvisorsSection } from "./src/subAdvisors.js";

//Event Listeners
dropDownBtn.addEventListener("click", () => Dropdown.showMenu());
dropDownItems.forEach((item) => {
  item.addEventListener("click", () => {
    caseSection.updateShift(item.id);
    Dropdown.showMenu();
  });
});
subAdvisorsSection.addEventListener("click", (e) => {

  if (
    e.target.id === "menu-button__SA" ||
    e.target.parentElement.id === "menu-button__SA"
  )
    console.log('works');
});

// init flatPicker
fp();
subAdvisors.formGenerator();

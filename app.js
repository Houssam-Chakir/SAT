import Dropdown, { dropDownBtn, dropDownItems } from "./src/dropdown.js";
import { fp } from "./src/datePicker.js";
import caseSection from "./src/caseSection.js";

//Event Listeners
dropDownBtn.addEventListener("click", () => Dropdown.showMenu());
dropDownItems.forEach((item) => {
  item.addEventListener("click", () => {
    caseSection.updateShift(item.id)
    Dropdown.showMenu()
  });
});

// init flatPicker
fp();

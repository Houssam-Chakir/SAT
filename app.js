import Dropdown, { dropDownBtn, dropDownItems } from "./src/dropdown.js";
import { fp } from "./src/datePicker.js";
import CaseSection from "./src/caseSection.js";
import subAdvisors, { subAdvisorsSection } from "./src/subAdvisors.js";

let dropDownList, dropDownTargetBtn, subAdvisorElement;
//Event Listeners
// Add an event listener to the shift dropDownBtn that toggles the dropdown menu when clicked
dropDownBtn.addEventListener("click", () => Dropdown.toggleMenu());

// Add event listeners to each shift dropdown item
dropDownItems.forEach((item) => {
  // When a dropdown item is clicked, update the shift in caseSection and toggle the menu
  item.addEventListener("click", () => {
    CaseSection.updateShift(item.id); // Update the shift with the item's id
    Dropdown.toggleMenu(); // Toggle the dropdown menu
  });
});

// Add an event listener to the subAdvisorsSection for click events
subAdvisorsSection.addEventListener("click", (e) => {
  // Check if the clicked target is the menu button or its parent
  if (
    e.target.id === "menu-button__SA" ||
    e.target.parentElement.id === "menu-button__SA"
  ) {
    // Find the closest drop-down button to the clicked target
    dropDownTargetBtn = e.target.closest(".drop-down__btn");
    // Get the next sibling element of the drop-down button (the dropdown list)
    dropDownList = dropDownTargetBtn.nextElementSibling;
    // Toggle the 'hidden' class on the dropdown list to show/hide it
    dropDownList.classList.toggle("hidden");
    // Add an event listener to handle dropdown interactions
    subAdvisors.dropDownEvenListener(dropDownList, dropDownTargetBtn);
  } else {
    // If the click is outside the menu button, hide all dropdown menus in subAdvisorsSection
    subAdvisorsSection.querySelectorAll(".drop-down").forEach((menu) => {
      menu.classList.add("hidden");
    });
  }

  if (e.target.classList.contains("Sub-advisor__delete-btn") ) {
    subAdvisorElement = e.target.closest(".Sub-advisor");
    subAdvisorElement.remove()
  } else {
    console.log("bruh");
  }

  if(e.target.classList.contains('Add-btn')) {
    subAdvisors.formGenerator()
  }
});

// init flatPicker
fp();
subAdvisors.formGenerator();


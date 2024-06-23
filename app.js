import Dropdown, { dropDownBtn, dropDownItems } from "./src/dropdown.js";
import { fp } from "./src/datePicker.js";
import CaseSection from "./src/caseSection.js";
import subAdvisors, { subAdvisorsSection } from "./src/subAdvisors.js";
import dataModel from "./src/dataModel.js";

let dropDownList, dropDownTargetBtn, subAdvisorElement;

//- subAdvisorSection buttons


//f/ Event Listeners
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


//TODO - make event listener for each button
// Add an event listener to the subAdvisorsSection for click events
subAdvisorsSection.addEventListener("click", (e) => {
  const target = e.target;

  // Function to toggle dropdown menus
  const toggleDropdown = (target) => {
    if (target.closest('#menu-button__SA')) {
      dropDownTargetBtn = target.closest(".drop-down__btn");
      dropDownList = dropDownTargetBtn.nextElementSibling;
      dropDownList.classList.toggle("hidden");
      subAdvisors.dropDownEvenListener(dropDownList, dropDownTargetBtn);
    } else {
      subAdvisorsSection.querySelectorAll(".drop-down").forEach((menu) => {
        menu.classList.add("hidden");
      });
    }
  };

  // Function to handle deleting a sub-advisor
  const deleteSubAdvisor = (target) => {
    if (target.classList.contains("Sub-advisor__delete-btn")) {
      const subAdvisorElement = target.closest(".Sub-advisor");
      subAdvisorElement.remove();
    }
  };

  // Function to handle adding a new sub-advisor
  const addSubAdvisor = (target) => {
    if (target.classList.contains('Add-btn')) {
      subAdvisors.formGenerator();
    }
  };

  // Function to handle submitting data
  const submitData = (target) => {
    if (target.classList.contains('Submit-btn')) {
      dataModel.collectCaseData();
      dataModel.updateDayStatstable();
      subAdvisors.resetValues();
    }
  };

  // Call the appropriate function based on the target element
  toggleDropdown(target);
  deleteSubAdvisor(target);
  addSubAdvisor(target);
  submitData(target);
});



// init flatPicker
fp();
subAdvisors.formGenerator();

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import Flatpickr CSS

import { showMenu, dropDownBtn } from "./src/dropdows.js";
import { fp } from "./src/datePicker.js";


//Event Listeners
dropDownBtn.addEventListener("click", () => showMenu());

// init flatPicker
fp()

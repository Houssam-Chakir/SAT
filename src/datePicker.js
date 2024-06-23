import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import Flatpickr CSS
import CaseSection from "./caseSection";




const datePicker = document.querySelector("#date-picker");
export let selectedDate
const dateSplit = (date) => {
  return date.split('-')
}
export const fp = () => {
  flatpickr(datePicker, {
    dateFormat: "Y-m-d",
    defaultDate: "today",
    onChange: function (selectedDates, dateStr, instance) {
      selectedDate = dateStr
      console.log('date: ', selectedDate);
      CaseSection.showSection()

    },
    onReady: function (selectedDates, dateStr, instance) {
      selectedDate = dateStr
    },

    // Add more options as needed
  });

}

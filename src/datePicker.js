import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"; // Import Flatpickr CSS
import CaseSection from "./caseSection";




const datePicker = document.querySelector("#date-picker");
let date
const dateSplit = (date) => {
  return date.split('-')
}
export const fp = () => {
  flatpickr(datePicker, {
    dateFormat: "Y-m-d",
    defaultDate: "today",
    onChange: function (selectedDates, dateStr, instance) {
      console.log("selectedDates: ", selectedDates[0]);
      console.log("Selected date:", dateStr);
      CaseSection.showSection()

    },
    onReady: function (selectedDates, dateStr, instance) {
      date = dateSplit(dateStr)
      console.log('date: ', date);
    },

    // Add more options as needed
  });

}

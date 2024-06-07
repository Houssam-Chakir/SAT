import flatpickr from "flatpickr";

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
    },
    onReady: function (selectedDates, dateStr, instance) {
      date = dateSplit(dateStr)
      console.log('date: ', date);
    },

    // Add more options as needed
  });

}

import { dropDownBtn } from "./dropdown"

const mainSection = document.querySelector('#main-section')
const calendarIcon = document.querySelector('#Calendar-icon')
const caseSection = document.querySelector('.Case-section')
class CaseSection {
  currentShift = 'BigNight'

  updateShift(shift) {
    this.currentShift = shift.id

    console.log('this.currentShift: ', this.currentShift);
    const color = this.shiftColor(shift.id)
    const sectionHeader = caseSection.firstElementChild

    sectionHeader.classList = `Case-shift rounded-t-sm bg-${color}-700 flex gap-2 p-3 w-full items-baseline`
    dropDownBtn.firstElementChild.innerHTML = `
        ${shift.innerHTML}
        <svg
          class="-mr-1 h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      `
  }

  shiftColor(shift) {
    if(shift === 'Morning') return 'indigo'
    if(shift === 'Night') return 'orange'
    if(shift === 'BigNight') return 'cyan'

  }

  showSection() {
    mainSection.classList.remove('hidden')
    calendarIcon.remove()

  }
}

export default new CaseSection()

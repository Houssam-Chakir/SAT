const caseSection = document.querySelector('.Case-section')
const calendarIcon =document.querySelector('#Calendar-icon')

class CaseSection {
  currentShift = 'Morning'

  updateShift(shift) {
    this.currentShift = shift
    console.log('this.currentShift: ', this.currentShift);
    const color = this.shiftColor(shift)
    const markup = `
      <div class="Case-shift rounded-t-md ${color} flex gap-2 p-3 w-full">
        <div class="rounded-lg">
        ${shift}
        </div>
        <div class="">
          <h2>Case Data</h2>
        </div>
      </div>`

    caseSection.firstElementChild.remove()
    caseSection.insertAdjacentHTML('afterbegin', markup)
  }

  shiftColor(shift) {
    if(shift === 'Morning') return 'morning'
    if(shift === 'Night') return 'night'
    if(shift === 'BigNight') return 'bigNight'

  }

  showSection() {
    caseSection.classList.remove('hidden')
    calendarIcon.remove()

  }
}

export default new CaseSection()

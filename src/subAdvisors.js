const subAdvisorsSection = document.querySelector('.Sub-advisors')
export const saDropDownBtn = subAdvisorsSection.querySelector('.drop-down__btn')

class SubAdvisors {
  subAdvisors = ['Brahim', 'Ahmed', 'Ayman', 'Halima', 'Benhida']

  formGenerator() {
    const markup = `
      <!-- SUB ADVISOR STAT -->
      <div class="Sub-advisor flex gap-3">
        <div>Sub-advisor:</div>
        <div class="relative inline-block text-left">
          <!-- SUB ADVISORS DROPDOWN BUTTON -->
          <div class="drop-down__btn">
            <button type="button"
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button__SB" aria-expanded="true" aria-haspopup="true">
              Shift
              <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </button>

          </div>
          <!-- SUB ADVISORS LIST -->
          <div
            class="hidden drop-down absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out delay-150"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" placeholder="Shift">
            <div class="py-1" role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              ${this.subAdvisorslistGenerator()}
            </div>
          </div>

        </div>
        <!-- AHT -->
        <div class="pt-1">AHT</div>
        <input type="number" class="text-blue-950 rounded-md px-2" placeholder="in Minutes">

      </div>
    `
    subAdvisorsSection.insertAdjacentHTML('beforeend', markup)
  }

  subAdvisorslistGenerator() {
    return this.subAdvisors.map(sb => {
      console.log('sb: ', sb);

      return `
      <a href="#" id="${sb}" class="drop-down__item text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"
      id="BN">${sb}</a>`
    })
  }
}

export default new SubAdvisors()

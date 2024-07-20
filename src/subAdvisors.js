import dataModel from "./dataModel";
import suggestions from "./suggestions";

export const subAdvisorsSection = document.querySelector(".Sub-advisors");
const subAdvisorsDashboard = document.querySelector("#dashboard");

class SubAdvisors {
  subAdvisors = ["Brahim Bakrim", "Ahmed Loutia", "Ayman El morajji", "Halima Nadir", "Fatima Zahra Benhida", "Toufiq FAKKAR", "Ibtissam Haddadi", "Achraf Simour", "Moubarak Jamali", "Zeinab Ibrahim", "Youssef Hamouch", "Marouane EL FDIDINE", "Soumia Nadir"];
  zIndex = 500
  formGenerator(sa) {
    const markup = `
      <!-- SUB ADVISOR STAT -->
      <div class="Sub-advisor flex gap-3">
        <div class="relative inline-block text-left">
          <div class="drop-down__btn flex">
            <!-- Delete BUTTON -->
            <button class='Sub-advisor__delete-btn bg-red-800 hover:bg-red-500 w-10 h-10 p-2 rounded-s-md ring-1 ring-inset ring-gray-700 hover:ring-2 hover:ring-red-200'>
              <svg class='rotate-45' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#d4d4d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </button>
            <!-- SUB ADVISORS DROPDOWN BUTTON -->
            <button  data-name='${sa ? sa : ''}' type="button"
              style="z-index: ${this.zIndex};" class=" inline-flex w-full justify-center gap-x-1.5 rounded-e-md bg-gray-950 px-3 py-2 h-10  text-sm font-medium ${sa ? 'text-white' : 'text-gray-400'} shadow-sm ring-1 ring-inset ring-gray-700 hover:ring-2 hover:ring-slate-200"
              id="menu-button__SA" aria-expanded="true" aria-haspopup="true">
              ${sa ? sa : 'Select a name'}
              <svg class="mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
            </button>

          </div>
          <!-- SUB ADVISORS LIST -->
          <div
            id='sa-drop-down'
            style="z-index: ${this.zIndex};"
            class="hidden drop-down absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out delay-150"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" placeholder="Shift">
            <div class="py-1 " role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              ${this.subAdvisorslistGenerator()}
            </div>
          </div>

        </div>
        <!-- HT -->
        <div class="flex">
          <label class="pt-1 pe-2 mt-1 ms-1">Handle Time</label>
          <button type="button" onclick="this.parentNode.querySelector('[type=number]').stepDown();" class='bg-slate-800 hover:bg-slate-500 w-8 p-2 rounded-s-md ring-1 ring-inset ring-gray-700'>
            -
          </button>
          <input id="AHT" type="number" step="0.5" min="0.5" max="10" class="inline-flex w-full justify-center gap-x-1.5 bg-gray-950 px-3 py-2  text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:ring-2 hover:ring-slate-200" placeholder="in Minutes" style="width: 95px;">
          <button type="button" onclick="this.parentNode.querySelector('[type=number]').stepUp();" class='bg-slate-800 hover:bg-slate-500 w-8 p-2 rounded-e-md ring-1 ring-inset ring-gray-700'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#d4d4d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

          </button>
        </div>

      </div>
    `;
    subAdvisorsSection.firstElementChild.insertAdjacentHTML("beforeend", markup);

    console.log("form added");
  }

  subAdvisorslistGenerator() {
    return this.subAdvisors
      .map((sb) => {
        console.log("sb: ", sb);

        return `
      <a href="#" id="${sb}" class="drop-down__item text-gray-700 block px-4 py-2 text-sm hover:bg-gray-800 hover:text-white" role="menuitem" tabindex="-1"
      >${sb}</a>`;
      })
      .join("");
  }

  dropDownEvenListener(dropDown, btn) {
    //drop down items on click of each
    dropDown.addEventListener("click", (e) => {
      btn.innerHTML = `
      <!-- Delete BUTTON -->
      <button class='Sub-advisor__delete-btn bg-red-800 hover:bg-red-500 w-10 h-10 p-2 rounded-s-md ring-1 ring-inset ring-gray-700 hover:ring-2 hover:ring-red-200'>
        <svg class='rotate-45' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#d4d4d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
      <button data-name='${e.target.id}' type="button"
      class="inline-flex w-full justify-center gap-x-1.5 rounded-e-md bg-gray-950 px-3 py-2  text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-gray-700 hover:ring-2 hover:ring-slate-200"
      id="menu-button__SA" aria-expanded="true" aria-haspopup="true">
      ${e.target.id}
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </button>
      `;

      suggestions.updateSuggestions(e.target.id)
      const pills = document.querySelectorAll('.Suggestion-btn')
      pills.forEach(pill => {
        pill.addEventListener('click', () => this.formGenerator(pill.innerHTML.trim()))
      })
    });
  }

  resetValues() {
    const inputslist = subAdvisorsSection.querySelectorAll('#AHT')
    inputslist.forEach(input => {
      input.value = ''
    })
  }

  dashboardGenerator() {
    //Iterate over subadvisors
    const subAdvisors = dataModel.dayData.subAdvisors
    console.log('subAdvisors: ', subAdvisors);

    let markup
    const dashboardHeaderMarkup = `
      <div id="dashboard-header" class="flex bg-slate-800">
        <div id="Stats-day" class="max-sm:w-28 max-sm:text-sm w-44 border border-gray-700 px-4 py-2">
          Sub-Advisor
        </div>
        <div id="shift-case-count" class="border w-32 border-gray-700 px-4 py-2">
          Case count
        </div>
        <div id="shift-AHT" class="border w-32 border-gray-700 px-4 py-2">
          AHT
        </div>

      </div>
    `

    //extrat data and apply to form
    if(!subAdvisors.length) return
    subAdvisorsDashboard.innerHTML = ''
    subAdvisorsDashboard.insertAdjacentHTML('beforeend', dashboardHeaderMarkup)
    subAdvisors.forEach(sa => {
      markup = `
        <div id="subadvisor-row" class="flex">
          <div id="sa-name" class="max-sm:w-28 max-sm:text-sm w-44 border border-gray-700 px-4 py-2">
            ${sa.name}
          </div>
          <div id="sa-case-count" class="border w-32 border-gray-700 px-4 py-2">
            ${sa.caseCount}
          </div>
          <div id="sa-AHT" class="border w-32 border-gray-700 px-4 py-2">
            ${sa.AHT}
          </div>

        </div>
      `
      subAdvisorsDashboard.insertAdjacentHTML('beforeend', markup)
    })
    //insert form
  }
}

export default new SubAdvisors();

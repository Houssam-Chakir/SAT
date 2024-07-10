import dataModel from "./dataModel";

export const subAdvisorsSection = document.querySelector(".Sub-advisors");
const subAdvisorsDashboard = document.querySelector("#dashboard");

class SubAdvisors {
  subAdvisors = ["Brahim Bakrim", "Ahmed Loutia", "Ayman El morajji", "Halima Nadir", "Fatima Zahra Benhida", "Toufiq FAKKAR", "Ibtissam Haddadi", "Achraf Simour", "Moubarak Jamali", "Zeinab Ibrahim", "Youssef Hamouch", "Marouane EL FDIDINE", "Soumia Nadir"];
  zIndex = 500
  formGenerator() {
    const markup = `
      <!-- SUB ADVISOR STAT -->
      <div class="Sub-advisor flex gap-3 ">
        <div class="relative inline-block text-left">
          <!-- SUB ADVISORS DROPDOWN BUTTON -->
          <div class="drop-down__btn">
            <button  data-name='' type="button"
              style="z-index: ${this.zIndex};" class=" inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-500"
              id="menu-button__SA" aria-expanded="true" aria-haspopup="true">
              Select
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
        <div class="flex gap-3">
          <div class="pt-1">Handle Time</div>
          <input id="AHT" type="number" class="text-blue-950 rounded-md px-2 w-[120px]" placeholder="in Minutes" style="width: 120px;">
        </div>
        <!-- Delete BUTTON -->
        <button class='Sub-advisor__delete-btn flex deleteBtn text-xl rounded-lg px-3 p-1 text-red-600'>
          X
        </button>
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
      <button data-name='${e.target.id}' type="button"
      class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  "
      id="menu-button__SA" aria-expanded="true" aria-haspopup="true">
      ${e.target.id}
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </button>
      `;
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

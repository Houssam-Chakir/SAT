export const subAdvisorsSection = document.querySelector(".Sub-advisors");

class SubAdvisors {
  subAdvisors = ["Brahim", "Ahmed", "Ayman", "Halima", "Benhida"];

  formGenerator() {
    const markup = `
      <!-- SUB ADVISOR STAT -->
      <div class="Sub-advisor flex gap-3 mx-3">
        <svg class='w-8' fill="#6180e5" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z"></path></g></svg>
        <div class="relative inline-block text-left">
          <!-- SUB ADVISORS DROPDOWN BUTTON -->
          <div class="drop-down__btn">
            <button type="button"
              class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button__SA" aria-expanded="true" aria-haspopup="true">
              choose a name
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
            class="hidden z-0 drop-down absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out delay-150"
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
      <button type="button"
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
}

export default new SubAdvisors();

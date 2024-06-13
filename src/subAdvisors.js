export const subAdvisorsSection = document.querySelector(".Sub-advisors");

class SubAdvisors {
  subAdvisors = ["Brahim", "Ahmed", "Ayman", "Halima", "Benhida"];

  formGenerator() {
    const markup = `
      <!-- SUB ADVISOR STAT -->
      <div class="Sub-advisor flex gap-3 mx-3">
        <div class="pt-1">Sub-advisor:</div>
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
            class="hidden drop-down absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition ease-in-out delay-150"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" placeholder="Shift">
            <div class="py-1 " role="none">
              <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
              ${this.subAdvisorslistGenerator()}
            </div>
          </div>

        </div>
        <!-- CASE COUNT -->
        <div class="flex gap-3">
          <div class="pt-1">Case count</div>
          <input id="caseCount" type="number" class="text-blue-950 rounded-md px-2 w-[70px]" placeholder="">
        </div>
        <!-- AHT -->
        <div class="flex gap-3">
          <div class="pt-1">AHT</div>
          <input id="AHT" type="number" class="text-blue-950 rounded-md px-2 w-[120px]" placeholder="in Minutes">
        </div>
        <!-- Delete BUTTON -->
        <button class='Sub-advisor__delete-btn'>
          <svg class='mr-1 h-5 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6.38597C3 5.90152 3.34538 5.50879 3.77143 5.50879L6.43567 5.50832C6.96502 5.49306 7.43202 5.11033 7.61214 4.54412C7.61688 4.52923 7.62232 4.51087 7.64185 4.44424L7.75665 4.05256C7.8269 3.81241 7.8881 3.60318 7.97375 3.41617C8.31209 2.67736 8.93808 2.16432 9.66147 2.03297C9.84457 1.99972 10.0385 1.99986 10.2611 2.00002H13.7391C13.9617 1.99986 14.1556 1.99972 14.3387 2.03297C15.0621 2.16432 15.6881 2.67736 16.0264 3.41617C16.1121 3.60318 16.1733 3.81241 16.2435 4.05256L16.3583 4.44424C16.3778 4.51087 16.3833 4.52923 16.388 4.54412C16.5682 5.11033 17.1278 5.49353 17.6571 5.50879H20.2286C20.6546 5.50879 21 5.90152 21 6.38597C21 6.87043 20.6546 7.26316 20.2286 7.26316H3.77143C3.34538 7.26316 3 6.87043 3 6.38597Z" fill="crimson"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z" fill="crimson"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z" fill="crimson"></path> <path opacity="0.5" d="M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z" fill="crimson"></path> </g></svg>
        </button>
      </div>
    `;
    subAdvisorsSection.insertAdjacentHTML("beforeend", markup);
    subAdvisorsSection.insertAdjacentHTML("beforeend", markup);
    subAdvisorsSection.insertAdjacentHTML("beforeend", markup);

    console.log("form added");
  }

  subAdvisorslistGenerator() {
    return this.subAdvisors
      .map((sb) => {
        console.log("sb: ", sb);

        return `
      <a href="#" id="${sb}" class="drop-down__item text-gray-700 block px-4 py-2 text-sm hover:bg-gray-800 hover:text-white" role="menuitem" tabindex="-1"
      id="BN">${sb}</a>`;
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

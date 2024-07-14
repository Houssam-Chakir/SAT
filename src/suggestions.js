const suggestionsSection = document.querySelector('.suggestions')

class Suggestion {
  count = 0
  sug = []


  pillGenerator(name) {
    const markup = `
       <button
          class="Add-btn text-xs bg-slate-600 hover:bg-slate-500 w-min-32 overflow-clip p-2 px-4 rounded-full"
        >
          ${name}
        </button>
    `
    suggestionsSection.insertAdjacentHTML('beforeend',markup)
  }

  updateSuggestions(name) {
    suggestionsSection.innerHTML = ''

    if (this.sug.length > 4) this.sug.shift()
      console.log('1 sug: ', this.sug);

    if (!this.sug.includes(name)) {
      this.sug.push(name)
    }
    console.log('2 this.sug: ', this.sug);


    this.sug.forEach(name => {
      this.pillGenerator(name)
    })
    console.log('3 this.sug: ', this.sug);

  }

}

export default new Suggestion()

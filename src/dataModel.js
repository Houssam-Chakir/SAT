
class DataModel {
  bigNightRow = document.querySelector('.BigNight-shift-stats')
  MorningRow = document.querySelector('.Morning-shift-stats')
  NightRow = document.querySelector('.Night-shift-stats')

  shiftCaseCount
  shiftAHT
  shiftFinishedCases
  shiftMissedCases


  dayData = {
    //object
    date: "2024-06-13",
    shifts: [
      //array
      {
        shift: "BigNight",
        caseCount: 120,
        missed: 2,
        AHT: 1.6,
        subAdvisors: [
          { name: "Alice Johnson", caseCount: 40 },
          { name: "Bob Smith", caseCount: 35 },
          { name: "Charlie Brown", caseCount: 45 },
        ],
      },
      {
        shift: "Morning",
        caseCount: 90,
        missed: 2,
        AHT: 1.5,
        subAdvisors: [
          { name: "David Wilson", caseCount: 30 },
          { name: "Eva Davis", caseCount: 25 },
          { name: "Frank Miller", caseCount: 35 },
        ],
      },
      {
        shift: "Night",
        caseCount: 75,
        missed: 2,
        AHT: 1.3,
        subAdvisors: [
          { name: "Grace Lee", caseCount: 25 },
          { name: "Henry Clark", caseCount: 20 },
          { name: "Ivy Lewis", caseCount: 30 },
        ],
      },
    ],
  };
  // You can add more dates and shifts as needed

  selectCell(parent, id) {
    return parent.querySelector(`#${id}`)
  }

  updateShiftStatsTable(shiftElement) {
    console.log('shiftElement: ', shiftElement);
    this.shiftCaseCount = this.selectCell(shiftElement, 'shift-case-count')
    this.shiftAHT = this.selectCell(shiftElement, 'shift-AHT')
    this.shiftFinishedCases = this.selectCell(shiftElement, 'shift-cases__finished')
    this.shiftMissedCases = this.selectCell(shiftElement, 'shift-cases__missed')

    this.dayData.shifts.forEach(shift => {
      if(shift.shift === shiftElement.id) {
        this.shiftCaseCount.innerHTML = shift.caseCount
        this.shiftAHT.innerHTML = shift.AHT
        this.shiftFinishedCases.innerHTML = shift.caseCount - shift.missed
        this.shiftMissedCases.innerHTML = shift.missed
      }
    })


  }

  updateDayStatstable() {
    this.updateShiftStatsTable(this.MorningRow)
    this.updateShiftStatsTable(this.NightRow)
    this.updateShiftStatsTable(this.bigNightRow)

  }
}

export default new DataModel();

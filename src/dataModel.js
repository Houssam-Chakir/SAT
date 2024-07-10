import caseSection from "./caseSection";
import { selectedDate } from "./datePicker";
import subAdvisors from "./subAdvisors";

class DataModel {
  bigNightRow = document.querySelector(".BigNight-shift-stats");
  MorningRow = document.querySelector(".Morning-shift-stats");
  NightRow = document.querySelector(".Night-shift-stats");

  statsDay = document.querySelector("#Stats-day");
  shiftCaseCount;
  shiftAHT;
  shiftFinishedCases;
  shiftMissedCases;

  dayData = {
    //object
    date: "",
    shifts: [
      //array
      {
        shift: "BigNight",
        caseCount: 0,
        missed: 0,
        AHT: 0,
        HT: [
          // { name: "Alice Johnson", caseCount: 40 },
        ],
      },
      {
        shift: "Morning",
        caseCount: 0,
        missed: 0,
        AHT: 0,
        HT: [],
      },
      {
        shift: "Night",
        caseCount: 0,
        missed: 0,
        AHT: 0,
        HT: [
          // { name: "Grace Lee", caseCount: 25 },
        ],
      },
    ],
    subAdvisors: []
  };
  // You can add more dates and shifts as needed

  selectCell(parent, id) {
    return parent.querySelector(`#${id}`);
  }

  updateShiftStatsTable(shiftElement) {
    this.shiftCaseCount = this.selectCell(shiftElement, "shift-case-count");
    this.shiftAHT = this.selectCell(shiftElement, "shift-AHT");
    this.shiftFinishedCases = this.selectCell(
      shiftElement,
      "shift-cases__finished"
    );
    this.shiftMissedCases = this.selectCell(
      shiftElement,
      "shift-cases__missed"
    );

    this.dayData.shifts.forEach((shift) => {
      if (shift.shift === shiftElement.id) {
        if (shift.caseCount > 0)
          this.shiftCaseCount.innerHTML = shift.caseCount;
        if (shift.AHT > 0) this.shiftAHT.innerHTML = shift.AHT;
        console.log('this.shiftAHT: ', this.shiftAHT);
        if (shift.caseCount > 0)
          this.shiftFinishedCases.innerHTML = shift.caseCount - shift.missed;
        if (shift.missed > 0) this.shiftMissedCases.innerHTML = shift.missed;
      }
    });
  }

  updateDayStatstable() {
    this.statsDay.innerHTML = selectedDate;
    this.updateShiftStatsTable(this.MorningRow);
    this.updateShiftStatsTable(this.NightRow);
    this.updateShiftStatsTable(this.bigNightRow);
    console.log("Updated Day Table");
  }

  calcAHT(sa) {
    if (sa.HT.length > 0) {
        const totalHT = sa.HT.reduce((sum, ht) => sum + ht, 0);
        sa.AHT = parseFloat(totalHT / sa.HT.length).toPrecision(2)
    } else {
        sa.AHT = 0; // or handle as needed if HT array is empty
    }

  }

  calcShiftAHT(shift) {
    if(shift.HT.length === 1) return shift.AHT = shift.HT[0]
    let aht = shift.HT.reduce((sum, aht) => sum + aht, 0) /shift.HT.length
    shift.AHT = parseFloat(aht).toPrecision(2)

  }

  addSubAdvisorData(subAdvisor) {
    this.dayData.subAdvisors.push(subAdvisor);

  }

  updateSubAdvisorData(sa, saName) {
    this.dayData.subAdvisors.forEach((saObj) => {
      if (saObj.name !== saName) return

      saObj.caseCount++;
      saObj.HT.push(+sa.querySelector("#AHT").value);
      this.calcAHT(saObj)

    });
  }

  collectCaseData(missed = false) {
    const subAdvisors = document.querySelectorAll(".Sub-advisor");
    console.log("subAdvisors: ", subAdvisors);

    this.dayData.shifts.forEach((shift) => {
      // checking which shift is current shift
      let accept = true

      console.log("1 checking which shift is current shift: ");
      if (shift.shift !== caseSection.currentShift) return
      if (missed === true) {
        shift.caseCount++
        shift.missed++
        return
      }
      //going over all existing SA in the current shift
      console.log(" 2going over all existing SA in the current shift: ");

      let saArray = this.dayData.subAdvisors.map((saObj) => saObj.name);

      subAdvisors.forEach((sa) => {

        const saData = sa.querySelector("#menu-button__SA");
        const saAHT = sa.querySelector("#AHT").value
        const saName = saData.dataset.name
        console.log('saName: ', saName);
        console.log("saArray: ", saArray);

        // guard
        if (saName === "" || saAHT === "" || !+saAHT) {
          accept = false
          return alert("Please choose a name and use only numbers in handling time input");
        }

        //f/ adding or updating sa info
        if (saArray.includes(saName)) {
          // if true we just add new values
          this.updateSubAdvisorData(sa, saName);
        } else {
          // if false we add new sa object
          this.addSubAdvisorData({ name: saName, caseCount: 1, HT: [+saAHT], AHT: +saAHT });
          saArray.push(saName)
        }

        shift.HT.push(+saAHT)

      });
      console.log(
        "-----------------------------------------------------------------"
      );
      console.log("day data : ", this.dayData);
      console.log(
        "-----------------------------------------------------------------"
      );
      if(accept) shift.caseCount++
      this.calcShiftAHT(shift)
    });
  }

}

export default new DataModel();

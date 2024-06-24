import caseSection from "./caseSection";
import { selectedDate } from "./datePicker";

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
        subAdvisors: [
          // { name: "Alice Johnson", caseCount: 40 },
        ],
      },
      {
        shift: "Morning",
        caseCount: 0,
        missed: 0,
        AHT: 0,
        subAdvisors: [{ name: "Brahim", caseCount: 1, HT: [], AHT: 0 }],
      },
      {
        shift: "Night",
        caseCount: 0,
        missed: 0,
        AHT: 0,
        subAdvisors: [
          // { name: "Grace Lee", caseCount: 25 },
        ],
      },
    ],
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
        if (shift.shiftAHT > 0) this.shiftAHT.innerHTML = shift.AHT;
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
        sa.AHT = totalHT / sa.HT.length;
    } else {
        sa.AHT = 0; // or handle as needed if HT array is empty
    }

  }

  addSubAdvisorData(shift, subAdvisor) {
    shift.subAdvisors.push(subAdvisor);

  }

  updateSubAdvisorData(shift, sa, saName) {
    shift.subAdvisors.forEach((saObj) => {
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
      let count = 0

      console.log("1 checking which shift is current shift: ");
      if (shift.shift !== caseSection.currentShift) return
      if (missed === true) {
        shift.caseCount++
        shift.missed++
        return
      }
      //going over all existing SA in the current shift
      console.log(" 2going over all existing SA in the current shift: ");

      let saArray = shift.subAdvisors.map((saObj) => saObj.name);

      subAdvisors.forEach((sa) => {

        const saData = sa.querySelector("#menu-button__SA");
        const saAHT = sa.querySelector("#AHT").value
        const saName = saData.dataset.name
        console.log('saName: ', saName);
        console.log("saArray: ", saArray);

        // guard
        if (saName === "" || saAHT === "")
          return alert("Please fill in all the information needed first.");


        if (saArray.includes(saName)) {
          // if true we just add new values
          this.updateSubAdvisorData(shift, sa, saName);
          count++
        } else {
          // if false we add new sa object
          this.addSubAdvisorData(shift, { name: saName, caseCount: 1, HT: [+saAHT] });
          saArray.push(saName)
          count++
        }

      });
      console.log(
        "-----------------------------------------------------------------"
      );
      console.log("shift subAdvisors : ", shift.subAdvisors);
      console.log(
        "-----------------------------------------------------------------"
      );
      shift.caseCount++
    });
  }
}

export default new DataModel();

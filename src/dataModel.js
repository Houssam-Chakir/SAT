import subAdvisors from "./subAdvisors";

class DataModel {
  dayData = {
    //object
    date: "2024-06-13",
    shifts: [
      //array
      {
        shift: "BN",
        caseCount: 120,
        missed: 2,
        AHT: 1.5,
        subAdvisors: [
          { name: "Alice Johnson", caseCount: 40 },
          { name: "Bob Smith", caseCount: 35 },
          { name: "Charlie Brown", caseCount: 45 },
        ],
      },
      {
        shift: "M",
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
        shift: "N",
        caseCount: 75,
        missed: 2,
        AHT: 1.5,
        subAdvisors: [
          { name: "Grace Lee", caseCount: 25 },
          { name: "Henry Clark", caseCount: 20 },
          { name: "Ivy Lewis", caseCount: 30 },
        ],
      },
    ],
  };
  // You can add more dates and shifts as needed
}

export default new DataModel();

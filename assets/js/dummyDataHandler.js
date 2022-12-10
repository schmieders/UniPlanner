function loadDummyData() {

   window.localStorage.setItem("studyPrograms", JSON.stringify([
      {
         id: 0,
         name: "Informatik",
         short: "TIF"
      },
      {
         id: 1,
         name: "Wirtschaftsinformatik",
         short: "WIF"
      },
      {
         id: 2,
         name: "Betriebswirtschaftslehre",
         short: "BWL"
      },
   ]))

   window.localStorage.setItem("lectureDates", JSON.stringify([
      {
         id: 0,
         startDate: "2022-01-01T00:00",
         endDate: "2022-01-01T23:59"
      },
      {
         id: 1,
         startDate: "2022-02-02T00:00",
         endDate: "2022-02-02T23:59"
      },
      {
         id: 2,
         startDate: "2022-03-03T00:00",
         endDate: "2022-03-03T23:59"
      },
   ]))


   window.localStorage.setItem("semesters", JSON.stringify([
      {
         id: 0,
         name: "1. Semester",
         startDate: 0,
         endDate: 2,
         number: 1,
         studyProgram: 1
      }, {
         id: 1,
         name: "2. Semester",
         startDate: 1,
         endDate: 2,
         number: 2,
         studyProgram: 2
      }, {
         id: 2,
         name: "3. Semester",
         startDate: 0,
         endDate: 1,
         number: 3,
         studyProgram: 0
      },
   ]))

   window.localStorage.setItem("studyClasses", JSON.stringify([
      {
         id: 0,
         name: "TIF22A",
         startDate: 0,
         endDate: 0,
         semester: 0,
         studyProgram: 0
      }, {
         id: 1,
         name: "WIF21B",
         startDate: 1,
         endDate: 1,
         semester: 1,
         studyProgram: 1
      }, {
         id: 2,
         name: "BWL20A",
         startDate: 2,
         endDate: 2,
         semester: 2,
         studyProgram: 2
      },
   ]))

   window.localStorage.setItem("lecturers", JSON.stringify([
      {
         id: 0,
         firstName: "Max",
         lastName: "Mustermann",
         email: "max.mustermann@uniplanner.de",
         studyProgram: 0
      }, {
         id: 1,
         firstName: "Erika",
         lastName: "Musterfrau",
         email: "erika.musterfrau@uniplanner.de",
         studyProgram: 1
      }, {
         id: 2,
         firstName: "Max",
         lastName: "Musterfrau",
         email: "max.musterfrau@uniplanner.de",
         studyProgram: 2
      },
   ]))

   window.localStorage.setItem("lectures", JSON.stringify([
      {
         id: 0,
         lectureName: "Technische Informatik",
         moduleName: "Digitaltechnik I",
         duration: 48,
         lectureDates: ["0", "2"],
         lecturers: ["0"],
         studyClass: 0
      }, {
         id: 1,
         lectureName: "Mathematik I",
         moduleName: "Analysis",
         duration: 50,
         lectureDates: ["1", "2"],
         lecturers: ["1", "2"],
         studyClass: 1
      }, {
         id: 2,
         lectureName: "Betriebswirtschaftslehre",
         moduleName: "Projektmanagement",
         duration: 35,
         lectureDates: ["0", "2"],
         lecturers: ["0", "1", "2"],
         studyClass: 2
      },
   ]))

   window.localStorage.setItem("currentIds", JSON.stringify({
      lectureDate: 3,
      lecturer: 3,
      lecture: 3,
      semester: 3,
      studyClass: 3,
      studyProgram: 3
   }))

}
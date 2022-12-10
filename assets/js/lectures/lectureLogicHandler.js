let logicHandler = new LogicHandler()
let modalHandler = new LectureModalHandler()

function renderLectureModal(id) {
   id = typeof id == "undefined" ? "Create" : id

   let lecture = id == "Create" ? getEmptyLecture() : logicHandler.getItem("lectures", id)

   let lectureDateList = logicHandler.getAsDataListWithRange("lectureDates", "startDate", "endDate", lecture.lectureDates)
   let lecturerList = logicHandler.getAsDataList("lecturers", "lastName", lecture.lecturers)
   let studyClassList = logicHandler.getAsDataList("studyClasses", "name", [lecture.studyClass])

   document.body.append(modalHandler.getLectureModal(lecture, lectureDateList, lecturerList, studyClassList))
   document.body.append(modalHandler.getLectureModalButton(id))
   let htmlButton = document.getElementById("lectureButton" + id)
   htmlButton.click()
   htmlButton.remove()
}

function cancelLectureModal(id) {
   document.getElementById("lectureModal" + id).remove()
}

function saveLecture(id) {
   logicHandler.saveItem("lecture", id)
}

function removeLecture(id) {
   logicHandler.removeItem("lectures", id)
   document.getElementById("row" + id).remove()
}

function getEmptyLecture() {
   return {
      id: "Create",
      lectureName: "",
      moduleName: "",
      duration: "",
      lectureDates: [],
      lecturers: [],
      studyClass: ""
   }
}
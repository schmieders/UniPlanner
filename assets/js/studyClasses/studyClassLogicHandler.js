let logicHandler = new LogicHandler()
let modalHandler = new StudyClassModalHandler()

function renderStudyClassModal(id) {
    id = typeof id == "undefined" ? "Create" : id

    let studyClass = id == "Create" ? getEmptyStudyClass() : logicHandler.getItem("studyClasses", id)

    let startDateList = logicHandler.getAsDateList("lectureDates", "startDate", [studyClass.startDate])
    let endDateList = logicHandler.getAsDateList("lectureDates", "endDate", [studyClass.endDate])
    let semesterList = logicHandler.getAsDataList("semesters", "name", [studyClass.semester])
    let studyProgramList = logicHandler.getAsDataList("studyPrograms", "name", [studyClass.studyProgram])

    document.body.append(modalHandler.getStudyClassModal(studyClass, semesterList, startDateList, endDateList, studyProgramList))
    document.body.append(modalHandler.getStudyClassModalButton(id))
    let htmlButton = document.getElementById("studyClassButton" + id)
    htmlButton.click()
    htmlButton.remove()
}

function cancelStudyClassModal(id) {
    document.getElementById("studyClassModal" + id).remove()
}

function saveStudyClass(id) {
    logicHandler.saveItem("studyClass", id, "es")
}

function removeStudyClass(id) {
    logicHandler.removeItem("studyClasses", id)
    document.getElementById("row" + id).remove()
}

function getEmptyStudyClass() {
    return {
        id: "Create",
        name: "",
        startDate: "",
        endDate: "",
        semester: "",
        studyProgram: ""
    }
}
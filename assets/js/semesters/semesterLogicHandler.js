let logicHandler = new LogicHandler()
let modalHandler = new SemesterModalHandler()

function renderSemesterModal(id) {
    id = typeof id == "undefined" ? "Create" : id

    let semester = id == "Create" ? getEmptySemester() : logicHandler.getItem("semesters", id)

    let startDateList = logicHandler.getAsDateList("lectureDates", "startDate", [semester.startDate])
    let endDateList = logicHandler.getAsDateList("lectureDates", "endDate", [semester.endDate])

    let studyProgramList = logicHandler.getAsDataList("studyPrograms", "name", [semester.studyProgram])

    document.body.append(modalHandler.getSemesterModal(semester, startDateList, endDateList, studyProgramList))
    document.body.append(modalHandler.getSemesterModalButton(id))
    let htmlButton = document.getElementById("modalButton" + id)
    htmlButton.click()
    htmlButton.remove()
}

function cancelSemesterModal(id) {
    document.getElementById("semesterModal" + id).remove()
}

function saveSemester(id) {
    logicHandler.saveItem("semester", id)
}

function removeSemester(id) {
    logicHandler.removeItem("semesters", id)
    document.getElementById("row" + id).remove()
}

function getEmptySemester() {
    return {
        id: "Create",
        name: "",
        startDate: "",
        endDate: "",
        number: "",
        studyProgram: ""
    }
}
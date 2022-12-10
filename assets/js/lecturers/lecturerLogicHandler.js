let logicHandler = new LogicHandler()
let modalHandler = new LecturerModalHandler()

window.addEventListener('load', function () {
    if (this.window.location.search.includes("id=")) {
        renderLecturerModal(window.location.search.replace("?id=", ""))
    }
})

function renderLecturerModal(id) {
    id = typeof id == "undefined" ? "Create" : id

    let lecturer = id == "Create" ? getEmptyLecturer() : logicHandler.getItem("lecturers", id)

    let studyProgramList = logicHandler.getAsDataList("studyPrograms", "name", [lecturer.studyProgram])

    document.body.append(modalHandler.getLecturerModal(lecturer, studyProgramList))
    document.body.append(modalHandler.getLecturerModalButton(id))
    let htmlButton = document.getElementById("lecturerButton" + id)
    htmlButton.click()
    htmlButton.remove()
}

function cancelLecturerModal(id) {
    document.getElementById("lecturerModal" + id).remove()
    window.location.href = window.location.href.replace(window.location.search, "")
}

function saveLecturer(id) {
    logicHandler.saveItem("lecturer", id)
}

function removeLecturer(id) {
    logicHandler.removeItem("lecturers", id)
    document.getElementById("row" + id).remove()
}

function getEmptyLecturer() {
    return {
        id: "Create",
        firstName: "",
        lastName: "",
        email: "",
        studyProgram: ""
    }
}
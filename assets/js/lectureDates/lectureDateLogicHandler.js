let logicHandler = new LogicHandler()
let modalHandler = new LectureDateModalHandler()

function renderLectureDateModal(id) {
    id = typeof id == "undefined" ? "Create" : id

    let lectureDate = id == "Create" ? getEmptyLectureDate() : logicHandler.getItem("lectureDates", id)

    document.body.append(modalHandler.getLectureDateModal(lectureDate))
    document.body.append(modalHandler.getLectureDateModalButton(id))
    let htmlButton = document.getElementById("modalButton" + id)
    htmlButton.click()
    htmlButton.remove()
}

function cancelLectureDateModal(id) {
    document.getElementById("lectureDateModal" + id).remove()
}

function saveLectureDate(id) {
    logicHandler.saveItem("lectureDate", id)
}

function removeLectureDate(id) {
    logicHandler.removeItem("lectureDates", id)
    document.getElementById("row" + id).remove()
}

function getEmptyLectureDate() {
    return {
        id: "Create",
        startDate: "",
        endDate: ""
    }
}
let logicHandler = new LogicHandler()
let modalHandler = new StudyProgramModalHandler()

function renderStudyProgramModal(id) {
    id = typeof id == "undefined" ? "Create" : id

    let studyProgram = id == "Create" ? getEmptyStudyProgram() : logicHandler.getItem("studyPrograms", id)

    document.body.append(modalHandler.getStudyProgramModal(studyProgram))
    document.body.append(modalHandler.getStudyProgramModalButton(id))
    let htmlButton = document.getElementById("modalButton" + id)
    htmlButton.click()
    htmlButton.remove()
}

function cancelStudyProgramModal(id) {
    document.getElementById("studyProgramModal" + id).remove()
}

function saveStudyProgram(id) {
    logicHandler.saveItem("studyProgram", id)
}

function removeStudyProgram(id) {
    logicHandler.removeItem("studyPrograms", id)
    document.getElementById("row" + id).remove()
}

function getEmptyStudyProgram() {
    return {
        id: "Create",
        name: "",
        short: ""
    }
}
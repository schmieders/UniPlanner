let logicHandler = new LogicHandler()

window.addEventListener('load', function () {
   let dropdown = this.document.getElementById("dropdown")
   logicHandler.getItems("lecturers").forEach(lecturer => {
      dropdown.innerHTML += `<li><a class="dropdown-item" onclick="selectLecturer('${lecturer.id}')">${lecturer.firstName} ${lecturer.lastName}</a></li>`
   })
})

function selectLecturer(id) {
   let lecturer = logicHandler.getItem("lecturers", id)
   document.getElementById("dropdown-button").innerText = `${lecturer.firstName} ${lecturer.lastName}`

   document.getElementById("lecturerName").innerText = `${lecturer.firstName} ${lecturer.lastName}`
   document.getElementById("lecturerTitle").innerText = "Prof. Dr."

   document.getElementById("lecturerMail").innerHTML = `<a href="mailto:${lecturer.email}">${lecturer.email}</a>`
   document.getElementById("lecturerProgram").innerText = logicHandler.getItem("studyPrograms", lecturer.studyProgram).name
   document.getElementById("lecturerOther").innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

   let btn = document.getElementById("lecturerEditButton")
   btn.classList.remove("disabled", "placeholder")
   btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil" viewBox = "0 0 16 16" ><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" /></svg>`
   btn.onclick = () => window.location.href = window.location.href.replace("dashboard", "lecturers") + `?id=${id}`

   let html = ""
   let lectures = logicHandler.getItems("lectures")
   lectures.forEach(lecture => {
      lecture.lectureDates.forEach(lectureDate => {
         let date = logicHandler.getItem("lectureDates", lectureDate)
         if (lecture.lecturers.includes(id)) {
            html = html + `
            <li class="lecture">${lecture.lectureName} - ${logicHandler.getItem("studyClasses", lecture.studyClass).name} (${logicHandler.formatDateTime(date.startDate)} - ${logicHandler.formatDateTime(date.endDate)})</li>
            `
         }
      })

   })
   document.querySelector(".lectureList").innerHTML = html

   document.getElementsByClassName("sidebar")[0].style.minHeight = `${document.body.offsetHeight - 66}px`
}
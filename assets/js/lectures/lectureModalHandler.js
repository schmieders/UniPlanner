class LectureModalHandler {

   getLectureModal(lecture, lectureDateList, lecturerList, studyClassList) {
      let heading = lecture.id == "Create" ? "Neue Vorlesung erstellen" : `Vorlesung #${lecture.id} bearbeiten`
      let modal = `
      <div class="modal modal-lg fade" id="lectureModal${lecture.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="lectureModalLabel${lecture.id}" aria-hidden="true">
         <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="lectureModalLabel${lecture.id}">${heading}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Abbrechen" onclick="cancelLectureModal('${lecture.id}')"></button>
               </div>
               <div class="modal-body">
                  <p class="error"><i class="bi bi-exclamation-circle"></i> Bitte alle Felder ausfüllen.</p>
                  <form id="lectureForm${lecture.id}">
                     <div class="mb-3">
                        <label for="lectureNameInput" class="form-label">Vorlesungs-Name</label>
                        <input type="text" class="form-control modalInput" id="lectureNameInput" name="lectureName" value="${lecture.lectureName}" >
                     </div>
                     <div class="mb-3">
                        <label for="moduleNameInput" class="form-label">Modul-Name</label>
                        <input type="text" class="form-control modalInput" id="moduleNameInput" name="moduleName" value="${lecture.moduleName}" >
                     </div>
                     <div class="mb-3">
                        <label for="durationInput" class="form-label">Dauer</label>
                        <input type="number" min="0" class="form-control modalInput" id="durationInput" name="duration" value="${lecture.duration}" >
                     </div>
                     <div class="mb-3">
                        <label for="lectureDatesInput" class="form-label">Termine</label>
                        <select  class="form-select modalInput" id="lectureDatesInput" name="lectureDates" multiple >
                           ${lectureDateList}
                        </select>
                     </div>
                     <div class="mb-3">
                        <label for="lecturersInput" class="form-label">Dozenten</label>
                        <select class="form-select modalInput" id="lecturersInput" name="lecturers" multiple >
                           ${lecturerList}
                        </select>
                     </div>
                     <div class="mb-3">
                        <label for="studyClassInput" class="form-label">Jahrgang</label>
                        <select class="form-select modalInput" id="studyClassInput" name="studyClass" >
                           <option selected disabled hidden>Bitte wählen</option>
                           ${studyClassList}
                        </select>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="cancelLectureModal('${lecture.id}')">Abbrechen</button>
                  <button type="button" class="btn btn-secondary" onclick="saveLecture('${lecture.id}')">Speichern</button>
               </div>
            </div>
         </div>
      </div>
      `

      let htmlModal = document.createElement("div")
      htmlModal.innerHTML = modal
      return htmlModal
   }

   getLectureModalButton(id) {
      let button = `
      <button type="button" data-bs-toggle="modal" data-bs-target="#lectureModal${id}" id="lectureButton${id}" style="display: none;"></button>
      `

      let htmlButton = document.createElement("div")
      htmlButton.innerHTML = button
      return htmlButton
   }
}

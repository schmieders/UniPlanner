class LecturerModalHandler {

   getLecturerModal(lecturer, studyProgramList) {
      let heading = lecturer.id == "Create" ? "Neuen Dozent erstellen" : `Dozent #${lecturer.id} bearbeiten`
      let modal = `
      <div class="modal modal-lg fade" id="lecturerModal${lecturer.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="lecturerModalLabel${lecturer.id}" aria-hidden="true">
         <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="lecturerModalLabel${lecturer.id}">${heading}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Abbrechen" onclick="cancelLecturerModal('${lecturer.id}')"></button>
               </div>
               <div class="modal-body">
                  <p class="error"><i class="bi bi-exclamation-circle"></i> Bitte alle Felder ausfüllen.</p>
                  <form id="lecturerForm${lecturer.id}">
                     <div class="mb-3">
                        <label for="firstNameInput" class="form-label">Vorname</label>
                        <input type="text" class="form-control modalInput" id="firstNameInput" name="firstName" value="${lecturer.firstName}" >
                     </div>
                     <div class="mb-3">
                        <label for="lastNameInput" class="form-label">Nachname</label>
                        <input type="text" class="form-control modalInput" id="lastNameInput" name="lastName" value="${lecturer.lastName}" >
                     </div>
                     <div class="mb-3">
                        <label for="emailInput" class="form-label">Email</label>
                        <input type="email" class="form-control modalInput" id="emailInput" name="email" value="${lecturer.email}" >
                     </div>
                     <div class="mb-3">
                        <label for="studyProgramInput" class="form-label">Studiengang</label>
                        <select class="form-select modalInput" id="studyProgramInput" name="studyProgram" >
                           <option selected disabled hidden>Bitte wählen</option>
                           ${studyProgramList}
                        </select>
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="cancelLecturerModal('${lecturer.id}')">Abbrechen</button>
                  <button type="button" class="btn btn-secondary" onclick="saveLecturer('${lecturer.id}')">Speichern</button>
               </div>
            </div>
         </div>
      </div>
      `

      let htmlModal = document.createElement("div")
      htmlModal.innerHTML = modal
      return htmlModal
   }

   getLecturerModalButton(id) {
      let button = `
      <button type="button" data-bs-toggle="modal" data-bs-target="#lecturerModal${id}" id="lecturerButton${id}" style="display: none;"></button>
      `

      let htmlButton = document.createElement("div")
      htmlButton.innerHTML = button
      return htmlButton
   }
}

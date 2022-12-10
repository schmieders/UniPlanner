class SemesterModalHandler {
   getSemesterModal(semester, startDateList, endDateList, studyProgramList) {
      let heading = semester.id == "Create" ? "Neues Semester erstellen" : `Semester #${semester.id} bearbeiten`
      let modal = `
      <div class="modal modal-lg fade" id="semesterModal${semester.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="semesterModalLabel${semester.id}" aria-hidden="true">
         <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="semesterModalLabel${semester.id}">${heading}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Abbrechen" onclick="cancelSemesterModal('${semester.id}')"></button>
               </div>
               <div class="modal-body">
                  <p class="error"><i class="bi bi-exclamation-circle"></i> Bitte alle Felder ausfüllen.</p>
                  <form id="semesterForm${semester.id}">
                     <div class="mb-3">
                        <label for="semesterNameInput" class="form-label">Semester-Name</label>
                        <input type="text" class="form-control modalInput" id="semesterNameInput" name="name" value="${semester.name}" >
                     </div>
                     <div class="mb-3">
                        <label for="startDateInput" class="form-label">Startdatum</label>
                        <select class="form-select modalInput" id="startDateInput" name="startDate">
                           <option selected hidden disabled>Bitte wählen</option>
                           ${startDateList}
                        </select>
                     </div>
                     <div class="mb-3">
                        <label for="endDateInput" class="form-label">Enddatum</label>
                        <select class="form-select modalInput" id="endDateInput" name="endDate">
                           <option selected hidden disabled>Bitte wählen</option>
                           ${endDateList}
                        </select>
                     </div>
                     <div class="mb-3">
                        <label for="semesterNumberInput" class="form-label">Semester (Nummer)</label>
                        <input type="number" min="0" class="form-control modalInput" id="semesterNumberInput" name="number" value="${semester.number}" >
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
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="cancelSemesterModal('${semester.id}')">Abbrechen</button>
                  <button type="button" class="btn btn-secondary" onclick="saveSemester('${semester.id}')">Speichern</button>
               </div>
            </div>
         </div>
      </div>
      `

      let htmlModal = document.createElement("div")
      htmlModal.innerHTML = modal
      return htmlModal
   }

   getSemesterModalButton(id) {
      let button = `
        <button type="button" data-bs-toggle="modal" data-bs-target="#semesterModal${id}" id="modalButton${id}" style="display: none;"></button>
        `
      let htmlButton = document.createElement("div")
      htmlButton.innerHTML = button
      return htmlButton
   }
}
class StudyClassModalHandler {

   getStudyClassModal(studyClass, semesterList, startDateList, endDateList, studyProgramList) {
      let heading = studyClass.id == "Create" ? "Neuen Jahrgang erstellen" : `Jahrgang #${studyClass.id} bearbeiten`
      let modal = `
      <div class="modal modal-lg fade" id="studyClassModal${studyClass.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="lecturerModalLabel${studyClass.id}" aria-hidden="true">
         <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="studyClassModalLabel${studyClass.id}">${heading}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Abbrechen" onclick="cancelStudyClassModal('${studyClass.id}')"></button>
               </div>
               <div class="modal-body">
                  <p class="error"><i class="bi bi-exclamation-circle"></i> Bitte alle Felder ausfüllen.</p>
                  <form id="studyClassForm${studyClass.id}">
                     <div class="mb-3">
                        <label for="studyClassNameInput" class="form-label">Name</label>
                        <input type="text" class="form-control modalInput" id="studyClassNameInput" name="name" value="${studyClass.name}" >
                     </div>
                     <div class="mb-3">
                        <label for="startDateInput" class="form-label">Startdatum</label>
                        <select class="form-select modalInput" id="startDateInput" name="startDate" >
                           <option selected disabled hidden>Bitte wählen</option>
                           ${startDateList}
                        </select>
                     </div>
                     <div class="mb-3">
                        <label for="endDateInput" class="form-label">Enddatum</label>
                        <select class="form-select modalInput" id="endDateInput" name="endDate" >
                           <option selected disabled hidden>Bitte wählen</option>
                           ${endDateList}
                        </select>
                     </div>
                     <div class="mb-3">
                        <label for="semesterInput" class="form-label">Semester</label>
                        <select class="form-select modalInput" id="semesterInput" name="semester">
                           <option selected disabled hidden>Bitte wählen</option>
                           ${semesterList}
                        </select>
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
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="cancelStudyClassModal('${studyClass.id}')">Abbrechen</button>
                  <button type="button" class="btn btn-secondary" onclick="saveStudyClass('${studyClass.id}')">Speichern</button>
               </div>
            </div>
         </div>
      </div>
      `

      let htmlModal = document.createElement("div")
      htmlModal.innerHTML = modal
      return htmlModal
   }

   getStudyClassModalButton(id) {
      let button = `
      <button type="button" data-bs-toggle="modal" data-bs-target="#studyClassModal${id}" id="studyClassButton${id}" style="display: none;"></button>
      `

      let htmlButton = document.createElement("div")
      htmlButton.innerHTML = button
      return htmlButton
   }
}

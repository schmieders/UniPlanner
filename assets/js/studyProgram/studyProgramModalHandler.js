class StudyProgramModalHandler {

   getStudyProgramModal(studyProgram) {
      let heading = studyProgram.id == "Create" ? "Neuen Studiengang erstellen" : `Studiengang #${studyProgram.id} bearbeiten`
      let modal = `
      <div class="modal modal-lg fade" id="studyProgramModal${studyProgram.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="studyProgramModalLabel${studyProgram.id}" aria-hidden="true">
         <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="studyProgramModalLabel${studyProgram.id}">${heading}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Abbrechen" onclick="cancelStudyProgramModal('${studyProgram.id}')"></button>
               </div>
               <div class="modal-body">
                  <p class="error"><i class="bi bi-exclamation-circle"></i> Bitte alle Felder ausfüllen.</p>
                  <form id="studyProgramForm${studyProgram.id}">
                     <div class="mb-3">
                        <label for="nameInput" class="form-label">Name</label>
                        <input type="text" class="form-control modalInput" id="nameInput" name="name" value="${studyProgram.name}" >
                     </div>
                     <div class="mb-3">
                        <label for="shortInput" class="form-label">Kürzel</label>
                        <input type="text" class="form-control modalInput" id="shortInput" name="short" value="${studyProgram.short}" >
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="cancelStudyProgramModal('${studyProgram.id}')">Abbrechen</button>
                  <button type="button" class="btn btn-secondary" onclick="saveStudyProgram('${studyProgram.id}')">Speichern</button>
               </div>
            </div>
         </div>
      </div>
      `

      let htmlModal = document.createElement("div")
      htmlModal.innerHTML = modal
      return htmlModal
   }

   getStudyProgramModalButton(id) {
      let button = `
        <button type="button" data-bs-toggle="modal" data-bs-target="#studyProgramModal${id}" id="modalButton${id}" style="display: none;"></button>
        `

      let htmlButton = document.createElement("div")
      htmlButton.innerHTML = button
      return htmlButton
   }
}
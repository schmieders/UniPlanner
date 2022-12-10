class LectureDateModalHandler {
   getLectureDateModal(lectureDate) {
      let heading = lectureDate.id == "Create" ? "Neuen Termin erstellen" : `Termin #${lectureDate.id} bearbeiten`

      let modal = `
      <div class="modal modal-lg fade" id="lectureDateModal${lectureDate.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="lectureDateModalLabel${lectureDate.id}" aria-hidden="true">
         <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
               <div class="modal-header">
                  <h1 class="modal-title fs-5" id="lectureDateModalLabel${lectureDate.id}">${heading}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Abbrechen" onclick="cancelLectureDateModal('${lectureDate.id}')"></button>
               </div>
               <div class="modal-body">
                  <p class="error"><i class="bi bi-exclamation-circle"></i> Bitte alle Felder ausfüllen.</p>
                  <form id="lectureDateForm${lectureDate.id}">
                     <div class="mb-3">
                        <label for="startDateInput" class="form-label">Startdatum</label>
                        <input type="datetime-local" class="form-control modalInput" id="startDateInput" name="startDate" value="${lectureDate.startDate}" >
                     </div>
                     <div class="mb-3">
                        <label for="endDateInput" class="form-label">Enddatum</label>
                        <input type="datetime-local" class="form-control modalInput" id="endDateInput" name="endDate" value="${lectureDate.endDate}" >
                     </div>
                  </form>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="cancelLectureDateModal('${lectureDate.id}')">Abbrechen</button>
                  <button type="button" class="btn btn-secondary" onclick="saveLectureDate('${lectureDate.id}')">Speichern</button>
               </div>
            </div>
         </div>
      </div>
      `

      let htmlModal = document.createElement("div")
      htmlModal.innerHTML = modal
      return htmlModal
   }

   getLectureDateModalButton(id) {
      let button = `
        <button type="button" data-bs-toggle="modal" data-bs-target="#lectureDateModal${id}" id="modalButton${id}" style="display: none;"></button>
        `

      let htmlButton = document.createElement("div")
      htmlButton.innerHTML = button
      return htmlButton
   }
}
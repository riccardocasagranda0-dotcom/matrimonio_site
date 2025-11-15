document.addEventListener("DOMContentLoaded", () => {
  const tipoSelect = document.getElementById("tipo");
  const campiDiv = document.getElementById("campi-dinamici");

  tipoSelect.addEventListener("change", () => {
    campiDiv.innerHTML = ""; // reset

    if (tipoSelect.value === "single") {
      campiDiv.innerHTML = `
        <label>Nome:</label><input type="text" name="nome" required>
        <label>Cognome:</label><input type="text" name="cognome" required>
        <label>Email:</label><input type="email" name="email" required>
        <label>Allergie:</label><input type="text" name="allergie">
      `;
    }

    if (tipoSelect.value === "coppia") {
      campiDiv.innerHTML = `
        <label>Nome Persona 1:</label><input type="text" name="nome1" required>
        <label>Cognome Persona 1:</label><input type="text" name="cognome1" required>
        <label>Allergie Persona 1:</label><input type="text" name="allergie1">
        <label>Nome Persona 2:</label><input type="text" name="nome2" required>
        <label>Cognome Persona 2:</label><input type="text" name="cognome2" required>
        <label>Allergie Persona 2:</label><input type="text" name="allergie2">
      `;
    }

    if (tipoSelect.value === "famiglia") {
      campiDiv.innerHTML = `
        <label>Nome Famiglia:</label><input type="text" name="nome_famiglia" required>
        <label>Numero persone:</label><input type="number" name="numero_persone" min="1" required>
        <label>Dettagli persone:</label><textarea name="persone_dettagli" placeholder="Nome e allergie di ciascuno"></textarea>
      `;
    }
  });
});

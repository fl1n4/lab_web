document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    // Получаем данные из формы
    const name = document.getElementById('name').value;
    const studentId = document.getElementById('studentId').value; // Исправлено
    const group = document.getElementById('group').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const admissionForm = document.getElementById('admissionForm').value; // Исправлено
    const specialization = document.getElementById('specialization').value; // Исправлено

    // Создаем новую строку
    const tableRow = document.createElement('tr');

    // Добавляем ячейки в строку
    tableRow.innerHTML = `
        <td>${document.getElementById('studentTableBody').rows.length + 1}</td>
        <td>${name}</td>
        <td>${studentId}</td>
        <td>${group}</td>
        <td>${gender}</td>
        <td>${age}</td>
        <td>${admissionForm}</td>
        <td>${specialization}</td>
    `;

    // Добавляем строку в таблицу
    document.getElementById('studentTableBody').appendChild(tableRow);

    // Очищаем форму
    document.getElementById('studentForm').reset();
});
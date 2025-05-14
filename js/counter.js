document.getElementById('downloadBtn').addEventListener('click', generatePDF);

function generatePDF() {
  const resumeClone = document.querySelector('.resume-container').cloneNode(true);
  
  // Удаляем кнопки и атрибуты contenteditable
  resumeClone.querySelector('.resume-actions').remove();
  resumeClone.querySelectorAll('[contenteditable="true"]').forEach(el => {
    el.removeAttribute('contenteditable');
  });
  
  // Создаем стили для PDF
  const styles = `
    <style>
      body { font-family: Arial, sans-serif; margin: 0; padding: 0; }
      .resume-container { max-width: 800px; margin: 0 auto; padding: 20px; }
      .resume-header { background-color: #4285f4; color: white; padding: 2rem; text-align: center; }
      .resume-header h1 { margin: 0; font-size: 2.5rem; }
      .resume-header h2 { margin: 0.5rem 0 0; font-weight: 400; font-size: 1.5rem; }
      .resume-content { padding: 2rem; }
      .resume-section { margin-bottom: 2rem; page-break-inside: avoid; }
      .resume-section h3 { color: #4285f4; border-bottom: 2px solid #4285f4; padding-bottom: 0.5rem; }
      ul { padding-left: 20px; }
      @media print {
        button { display: none; }
      }
    </style>
  `;
  
  // Создаем HTML для PDF
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Резюме - ${document.getElementById('name').textContent}</title>
        <meta charset="UTF-8">
        ${styles}
      </head>
      <body>
        ${resumeClone.outerHTML}
      </body>
    </html>
  `;
  
  // Открываем новое окно с HTML для печати
  const printWindow = window.open('', '_blank');
  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
  
  // Даем время на загрузку контента перед печатью
  setTimeout(() => {
    printWindow.print();
  }, 500);
}
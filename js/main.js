// Сохраняем оригинальное содержимое резюме
const originalContent = {
  name: document.getElementById('name').innerHTML,
  position: document.getElementById('position').innerHTML,
  phone: document.getElementById('phone').innerHTML,
  email: document.getElementById('email').innerHTML,
  city: document.getElementById('city').innerHTML,
  skills: document.getElementById('skills').innerHTML,
  experience: document.getElementById('experience').innerHTML,
  education: document.getElementById('education').innerHTML
};

// Добавляем анимацию при редактировании
document.querySelectorAll('[contenteditable="true"]').forEach(element => {
  element.addEventListener('focus', () => {
    element.style.animation = 'pulse 1s infinite alternate';
  });
  
  element.addEventListener('blur', () => {
    element.style.animation = '';
    // Сохраняем изменения в localStorage
    saveResume();
  });
});

// Функция для сохранения резюме в localStorage
function saveResume() {
  const resumeData = {
    name: document.getElementById('name').innerHTML,
    position: document.getElementById('position').innerHTML,
    phone: document.getElementById('phone').innerHTML,
    email: document.getElementById('email').innerHTML,
    city: document.getElementById('city').innerHTML,
    skills: document.getElementById('skills').innerHTML,
    experience: document.getElementById('experience').innerHTML,
    education: document.getElementById('education').innerHTML
  };
  
  localStorage.setItem('resumeData', JSON.stringify(resumeData));
}

// Функция для загрузки резюме из localStorage
function loadResume() {
  const savedData = localStorage.getItem('resumeData');
  if (savedData) {
    const resumeData = JSON.parse(savedData);
    
    document.getElementById('name').innerHTML = resumeData.name;
    document.getElementById('position').innerHTML = resumeData.position;
    document.getElementById('phone').innerHTML = resumeData.phone;
    document.getElementById('email').innerHTML = resumeData.email;
    document.getElementById('city').innerHTML = resumeData.city;
    document.getElementById('skills').innerHTML = resumeData.skills;
    document.getElementById('experience').innerHTML = resumeData.experience;
    document.getElementById('education').innerHTML = resumeData.education;
  }
}

// Кнопка сброса
document.getElementById('resetBtn').addEventListener('click', () => {
  if (confirm('Вы уверены, что хотите сбросить все изменения?')) {
    document.getElementById('name').innerHTML = originalContent.name;
    document.getElementById('position').innerHTML = originalContent.position;
    document.getElementById('phone').innerHTML = originalContent.phone;
    document.getElementById('email').innerHTML = originalContent.email;
    document.getElementById('city').innerHTML = originalContent.city;
    document.getElementById('skills').innerHTML = originalContent.skills;
    document.getElementById('experience').innerHTML = originalContent.experience;
    document.getElementById('education').innerHTML = originalContent.education;
    
    localStorage.removeItem('resumeData');
  }
});

// Загружаем сохраненное резюме при загрузке страницы
window.addEventListener('DOMContentLoaded', loadResume);

// Добавляем стиль для анимации pulse
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    from { box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.4); }
    to { box-shadow: 0 0 0 10px rgba(66, 133, 244, 0); }
  }
`;
document.head.appendChild(style);
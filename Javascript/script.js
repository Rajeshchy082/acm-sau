function openModal(id) {
  document.getElementById(id).classList.remove("hidden");
}

function closeModal(id) {
  document.getElementById(id).classList.add("hidden");
}

function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');

  // Toggle modal background for dark mode as well
  const modals = document.querySelectorAll('.fixed');
  modals.forEach(modal => {
    if (document.documentElement.classList.contains('dark')) {
      modal.classList.add('bg-black', 'bg-opacity-60');
    } else {
      modal.classList.remove('bg-black', 'bg-opacity-60');
    }
  });
}

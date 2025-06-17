  function showSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function toggleJob(element) {
    const entry = element.closest('.job-entry');
    entry.classList.toggle('expanded');
    element.textContent = entry.classList.contains('expanded') ? "Show less ▲" : "Show more ▼";
  }



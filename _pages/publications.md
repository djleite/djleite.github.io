---
layout: page
title: Publications
permalink: /publications/
---

<div id="archives">
  <section id="archive">
    <ol id="publication-list"></ol>
  </section>
</div>

<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script>
  async function loadYAML() {
    const response = await fetch('{{ site.baseurl }}/publications.yaml');
    const text = await response.text();
    const data = jsyaml.load(text);
    const container = document.getElementById('publication-list');
    // Sort by year descending
    data.sort((a, b) => (b.date || 0) - (a.date || 0));
    data.forEach(pub => {
      // Bolden "Leite DJ"
      let authors = pub.authors || '';
      authors = authors.replace(/\bLeite DJ\b/g, '<b>Leite DJ</b>');
      let output = `${authors}`;
      if (pub.date) output += ` (${pub.date})`;
      if (pub.title && pub.URL) {
        output += ` <a href="${pub.URL}" target="_blank">${pub.title}</a>`;
      } else if (pub.title) {
        output += ` ${pub.title}`;
      }
      if (pub.journal) output += `. <em>${pub.journal}</em>`;
      if (pub.additional) output += `. ${pub.additional}`;
      if (pub.DOI) output += `. DOI: ${pub.DOI}`;
      const li = document.createElement('li');
      li.innerHTML = output;
      li.style.marginBottom = '1.5em';
      container.appendChild(li);
    });
  }
  loadYAML();
</script>

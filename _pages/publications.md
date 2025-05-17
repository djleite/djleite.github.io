---
layout: page
title: Publications
permalink: /publications/
---


<div id="archives">
  <section id="archive">
    <h3>Publications</h3>
    <div id="publication-list"></div>
  </section>
</div>

<script src="https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js"></script>
<script>
  async function loadYAML() {
    const response = await fetch('{{ site.baseurl }}/publications.yaml');
    const text = await response.text();
    const data = jsyaml.load(text);

    const container = document.getElementById('publication-list');

    // Optional: Sort by date descending
    data.sort((a, b) => (b.date > a.date ? 1 : -1));

    data.forEach(pub => {
      const pubHTML = `
        <p>
          ${pub.authors} (${pub.date}) 
          <a href="${pub.URL}" target="_blank">${pub.title}</a>. 
          <em>${pub.journal}</em>. ${pub.additional}. 
          DOI: ${pub.DOI}
        </p>
      `;
      container.innerHTML += pubHTML;
    });
  }

  loadYAML();
</script>
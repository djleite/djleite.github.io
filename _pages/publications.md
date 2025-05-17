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



<div id="archives">
  <section id="archive">
     <h3>Most Recent Posts</h3>
      {%for post in site.posts %}
      {% unless post.next %}
      <ul class="this">
          {% else %}
          {% capture month %}{{ post.date | date: '%B %Y' }}{% endcapture %}
          {% capture nmonth %}{{ post.next.date | date: '%B %Y' }}{% endcapture %}
          {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
          {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
          {% if year != nyear %}
      </ul>
      <h2 style="text-align:left;">{{ post.date | date: '%Y' }}</h2>
      <ul class="past">
          {% endif %}
          {% if month != nmonth %}
          <h3 style="text-align:left;">{{ post.date | date: '%B %Y' }}</h3>
          {% endif %}
          {% endunless %}
          <p><b><a href="{{ site.baseurl }}{{ post.url }}">{% if post.title and post.title != "" %}{{post.title}}{% else %}{{post.excerpt |strip_html}}{%endif%}</a></b> - {% if post.date and post.date != "" %}{{ post.date | date: "%e %B %Y" }}{%endif%}</p>
          {% endfor %}
      </ul>
    <h3>Oldest Posts</h3>
  </section>
</div>

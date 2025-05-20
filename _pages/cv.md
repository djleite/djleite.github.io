---
layout: page
title: Curriculum Vitae
permalink: /cv/
---
<div class="cv-container">
  <!-- Sidebar -->
  <aside class="cv-sidebar">
    <img src="{{ '/images/DJL_ID_photo.webp' | relative_url }}" alt="DJ Leite">
    <h2>Dr. Daniel J. Leite</h2>
    <p>Research Bioinformatician</p>
    <a class="cv-button" onclick="showSection('skills')">Skills</a>
    <a class="cv-button" onclick="showSection('experience')">Experience</a>
    <a class="cv-button" onclick="showSection('education')">Education</a>
    <a class="cv-button" onclick="showSection('other')">Other</a>
    <a class="cv-button" href="https://github.com/djleite/djleite.github.io/raw/main/files/DJ_Leite_CV.pdf" target="_blank">Download CV</a>
  </aside>

  <!-- Main Content -->
  <div class="cv-content">
    <!-- Skills -->
    <div id="skills" class="cv-section active">
      <h2>Skills</h2>
        <h3>Management:</h3>
          <ul>
            <li>Conceptualisation</li>
            <li>Team coordination</li>
            <li>Experimental design</li>
            <li>Project planning</li>
            <li>Scheduling</li>
            <li>Resources management</li>
            <li>Fund management</li>
            <li>Data archiving</li>
            <li>CRM</li>
            <li>Agile</li>
          </ul>
        <h3>Communication:</h3>
            <ul>
            <li>Presentation</li>
            <li>Teaching</li>
            <li>Mentoring</li>
            <li>Collaborating</li>
            <li><a href="https://djleite.github.io/publications" target="_blank">Publishing</a> (cited &gt;700 times)</li>
          </ul>
        <h3>Computational:</h3>
          <ul>
            <li>Bioinformatics</li>
            <li>Python</li>
            <li>R</li>
            <li>Bash</li>
            <li>HPC</li>
            <li>Linux/Mac/Win OS</li>
            <li>Command-line</li>
            <li>Tool development</li>
            <li>Genome assembly</li>
            <li>Genome annotation</li>
            <li>Single-cell sequencing</li>
            <li>Non-coding DNA/RNA annotation</li>
            <li>Transcriptomics</li>
            <li>Phylogenetics</li>
            <li>SNP/Variant Calling</li>
            <li>Visualisation</li>
            <li>Statistics</li>
            <li>Microsoft Office</li>
            <li>Data archiving</li>
            <li>GitHub</li>
          </ul>
        <h3>Laboratory techniques:</h3>
          <ul>
            <li>DNA/RNA extraction</li>
            <li>NGS library preparation</li>
            <li>PCR</li>
            <li>Cloning</li>
            <li>in-situ hybridisation</li>
            <li>Molecular biology</li>
            <li>Immunohistochemistry</li>
            <li>Microscopy (bright-field/confocal/SEM/TEM)</li>
            <li>Invertebrate husbandry</li>
            <li>Species identification</li>
          </ul>
    </div>
    # EXPERIENCE

## Senior Bioinformatician and Business Developer - Pragmatic Genomics (2024 May - Oct)

### Responsibilities:
- Developed genomics SaaS tools for cloud-based analyses
- Conceptualised ideas, reviewed and tested using agile practices and GitHub version control
- Established and managed high and low-touch sales funnels
- Improved CRM (Hubspot), customer engagement, automation (Make), and feedback integration
- Optimised website (HTML/CSS), improved design, SEO (Lighthouse), online resources (blogs, tutorials, functionality information), and branding

### Achievements:
- Improved front/back-end tool functionality, UX, security, and ensured biological and scientific rigour
- Increased B2B and B2C sales over £50k pa via improved sales funnels and CRM methods
- Overhauled website content, performance, and resources to attract and support customers


<!-- Experience -->
<div id="experience" class="cv-section">
  <h2>Experience</h2>

  <div class="job-entry">
    <div class="job-header">
      <div class="job-title">Senior Bioinformatician and Business Developer</div>
      <div class="job-date">2024 May – Oct</div>
    </div>
    <div class="job-place">Pragmatic Genomics</div>
    <div class="toggle-btn" onclick="toggleJob(this)">Show more ▼</div>
    <div class="job-description">
      <h4>Responsibilities</h4>
      <ul>
        <li>Led bioinformatics pipelines for pathogen surveillance</li>
        <li>Developed workflows for high-throughput genomics</li>
      </ul>
      <h4>Achievements</h4>
      <ul>
        <li>Reduced analysis time by 40% via optimized pipelines</li>
        <li>Established successful collaborations with three biotech firms</li>
      </ul>
    </div>
  </div>

  <div class="job-entry">
    <div class="job-header">
      <div class="job-title">Postdoctoral Researcher</div>
      <div class="job-date">2019 – 2022</div>
    </div>
    <div class="job-place">University College London</div>
    <div class="toggle-btn" onclick="toggleJob(this)">Show more ▼</div>
    <div class="job-description">
      <h4>Responsibilities</h4>
      <ul>
        <li>Designed evolutionary models of RNA virus mutation</li>
        <li>Maintained reproducible research codebase</li>
      </ul>
      <h4>Achievements</h4>
      <ul>
        <li>Published 3 peer-reviewed papers in high-impact journals</li>
        <li>Presented findings at 5 international conferences</li>
      </ul>
    </div>
  </div>
</div>
    <!-- Education -->
    <div id="education" class="cv-section">
      <h2>Education</h2>
      <div class="job-entry expanded">
        <div class="job-header">
          <div class="job-title">PhD in Bioinformatics</div>
          <div class="job-date">2015 – 2019</div>
        </div>
        <div class="job-place">University of Cambridge</div>
        <div class="job-description">
          <ul>
            <li>Thesis on computational models of viral evolution</li>
            <li>Published in top-tier journals</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Other -->
    <div id="other" class="cv-section">
      <h2>Other</h2>
      <ul>
        <li>Public speaker on open science</li>
        <li>Contributor to open-source genomics tools</li>
      </ul>
    </div>
  </div>
</div>

<!-- Styles -->
<style>
  .cv-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .cv-sidebar {
    background-color: #e6f4ea;
    padding: 1.5rem;
    border-radius: 1rem;
    width: 260px;
    text-align: center;
    flex-shrink: 0;
  }

  .cv-sidebar img {
    width: 100%;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  .cv-sidebar h2 {
    margin-bottom: 0.2rem;
    font-size: 1.4rem;
  }

  .cv-sidebar p {
    font-size: 1rem;
    color: #4a4a4a;
    margin-bottom: 1rem;
  }

  .cv-button {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
    padding: 0.6rem 1rem;
    background: white;
    border: 2px solid #2e7d32;
    color: #2e7d32;
    font-weight: bold;
    border-radius: 0.8rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
  }

  .cv-button:hover {
    background-color: #cdecd1;
  }

  .cv-content {
    flex: 1;
    min-width: 300px;
  }

  .cv-section {
    display: none;
    margin-bottom: 2rem;
  }

  .cv-section.active {
    display: block;
  }

  .job-entry {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 1rem;
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-weight: bold;
  }

  .job-title {
    font-size: 1.1rem;
  }

  .job-place {
    font-style: italic;
    color: #555;
    margin-bottom: 0.5rem;
  }

  .job-description {
    display: none;
    padding-left: 0.5rem;
  }

  .job-entry.expanded .job-description {
    display: block;
  }

  .job-entry .toggle-btn {
    color: #2e7d32;
    font-size: 0.9rem;
    cursor: pointer;
    margin-top: 0.3rem;
  }

</style>



<!-- JS for Tab Switching -->
<script>
  function showSection(id) {
    document.querySelectorAll('.cv-section').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }

  function toggleJob(element) {
    const entry = element.closest('.job-entry');
    entry.classList.toggle('expanded');
    element.textContent = entry.classList.contains('expanded') ? "Show less ▲" : "Show more ▼";
  }
</script>


<!-->
[Skills](/cv#skills)

[Experience](/cv#experience)

[Education](/cv#education)

[Other](/cv#other)

***

# SKILLS

## Management: 
- Conceptualisation
- Team coordination
- Experimental design
- Project planning
- Scheduling
- Resources management
- Fund management
- Data archiving
- CRM
- Agile

## Communication: 
- Presentation
- Teaching
- Mentoring
- Collaborating
- [Publishing](https://djleite.github.io/publications) (cited >700 times) 

## Computational: 
- Bioinformatics
- Python
- R
- Bash
- HPC
- Linux/Mac/Win OS
- Command-line
- Tool development
- Genome assembly
- Genome annotation
- Single-cell sequencing
- Non-coding DNA/RNA annotation
- Transcriptomics
- Phylogenetics
- SNP/Variant Calling
- Visualisation
- Statistics
- Microsoft Office
- Data archiving
- GitHub

## Laboratory techniques: 
- DNA/RNA extraction
- NGS library preparation
- PCR
- Cloning
- in-situ hybridisation
- Molecular biology
- Immunohistochemistry
- Microscopy (bright-field/confocal/SEM/TEM)
- Invertebrate husbandry
- Species identification

***

# EXPERIENCE

## Senior Bioinformatician and Business Developer - Pragmatic Genomics (2024 May - Oct)

### Responsibilities:
- Developed genomics SaaS tools for cloud-based analyses
- Conceptualised ideas, reviewed and tested using agile practices and GitHub version control
- Established and managed high and low-touch sales funnels
- Improved CRM (Hubspot), customer engagement, automation (Make), and feedback integration
- Optimised website (HTML/CSS), improved design, SEO (Lighthouse), online resources (blogs, tutorials, functionality information), and branding

### Achievements:
- Improved front/back-end tool functionality, UX, security, and ensured biological and scientific rigour
- Increased B2B and B2C sales over £50k pa via improved sales funnels and CRM methods
- Overhauled website content, performance, and resources to attract and support customers

## Postdoctoral Researcher – Durham University (2020 – 2024)

### Responsibilities:
- Co-led team coordination, international collaborations, resource and fund management
- Conceived experimental design, technical analyses and scientific interpretations 
- Managed data collections, archiving, task designation, communications and publications
- Mentored and supervised Postdocs/PhDs/undergraduates, teaching computational analyses

### Achievements:
- Discovered and published new insights of spider development at single-cell resolution 
- Assembling and annotating four new spider genomes using NGS long-read (PacBio HiFi/Iso-Seq) and short-read (Illumina DNA/RNA-Seq and Arima HiC) technologies
- Developed novel bioinformatic approaches for studying genome synteny and evolution

### Projects:
- Single-cell RNA-Seq (SPLiTseq) transcriptomics analyses of spider development 
- Systematic identification of duplicate genes in chelicerate whole genome duplications

## Associate Lecturer – Oxford Brookes University (2021 – 2023)

### Responsibilities:
- Design course material and examinations, in coordination with co-lecturers
- Taught theoretical and bioinformatic practical sessions and mentoring undergraduate students

### Achievements:
- Received positive feedback from students and co-lecturers, evidenced by high exam scores

## Postdoctoral Researcher – University College London (2018 – 2020)

### Responsibilities:
- Co-led an international trip to collect live animals, transport, care, complied to law and regulations
- Conceived of experimental design, technical analyses and scientific interpretations 
- Managed data collections, archiving, collaborations and publications
- Mentored PhDs and In2Science outreach, teaching wet-lab and computational analyses

### Achievements:
- Sequenced, assembled and published the first polyclad flatworm genome
- Learnt single-cell wet-lab and bioinformatic analyses

### Projects:
- Genome assembly (PacBio CCS) and annotation of a polyclad flatworm
- Single-cell analysis of early development of spiral cleavage and larva in lophotrochozoans
- Phylogenetic relationships of major animal clades

## Postdoctoral Researcher – Oxford Brookes University (2017 – 2018)

### Responsibilities:
- Managed data collection, analyses, and archiving, and publications  
- Conceived experimental design, technical analyses and scientific interpretations 
- Mentored and supervised PhDs/undergraduates, teaching computational and wet-lab analyses

### Achievements:
- Established international collaborations, acquiring resources that expanded scientific perspective
- First characterisation of all homeobox genes in spiders and support for whole genome duplication

### Projects:
- Investigated the homeobox gene repertoires in chelicerate whole genome duplications
- Genome assembly (SPAdes) and variant calling (GATK) between strains of baculoviridae

***

# EDUCATION

## Ph.D. – Oxford Brookes University (2013 – 2017)
- Thesis “Duplication and divergence of homeobox genes and microRNAs in Chelicerata”
- Published three first-author papers and received accolades for presentations and posters

## BSc– Oxford Brookes University (2010 – 2013)
1st Class Honours - Evolutionary | Developmental | Molecular | Cellular | Plant | Conservation

***

# OTHER

## Journal Reviewer: 
- BMC Genomics
- BMC Biology
- Proc. of the Royal Society London B
- Nucleic Acids Research
- Development Genes and Evolution
- JEZ Part B: Molecular and Developmental Evolution

## Key conference presentations: 
- Keynote at DZG, Kassel, Germany (2023)
- Invited speaker at Spider Workshop, Durham, UK (2022)
- Speaker at Darwin Tree of Life, UK (2021)
- Speaker at SpiderWeb, Göttingen, Germany (2017)
- Speaker at SpiderWeb, Jena, Germany (2014)

## Teaching and outreach:
- Associate lecturer (2021 – 2023)
- Supervisor of undergraduates, masters, and Ph.D. students (2013 – 2024)
- Outreach with In2Science (2019) and primary schools (2014 – 2017)

## Gatsby Plant Summer School (2011):
Experience and training in research ideas and solutions in plant science.

</!-->
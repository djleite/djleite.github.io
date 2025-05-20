---
layout: page
title: CV
permalink: /cv/
---
<!-- PDF Download Button -->
<div style="text-align: right; margin-bottom: 1rem;">
  <a href="https://github.com/djleite/djleite.github.io/raw/main/assets/cv/Leite_CV.pdf" class="btn" download>
    📄 Download PDF
  </a>
</div>

<!-- Side Navigation -->
<div style="display: flex; gap: 2rem;">
  <aside style="min-width: 200px;">
    <ul id="cvTabs" style="list-style: none; padding-left: 0;">
      <li><button onclick="showTab('skills')">Skills</button></li>
      <li><button onclick="showTab('experience')">Experience</button></li>
      <li><button onclick="showTab('education')">Education</button></li>
      <li><button onclick="showTab('other')">Other</button></li>
    </ul>
  </aside>

  <!-- CV Content Panels -->
  <section style="flex: 1;">
    <div id="skills" class="cv-tab">
      <h2>Skills</h2>
      <ul>
        <li>Python, R, Git</li>
        <li>Data Analysis, Bioinformatics</li>
        <li>Machine Learning</li>
      </ul>
    </div>

    <div id="experience" class="cv-tab" style="display:none;">
      <h2>Experience</h2>

      <!-- Expandable Job -->
      <details>
        <summary>
          <strong>Postdoctoral Researcher</strong> – University of Example (2021–Present)
        </summary>
        <p>Conducted research on comparative genomics and developed custom pipelines for orthology analysis.</p>
      </details>

      <details>
        <summary>
          <strong>Bioinformatics Consultant</strong> – XYZ BioTech (2019–2021)
        </summary>
        <p>Provided consulting services for genome annotation and metagenomic data processing.</p>
      </details>
    </div>

    <div id="education" class="cv-tab" style="display:none;">
      <h2>Education</h2>
      <div>
        <strong>PhD in Evolutionary Biology</strong><br>
        University of Science (2015–2019)
      </div>
      <div style="margin-top: 1rem;">
        <strong>BSc in Genetics</strong><br>
        University of Life (2011–2014)
      </div>
    </div>

    <div id="other" class="cv-tab" style="display:none;">
      <h2>Other</h2>
      <p>Volunteering, conference presentations, etc.</p>
    </div>
  </section>
</div>

<!-- Styles -->
<style>
  #cvTabs li {
    margin-bottom: 0.5rem;
  }
  #cvTabs button {
    width: 100%;
    padding: 0.5rem;
    background: #eee;
    border: none;
    cursor: pointer;
    text-align: left;
    font-weight: bold;
  }
  #cvTabs button:hover {
    background: #ddd;
  }

  details summary {
    cursor: pointer;
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  details p {
    margin: 0.5rem 0 1rem 1rem;
    line-height: 1.5;
  }

  .btn {
    background: #0066cc;
    color: white;
    padding: 0.6rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
  }
</style>

<!-- JS for Tab Switching -->
<script>
  function showTab(tabId) {
    const tabs = document.querySelectorAll(".cv-tab");
    tabs.forEach(tab => tab.style.display = "none");

    const selected = document.getElementById(tabId);
    if (selected) selected.style.display = "block";
  }

  // Optionally show first tab by default
  document.addEventListener("DOMContentLoaded", () => {
    showTab('skills');
  });
</script>



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
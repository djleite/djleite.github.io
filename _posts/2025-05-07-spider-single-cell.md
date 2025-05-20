---
title: Single-cell analyses of spider development
date: 2025-05-07
tags: [featured]
image: /images/sc-spider-crop.webp
excerpt: Capturing new insights of spider development with single-cell RNA sequencing
---

## Background

Under construction

Spiders belong to the extremely morphologically diverse group of animals called arthropods. Comparisons of spider development to other organisms like centipedes, crustaceans, and insects, have informed us about the evolution of a variety of different things like segmentation, eye development, limb development, and much more. To deepen these insights, we used single-cell RNA sequencing to analyse three stages (7, 8.1 and 9.1) of spider development (fig 1A)(<a href="https://evodevojournal.biomedcentral.com/articles/10.1186/s13227-024-00224-4" target="_blank" rel="noopener noreferrer">Leite <i>et al</i> 2024</a>). During these three stages key developmental process happen, such as segmentation, Hox patterning, limb development and head patterning.

##  Methodology
The first step in single-cell analysis was the dissociation of multicellular embryos into single cells. To capture the cellular diversity during these developmental stages, we used ACetic-MEthanol (ACME) dissociation combined with SPLiT-seq single-cell RNA sequencing (fig 1B). This approach allowed us to profile a total of 18,500 individual cells across the three stages. The ACME method facilitated effective cell fixation and dissociation, while SPLiT-seq enabled high-throughput transcriptomic profiling without the need for specialised equipment.

## Key Findings

- **Identification of Distinct Cell Clusters**:
   Our analysis revealed 20 distinct cell clusters in the integrated dataset, each characterized by unique gene expression profiles (fig 1G-L). Marker genes from clusters correspond to various spatio-temporal domains in the embryo, providing a detailed map of cellular diversity during early spider embryogenesis.

![Spider single cell sequencing](/images/spider-sc-fig1.webp)
<p style="text-align:left; font-size: 0.85rem; line-height: 1.2;"><b>Single cell sequencing of three embryonic stages of <i>P. tepidariorum</i>. </b><b>A</b> Schematic of stages 7, 8.1 and 9.1 of <i>P. tepidariorum</i> embryos. Stage 7 has a fan-like shape with anterior and posterior poles, and has formed the segment addition zone (SAZ). Stage 8 extends the germband, and by stage 9 the prosomal limb buds are visible. <b>B</b> Stages 7, 8.1 and 9.1 were collected, dissociated with ACME, and cells from each dissociation were plated as shown for the first round of SPLiT-seq barcoding. <b>C</b> Metrics of UMI, genes and mitochondrial expression in each library. <b>D</b> Significant PCAs per stage and all stages merged show that the significant PCAs increase from stage 7 to 9.1, with the merged data containing the most. <b>E</b> Percentage of cells from each stage/library for each cluster, normalised by taking an equal number of random cells from each stage. <b>F</b> Association between number of cells and markers per cluster. <b>G–I</b> UMAP for each stage. <b>J</b> UMAP for all stages merged without integration and (<b>K</b>) with rPCA integration. <b>L</b> UMAP and cell clustering with annotation derived from ISH of marker genes. <i>A</i> anterior, <i>P</i> posterior, <i>Pc</i> precheliceral region, <i>Ch</i> cheliceral, <i>Pp</i> pedipalpal, <i>L1 to L4</i> leg-bearing 1 to 4, <i>O1 to O7</i> opisthosomal segments, <i>SAZ</i> segment addition zone, <i>SMZ</i> segment maturation zone, <i>PNS</i> peripheral nervous system, <i>CNS</i> central nervous system.</p>

- **Hox Gene Expression Patterns**:
   We observed that Hox genes, which play crucial roles in body patterning, were differentially expressed across multiple clusters. Notably, duplicated Hox genes (ohnologs) exhibited distinct expression domains, suggesting subfunctionalization or neofunctionalization following the [whole genome duplication](/spider-wgd) event in the arachnopulmonate lineage.

![Single cell Hox analysis](/images/spider-sc-fig2.webp)
<p style="text-align:left; font-size: 0.85rem; line-height: 1.2;"><b>Hox expression in scRNA-seq data.</b>  <b>A</b> Dotplot of the expression of all ten Hox markers in cell clusters ordered hierarchically for integrated data. <b>B</b> Temporal expression of thirteen Hox markers across the three stages. The legend in (<b>B</b>) relates to the expression and number of expressing cells per cluster in both (<b>A</b>) and (<b>B</b>). <b>C</b> Pearson’s correlation coefficients of SCT normalized average Hox expression across all 20 clusters reveal three cluster types related to pedipalpal, leg-bearing and opisthosomal identities. <b>D</b> Positioning of Hox expression across the A-P axis of <i>P. tepidariorum</i>. Spatial expression intensity (detected by RNA in situ hybridisation) reflected using opaque (strong expression) to more transparent colouring (weak expression).</p>

- **Insights into Tissue and Organ Development**:
   The atlas provided new perspectives on the development of various tissues and organs, including the segmentation, central nervous system, limbs, gut, and hematopoietic system. For instance, we identified specific new marker genes associated with [posterior segmentation](/spider-segmentation), [head patterning](/spider-eyes) and limb bud formation, shedding light on the molecular mechanisms underlying these processes.

- **Re-evaluation of 'Extra-Embryonic' Cells**:
   Our data suggest that cells previously classified as 'extra-embryonic' may have more significant roles in embryonic development than previously thought. These include the earlier differentiation of the hematopoietic lineage, as well as remarkable different cellular division tempo of endodermal cells of the gut.

## Impact
By providing a high-resolution cellular view of spider embryogenesis, our study offered new insights into the evolution of developmental mechanisms in arthropods. This single-cell atlas serves as a foundational resource for future research into arachnid development and evolution, enabling comparative studies across species and facilitating the identification of conserved and divergent developmental pathways.
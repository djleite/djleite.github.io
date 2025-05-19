---
title: Single-cell analyses of spider development
date: 2025-05-07
tags: [featured]
image: /images/sc-spider-crop.webp
excerpt: Capturing new insights of spider development with single-cell RNA sequencing
---

## Background

Spiders belong to the extremely morphologically diverse group of animals called arthropods. Comparisons of spider development to other organisms like centipedes, crustaceans, and insects, have informed us about the evolution of a variety of different things like segmentation, eye development, limb development, and much more. To deepen these insights, we used single-cell RNA sequencing to analyse three stages (7, 8.1 and 9.1) of spider development. During these three stages key developmental process happen, such as segmentation, Hox patterning, limb development and head patterning.

## Cell dissociations and SPLiT-Seq
The first step in single-cell analysis is to be able to break your desired tissue into single cells. We used a technique called ACME, which mildly chemically fixes tissue before mechanical shearing to break cells apart from each other. They were then FACS sorted and cleaned up from cellular debris. The cells were then distributed on a plate, unique molecular identifiers (UMI) were annealled to mRNAs, and cells then underwent four rounds of mRNA barcoding and resorting, so that each cell was uniquely barcoded. With each mRNA now containing a UMI and cell barcode, cells were lysed and RNA sequencing libraries were constructed and sequenced.

## Identifying spider cell clusters
To identify cell clusters the expression of variably expressed genes were used for principal component analysis, knn clustering and UMAP/tSNE projection. Each stage was processed separately, and altogether using integration methods. This provided marker genes from cell clusters across different datasets that we compared to downstream embryonic expression pattern analyses.

![Spider single cell sequencing](/images/spider-sc-fig1.webp)
<p style="text-align:left; font-size: 0.85rem; line-height: 1.2;"><b>Figure 1: .</b> .</p>

## Hox gene expression
Hox genes are import developmental paterning genes that are duplicated in spiders due to an [ancestral whole genome duplication](/spider-wgd). 

![Single cell Hox analysis](/images/spider-sc-fig2.webp)
<p style="text-align:left; font-size: 0.85rem; line-height: 1.2;"><b>Figure 2: .</b> .</p>

## New genes in posterior segmentation
- captured strong signature of Wnt posterior expression
- saw pair-rule genes out of phase
- new genes that were expressed in the SAZ and the along with pair-rule phases

## Other insights
- Head patterning and the pre-cheliceral region - mention to spider eye project
- Endoderm has different cellular replication dynamics
- Hemocytes from the extra-embryonic cells
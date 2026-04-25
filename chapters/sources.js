// Sources chapter — citations remain in English (academic paper titles don't translate).
// Only headings, intro, and closing line are translated.

const SOURCES_PRIMARY = `
<div class="foot">
<ol>
<li><strong>Charaka Samhita</strong> (c. 100 BCE - 200 CE), compiled by Charaka, revised by Dṛḍhabala (6th century CE). Sutrasthana Ch. 5 (Ahara vidhi), Ch. 6 (Ritucharya), Ch. 27 (Annapana Vidhi — food classification).</li>

<li><strong>Sushruta Samhita</strong> (c. 600 BCE - 500 CE). Sutrasthana Ch. 46 — on Yava as daily food, food combinations.</li>

<li><strong>Ashtanga Hridaya</strong> by Vagbhata (c. 600 CE). Consolidation of Charaka + Sushruta. Sutrasthana Ch. 3 (Ritucharya), Ch. 8 (Matrashitiya — quantity of food).</li>

<li><strong>Rigveda</strong> (c. 1500-1000 BCE). References to Yava (barley) in Mandala 1.66, 1.135, 5.53, 10.101 and others; Vrihi (rice) in Mandala 8.69, 10.90.</li>

<li><strong>Atharvaveda</strong> (c. 1200-1000 BCE). Extensive herbal and medical content. Considered a precursor to the Ayurvedic tradition.</li>

<li><strong>Arthashastra</strong> by Kautilya (c. 300 BCE). Book II — state granaries and food policy.</li>

<li><strong>Brihat Parashara Hora Shastra</strong> (c. 600-900 CE, attributed to Sage Parashara). Foundational text of Vedic astrology containing the formal Nava Dhanya planetary correspondences. Multiple chapters describe grain offerings, fasting rules, and food associations with the Navagraha.</li>

<li><strong>Grihya Sutras</strong> (Ashvalayana, Apastamba, Hiranyakeshi — c. 800-300 BCE). Domestic ritual manuals describing daily and seasonal grain offerings, including early forms of the nine-grain framework.</li>
</ol>
</div>
`;

const SOURCES_ARCHAEOLOGY = `
<div class="foot">
<ol start="7">
<li>Fuller, D.Q. (2011). "Finding plant domestication in the Indian subcontinent." <em>Current Anthropology</em> 52(S4). Grain evidence from Harappan sites.</li>

<li>Pokharia, A.K. et al. (2017). "Early agricultural experimentation in the north-western Gangetic plain." <em>Archaeological and Anthropological Sciences</em>. Carbonized grain analysis.</li>

<li>Madella, M. & Fuller, D.Q. (2006). "Palaeoecology and the Harappan civilisation of South Asia." <em>Quaternary Science Reviews</em> 25. Grain diversification patterns.</li>
</ol>
</div>
`;

const SOURCES_NUTRITION = `
<div class="foot">
<ol start="10">
<li>Behall, K.M. et al. (2004). "Diets containing barley significantly reduce lipids in mildly hypercholesterolemic men and women." <em>American Journal of Clinical Nutrition</em> 80.</li>

<li>Saltzman, E. et al. (2001). "An oat-containing hypocaloric diet reduces systolic blood pressure." <em>Journal of Nutrition</em> 131.</li>

<li>Chandrasekara, A. & Shahidi, F. (2010). "Content of insoluble bound phenolics in millets." <em>Journal of Agricultural and Food Chemistry</em> 58.</li>

<li>Saleh, A.S.M. et al. (2013). "Millet grains: nutritional quality, processing, and potential health benefits." <em>Comprehensive Reviews in Food Science and Food Safety</em> 12.</li>

<li>Chandrasekhar, K. et al. (2012). "A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of ashwagandha root in reducing stress and anxiety in adults." <em>Indian Journal of Psychological Medicine</em> 34.</li>

<li>Lopresti, A.L. et al. (2019). "An investigation into the stress-relieving and pharmacological actions of an ashwagandha extract." <em>Medicine</em> 98.</li>

<li>Hewlings, S.J. & Kalman, D.S. (2017). "Curcumin: A review of its effects on human health." <em>Foods</em> 6.</li>

<li>Kaur, M. et al. (2017). "Amla (<em>Emblica officinalis</em>) based functional foods." <em>Critical Reviews in Food Science and Nutrition</em>.</li>

<li>Longo, V.D. & Panda, S. (2016). "Fasting, circadian rhythms, and time-restricted feeding in healthy lifespan." <em>Cell Metabolism</em> 23.</li>

<li>Wehrens, S.M.T. et al. (2017). "Meal timing regulates the human circadian system." <em>Current Biology</em> 27.</li>
</ol>
</div>
`;

const SOURCES_HISTORY = `
<div class="foot">
<ol start="20">
<li>Achaya, K.T. (1994). <em>Indian Food: A Historical Companion</em>. Oxford University Press. The foundational English-language history of Indian cuisine.</li>

<li>Sen, C.T. (2015). <em>Feasts and Fasts: A History of Food in India</em>. Reaktion Books. Modern scholarly overview.</li>

<li>Davidar, A.W. (2022). "The Green Revolution and India's Grain Shift." Economic and Political Weekly analysis of post-1965 diet transformation.</li>

<li>FAO / UN (2023). "International Year of Millets." Report on millet decline in India (1960-2020) and rediscovery efforts. <a href="https://www.fao.org/millets-2023/" target="_blank" rel="noopener">fao.org/millets-2023</a></li>
</ol>
</div>
`;

const SOURCES_DISEASE = `
<div class="foot">
<ol start="24">
<li>Unnikrishnan, A.G. et al. (2013). "Prevalence of hypothyroidism in adults: An epidemiological study in eight cities of India." <em>Indian Journal of Endocrinology and Metabolism</em> 17(4). The 42M figure source; the 10.95% adult prevalence point in the timeline chart. <a href="https://journals.lww.com/indjem/fulltext/2013/17040/prevalence_of_hypothyroidism_in_adults__an.14.aspx" target="_blank" rel="noopener">journals.lww.com</a></li>

<li>Kalra, S. et al. (2011). "Thyroid dysfunction and dyslipidemia in Indian women." <em>Journal of Mid-life Health</em> 2(2).</li>

<li>Bharali, M.D. et al. (2021). "Prevalence of polycystic ovarian syndrome in India: a systematic review and meta-analysis." <em>Cureus</em> 13(12). 11.3% pooled prevalence cited in the timeline chart footnote. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/" target="_blank" rel="noopener">pmc.ncbi.nlm.nih.gov</a></li>

<li>Anjana, R.M. et al. (2023). "Metabolic non-communicable disease health report of India: ICMR-INDIAB national cross-sectional study." <em>The Lancet Diabetes & Endocrinology</em> 11(7). Source for diabetes prevalence rise; T2D points 2017–2023 in the timeline chart. <a href="https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00119-5/fulltext" target="_blank" rel="noopener">thelancet.com</a></li>

<li>Travison, T.G. et al. (2007). "A population-level decline in serum testosterone levels in American men." <em>Journal of Clinical Endocrinology & Metabolism</em> 92(1). The "1% per year" testosterone decline data.</li>

<li>Levine, H. et al. (2017, updated 2022). "Temporal trends in sperm count: a systematic review and meta-regression analysis of samples collected globally in the 20th and 21st centuries." <em>Human Reproduction Update</em> 28(2). The global sperm count decline trajectory used to anchor the chart's "% of 1980" series. <a href="https://academic.oup.com/humupd/article/29/2/157/6824414" target="_blank" rel="noopener">academic.oup.com</a></li>

<li>Knez, M. et al. (2017). "The linoleic acid: dihomo-γ-linolenic acid ratio (LA:DGLA) — an emerging biomarker of Zn status." <em>Nutrients</em> 9(8). On omega-6 excess and zinc-thyroid axis.</li>

<li>DiNicolantonio, J.J. & O'Keefe, J.H. (2018). "Omega-6 vegetable oils as a driver of coronary heart disease: the oxidized linoleic acid hypothesis." <em>Open Heart</em> 5(2). On seed oil dangers.</li>

<li>Knezevic, J. et al. (2020). "Thyroid-gut-axis: how does the microbiota influence thyroid function?" <em>Nutrients</em> 12(6). On gut-thyroid connection.</li>

<li>Patrick, L. (2009). "Thyroid disruption: mechanism and clinical implications in human health." <em>Alternative Medicine Review</em> 14(4). On endocrine disruptors and thyroid.</li>

<li>Diamanti-Kandarakis, E. et al. (2009). "Endocrine-disrupting chemicals: an Endocrine Society scientific statement." <em>Endocrine Reviews</em> 30(4). The foundational paper on BPA, phthalates, hormone disruption.</li>

<li>Unfer, V. et al. (2017). "Myo-inositol effects in women with PCOS: a meta-analysis of randomized controlled trials." <em>Endocrine Connections</em> 6(8). On inositol for PCOS.</li>

<li>Pizzorno, J. (2014). "Glutathione!" <em>Integrative Medicine</em> 13(1). On nutrient deficiencies in modern diets and detoxification.</li>

<li>Liu, P.Y. et al. (2003). "The rationale, efficacy and safety of androgen therapy in older men: future research and current practice recommendations." <em>Journal of Clinical Endocrinology & Metabolism</em> 89(10). On testosterone and lifestyle.</li>

<li>Heller, J. et al. (2018). "The microbiome and the thyroid." <em>Maturitas</em> 116. Hashimoto's gut connection.</li>
</ol>
</div>
`;

const SOURCES_PUBLIC_DATA = `
<div class="foot">
<ol start="39">
<li><strong>FAO STAT</strong> — UN Food and Agriculture Organization statistics database. Used for India's edible-oil consumption per capita (1970–2023) and millet area (1960–2020). <a href="https://www.fao.org/faostat/en/#data" target="_blank" rel="noopener">fao.org/faostat</a></li>

<li><strong>World Bank — Urban population (% of total)</strong>. Indicator <em>SP.URB.TOTL.IN.ZS</em>, India series, 1960–2024. Source for the urbanization curve in the timeline chart. <a href="https://data.worldbank.org/indicator/SP.URB.TOTL.IN.ZS?locations=IN" target="_blank" rel="noopener">data.worldbank.org</a></li>

<li><strong>World Bank — Individuals using the Internet (% of population)</strong>. Indicator <em>IT.NET.USER.ZS</em>, India series, 1995–2024. Source for the internet penetration curve. <a href="https://data.worldbank.org/indicator/IT.NET.USER.ZS?locations=IN" target="_blank" rel="noopener">data.worldbank.org</a></li>

<li><strong>NITI Aayog</strong> (2022, via PIB). India edible-oil consumption: per-capita figures and import-dependence analysis. Cross-checked with the FAO STAT series for the chart's seed-oil row. <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2049737" target="_blank" rel="noopener">pib.gov.in</a></li>

<li><strong>TRAI</strong> — Telecom Regulatory Authority of India, "Indian Telecom Services Performance Indicators" (March 2024). Authoritative India-specific internet/mobile-broadband subscriber numbers used to anchor the recent end of the internet penetration curve. <a href="https://www.trai.gov.in/sites/default/files/2024-09/PIR_12032024_0.pdf" target="_blank" rel="noopener">trai.gov.in (PDF)</a></li>

<li><strong>Statista — India per-capita plastic consumption</strong>. Time series 1990–2021 used for the plastic row. Note: Statista aggregates from FICCI and PlastIndia data; treat as a synthesized industry estimate. <a href="https://www.statista.com/statistics/1344395/india-plastic-consumption-per-capita/" target="_blank" rel="noopener">statista.com</a></li>

<li><strong>TERI</strong> — The Energy and Resources Institute, "Plastic Waste Management" fact sheet. Cross-source for India plastic consumption (~14–15 kg/cap/yr current) used in the chart's plastic row. <a href="https://www.teriin.org/sites/default/files/files/factsheet.pdf" target="_blank" rel="noopener">teriin.org (PDF)</a></li>

<li>Patel, S. et al. (2023). "Status of Millets in India: Trends and Prospects." Cross-references USDA IPAD and India Agricultural Statistics. Source for millet area peak (~15.95 Mha at 1986) and ~75% decline by 2020 used in the chart's millet row. <a href="https://www.researchgate.net/publication/375799965_Status_of_Millets_in_India_Trends_and_Prospects" target="_blank" rel="noopener">researchgate.net</a></li>

<li><strong>NSSO &amp; NFHS-5</strong> — National Sample Survey Office household consumer-expenditure rounds and National Family Health Survey 2019–21. Source for refrigerator ownership in urban households (~8% in 1980 → ~60% by 2023). Compiled via Prayas Energy Group's appliance-ownership analysis. <a href="https://energy.prayaspune.org/power-perspectives/appliance-ownership-trends-in-india" target="_blank" rel="noopener">energy.prayaspune.org</a></li>

<li>Ramachandran, A. et al. (2011). "ICMR-INDIAB Study Phase I: Prevalence of diabetes and prediabetes in India." Source for the 2010 diabetes prevalence inflection point (~7.3%) anchoring the solid segment of the T2D curve. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3192597/" target="_blank" rel="noopener">pmc.ncbi.nlm.nih.gov</a></li>

<li><strong>IDF Diabetes Atlas — India country page</strong>. Annual prevalence estimates 2017–2023 used for the recent T2D points. <a href="https://diabetesatlas.org/data-by-location/country/india/" target="_blank" rel="noopener">diabetesatlas.org</a></li>

<li>Sengupta, P. et al. (2018). "Decline of sperm quality among Indian men over the past 37 years." <em>Reproductive Biology and Endocrinology</em>. India-specific corroboration of the global Levine 2017/2022 trend; anchors the chart's sperm-count row in Indian rather than global data. <a href="https://rbej.biomedcentral.com/articles/10.1186/s12958-018-0425-z" target="_blank" rel="noopener">rbej.biomedcentral.com</a></li>
</ol>
</div>
`;

document.getElementById('sources').innerHTML = `

<div class="lang-content active" data-lang="en">
<h2><span class="num">Sources</span>The evidence</h2>

<p class="lead">Every claim in this guide traces to either a primary ancient text, an archaeological source, or peer-reviewed modern research. Supplement marketing and Instagram guru hearsay are excluded.</p>

<h3>Primary ancient texts</h3>
${SOURCES_PRIMARY}

<h3>Archaeological evidence</h3>
${SOURCES_ARCHAEOLOGY}

<h3>Modern nutritional research</h3>
${SOURCES_NUTRITION}

<h3>Historical context</h3>
${SOURCES_HISTORY}

<h3>Modern Indian disease epidemiology</h3>
${SOURCES_DISEASE}

<h3>Public-data sources (Modern Disease timeline chart)</h3>
${SOURCES_PUBLIC_DATA}

<p style="text-align:center;margin-top:2rem;font-style:italic;color:var(--mut);font-size:.95rem;padding:0 .5rem">Every recommendation in this guide is either (a) based on a primary text verifiable by Sanskrit scholars, (b) based on archaeological evidence from peer-reviewed excavation reports, or (c) supported by modern peer-reviewed nutritional science.</p>

<div class="dev-sep">॥ ॐ शान्तिः शान्तिः शान्तिः ॥</div>
</div>

<div class="lang-content" data-lang="hi">
<h2><span class="num">स्रोत</span>प्रमाण</h2>

<p class="lead">इस मार्गदर्शिका के हर दावे का स्रोत या तो एक प्राथमिक प्राचीन ग्रंथ, एक पुरातात्विक स्रोत, या सहकर्मी-समीक्षित आधुनिक शोध है। सप्लीमेंट मार्केटिंग और इंस्टाग्राम गुरु अफ़वाहें बाहर रखी गई हैं।</p>

<h3>प्राथमिक प्राचीन ग्रंथ</h3>
${SOURCES_PRIMARY}

<h3>पुरातात्विक प्रमाण</h3>
${SOURCES_ARCHAEOLOGY}

<h3>आधुनिक पोषण अनुसंधान</h3>
${SOURCES_NUTRITION}

<h3>ऐतिहासिक संदर्भ</h3>
${SOURCES_HISTORY}

<h3>आधुनिक भारतीय रोग महामारी विज्ञान</h3>
${SOURCES_DISEASE}

<h3>सार्वजनिक-डेटा स्रोत (आधुनिक रोग कालक्रम चार्ट)</h3>
${SOURCES_PUBLIC_DATA}

<p style="text-align:center;margin-top:2rem;font-style:italic;color:var(--mut);font-size:.95rem;padding:0 .5rem">इस मार्गदर्शिका में हर सिफ़ारिश या तो (अ) संस्कृत विद्वानों द्वारा सत्यापन-योग्य प्राथमिक ग्रंथ पर आधारित है, (ब) सहकर्मी-समीक्षित उत्खनन रिपोर्टों से पुरातात्विक प्रमाण पर आधारित है, या (स) आधुनिक सहकर्मी-समीक्षित पोषण विज्ञान द्वारा समर्थित है।</p>

<div class="dev-sep">॥ ॐ शान्तिः शान्तिः शान्तिः ॥</div>
</div>

<div class="lang-content" data-lang="te">
<h2><span class="num">మూలాలు</span>ఆధారాలు</h2>

<p class="lead">ఈ మార్గదర్శిలోని ప్రతి దావా ప్రాథమిక ప్రాచీన గ్రంథం, పురావస్తు మూలం, లేదా పీర్-రివ్యూడ్ ఆధునిక పరిశోధనకు చెందుతుంది. సప్లిమెంట్ మార్కెటింగ్ మరియు ఇన్‌స్టాగ్రామ్ గురు పుకార్లు మినహాయించబడ్డాయి.</p>

<h3>ప్రాథమిక ప్రాచీన గ్రంథాలు</h3>
${SOURCES_PRIMARY}

<h3>పురావస్తు ఆధారాలు</h3>
${SOURCES_ARCHAEOLOGY}

<h3>ఆధునిక పోషక పరిశోధన</h3>
${SOURCES_NUTRITION}

<h3>చారిత్రక సందర్భం</h3>
${SOURCES_HISTORY}

<h3>ఆధునిక భారతీయ వ్యాధి ఎపిడెమియాలజీ</h3>
${SOURCES_DISEASE}

<h3>ప్రజా-డేటా మూలాలు (ఆధునిక వ్యాధి కాలక్రమ చార్ట్)</h3>
${SOURCES_PUBLIC_DATA}

<p style="text-align:center;margin-top:2rem;font-style:italic;color:var(--mut);font-size:.95rem;padding:0 .5rem">ఈ మార్గదర్శిలోని ప్రతి సిఫార్సు (a) సంస్కృత పండితులచే ధృవీకరించదగిన ప్రాథమిక గ్రంథం ఆధారంగా, (b) పీర్-రివ్యూడ్ తవ్వకాల నివేదికల నుండి పురావస్తు ఆధారాల ఆధారంగా, లేదా (c) ఆధునిక పీర్-రివ్యూడ్ పోషక శాస్త్రం ద్వారా మద్దతు ఇవ్వబడింది.</p>

<div class="dev-sep">॥ ॐ शान्तिः शान्तिः शान्तिः ॥</div>
</div>

`;

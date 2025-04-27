export const mockProjects = [
    {
        id: "1",
        title: "The Impact of Microplastics on Marine Ecosystems",
        authors: "Emma Chen, David Rodriguez",
        institution: "Pacific Marine Institute",
        abstract:
            "Microplastics, defined as plastic particles smaller than 5mm in diameter, have become ubiquitous in marine environments worldwide. This study examines the distribution and impact of microplastics across three distinct marine ecosystems: coral reefs, pelagic zones, and coastal sediments. Using a combination of field sampling and laboratory analysis, we quantified microplastic concentrations and identified polymer types across 24 sites. Results indicate that microplastic abundance varies significantly between ecosystems, with highest concentrations found in coastal sediments near urban centers. Polyethylene and polypropylene were the dominant polymer types across all sites. Correlation analysis revealed significant relationships between microplastic abundance and reduced biodiversity in coral reef systems, suggesting potential ecosystem-level impacts. These findings highlight the need for targeted mitigation strategies and provide a baseline for future monitoring efforts.",
        walkthrough:
            "We studied tiny plastic pieces (microplastics) in the ocean to see how they affect marine life. We found the most microplastics in coastal areas near cities, and discovered that coral reefs with more microplastics had fewer species living in them. This suggests these plastics might be harming entire ecosystems, not just individual animals.",
        category: "environmental-science",
        keywords: ["microplastics", "marine ecology", "pollution", "biodiversity", "conservation"],
        submissionDate: "March 15, 2023",
        paperUrl: "https://example.com/paper1",
        comments: [
            {
                id: "c1",
                author: "Marine Biology Student",
                text: "Did you observe any species that seemed particularly vulnerable to microplastic exposure?",
                date: "March 20, 2023",
            },
        ],
    },
    {
        id: "2",
        title: "Machine Learning Approaches to Predict Protein-Ligand Binding Affinity",
        authors: "Alex Johnson, Priya Patel",
        institution: "Tech University",
        abstract:
            "Accurate prediction of protein-ligand binding affinity is crucial for drug discovery and development. Traditional computational methods like molecular docking and molecular dynamics simulations are computationally expensive and often lack accuracy. In this study, we developed a novel machine learning framework that combines graph neural networks and attention mechanisms to predict binding affinity from protein-ligand complex structures. Our model was trained on the PDBbind dataset and evaluated against state-of-the-art methods. Results demonstrate that our approach achieves a Pearson correlation coefficient of 0.82 and RMSE of 1.25 pK units on the core set, outperforming existing methods. Feature importance analysis revealed that hydrophobic interactions and hydrogen bonding patterns were the most significant predictors. The model's efficiency allows for rapid virtual screening of large compound libraries, potentially accelerating the drug discovery process.",
        walkthrough:
            "We created a new AI system that can predict how well potential drugs will bind to their target proteins. Our method is both faster and more accurate than previous approaches, which could help speed up the discovery of new medications. The AI learned that certain types of molecular interactions (like hydrophobic interactions) are especially important for predicting binding strength.",
        category: "computer-science",
        keywords: [
            "machine learning",
            "drug discovery",
            "protein binding",
            "graph neural networks",
            "computational chemistry",
        ],
        submissionDate: "February 3, 2023",
        paperUrl: "https://example.com/paper2",
        comments: [
            {
                id: "c2",
                author: "Computational Chemistry Researcher",
                text: "Have you considered applying this to fragment-based drug discovery workflows?",
                date: "February 10, 2023",
            },
        ],
    },
    {
        id: "3",
        title: "Social Media Usage Patterns and Mental Health Outcomes in Adolescents",
        authors: "Jordan Taylor, Sam Nguyen",
        institution: "Behavioral Research Center",
        abstract:
            "The relationship between social media usage and mental health in adolescents remains a topic of ongoing research and debate. This study examined patterns of social media use among 1,500 adolescents aged 13-18 and assessed correlations with various mental health outcomes. Participants completed standardized measures of depression, anxiety, and self-esteem, along with detailed questionnaires about their social media habits. Results indicate that total time spent on social media was less predictive of negative mental health outcomes than specific usage patterns. In particular, passive consumption of content, social comparison behaviors, and nighttime use were significantly associated with increased symptoms of depression and anxiety. Conversely, active and creative engagement, as well as positive social interactions, showed protective effects. These findings suggest that interventions targeting how adolescents engage with social media, rather than focusing solely on reducing screen time, may be more effective in promoting positive mental health outcomes.",
        walkthrough:
            "We studied how 1,500 teenagers use social media and how it relates to their mental health. We found that it's not just about how much time teens spend on social media, but how they use it. Scrolling without interacting, comparing yourself to others, and using social media before bed were linked to more depression and anxiety. On the other hand, actively creating content and having positive interactions with friends online seemed to be good for mental health. This suggests that helping teens use social media in healthier ways might be better than just telling them to use it less.",
        category: "social-sciences",
        keywords: ["social media", "adolescent health", "mental health", "psychology", "screen time"],
        submissionDate: "April 22, 2023",
        paperUrl: "https://example.com/paper3",
        comments: [],
    },
    {
        id: "4",
        title: "CRISPR-Cas9 Mediated Gene Editing for Sickle Cell Disease: A Proof-of-Concept Study",
        authors: "Maya Williams, James Chen",
        institution: "Medical Research Institute",
        abstract:
            "Sickle cell disease (SCD) is a genetic disorder caused by a single point mutation in the beta-globin gene, resulting in abnormal hemoglobin production and sickle-shaped red blood cells. This study investigated the potential of CRISPR-Cas9 gene editing to correct this mutation in patient-derived hematopoietic stem cells (HSCs). We designed and optimized guide RNAs targeting the specific mutation site and evaluated editing efficiency and off-target effects. HSCs from five SCD patients were edited and differentiated into erythroid cells in vitro. Results demonstrated successful correction of the mutation in 68-79% of cells, with minimal detected off-target effects. Corrected cells showed normal hemoglobin production and restored cell morphology. Engraftment studies in immunodeficient mice showed persistence of edited cells for up to 16 weeks. These findings provide proof-of-concept for CRISPR-based therapeutic approaches for SCD and highlight the potential of gene editing for treating monogenic blood disorders.",
        walkthrough:
            "We used CRISPR gene editing technology to fix the genetic mutation that causes sickle cell disease in blood stem cells from patients. We were able to correct the mutation in about 70-80% of cells, which then produced normal hemoglobin and developed into healthy-shaped red blood cells. When we transplanted these edited cells into mice, they survived for at least 16 weeks. This shows that CRISPR could potentially be used as a treatment for sickle cell disease and similar genetic blood disorders.",
        category: "biology",
        keywords: ["CRISPR", "gene editing", "sickle cell disease", "genetic therapy", "hematology"],
        submissionDate: "January 12, 2023",
        paperUrl: "https://example.com/paper4",
        comments: [
            {
                id: "c3",
                author: "Genetics Student",
                text: "This is incredible! How long do you think it might take for this to become a clinical treatment?",
                date: "January 15, 2023",
            },
            {
                id: "c4",
                author: "Medical Researcher",
                text: "Did you observe any immune responses to the Cas9 protein in your mouse models?",
                date: "January 20, 2023",
            },
        ],
    },
    {
        id: "5",
        title: "Novel Catalytic Materials for Efficient Hydrogen Production from Water Splitting",
        authors: "Olivia Martinez, Daniel Kim",
        institution: "Energy Research Laboratory",
        abstract:
            "Hydrogen production through electrochemical water splitting offers a promising pathway for clean energy storage, but current technologies are limited by the high cost and scarcity of platinum-based catalysts. This study reports the development of a novel bifunctional catalyst based on nickel-iron layered double hydroxide nanosheets decorated with cobalt phosphide nanoparticles. The catalyst was synthesized using a one-pot hydrothermal method and characterized using XRD, SEM, TEM, and XPS. Electrochemical performance was evaluated in alkaline electrolytes. Results show that the composite catalyst achieves a current density of 10 mA/cm² at an overpotential of only 240 mV for the oxygen evolution reaction and 85 mV for the hydrogen evolution reaction, outperforming commercial precious metal catalysts. Stability tests demonstrated minimal degradation after 5000 cycles. Density functional theory calculations reveal that the enhanced activity stems from optimized binding energies of reaction intermediates at the interface between components. This earth-abundant catalyst presents a viable alternative to precious metals for large-scale hydrogen production.",
        walkthrough:
            "We created a new material that can split water into hydrogen and oxygen more efficiently than current technologies. Instead of using expensive platinum, our catalyst uses more abundant elements like nickel, iron, and cobalt. It works better than commercial catalysts and remains stable after thousands of uses. Computer simulations showed that the improved performance comes from the unique way different parts of our material work together at their boundaries. This could make hydrogen production more affordable for clean energy storage.",
        category: "chemistry",
        keywords: ["catalysis", "hydrogen production", "clean energy", "electrochemistry", "materials science"],
        submissionDate: "May 7, 2023",
        paperUrl: "https://example.com/paper5",
        comments: [],
    },
    {
        id: "6",
        title: "Quantum Entanglement in Macroscopic Systems: Experimental Observations and Implications",
        authors: "Sophia Lee, Robert Johnson",
        institution: "Quantum Physics Center",
        abstract:
            "Quantum entanglement, typically observed in microscopic systems, has been theoretically predicted to manifest in macroscopic systems under specific conditions. This study presents experimental evidence of entanglement between two macroscopic oscillators, each containing approximately 10^12 atoms. Using a novel cryogenic setup and precision laser interferometry, we cooled the mechanical oscillators to their quantum ground state and generated entanglement through optomechanical coupling. Bell inequality violations with a value of 2.6±0.2 confirmed genuine quantum entanglement. The entangled state demonstrated coherence times of up to 100 milliseconds, significantly longer than previously reported for systems of comparable size. Temperature dependence studies revealed a sharp threshold for entanglement breakdown at approximately 10 mK. These results challenge conventional boundaries between quantum and classical physics and may have implications for quantum information processing, precision sensing, and fundamental tests of quantum mechanics at macroscopic scales.",
        walkthrough:
            "We showed that quantum entanglement, a weird quantum effect where particles become connected regardless of distance, can happen in much larger objects than previously thought. We entangled two tiny vibrating devices containing trillions of atoms (which is huge by quantum standards) and kept them entangled for a tenth of a second. This challenges the traditional boundary between the quantum world and our everyday classical world. The discovery could lead to better quantum computers, more sensitive measuring devices, and new tests of quantum physics.",
        category: "physics",
        keywords: ["quantum physics", "entanglement", "quantum mechanics", "macroscopic quantum effects", "optomechanics"],
        submissionDate: "June 18, 2023",
        paperUrl: "https://example.com/paper6",
        comments: [
            {
                id: "c5",
                author: "Physics Enthusiast",
                text: "This is mind-blowing! Does this have any implications for quantum computing?",
                date: "June 25, 2023",
            },
        ],
    },
    {
        id: "7",
        title: "Biodegradable Electronic Sensors for Environmental Monitoring",
        authors: "Noah Garcia, Emily Wilson",
        institution: "Sustainable Technology Institute",
        abstract:
            "Electronic waste presents a growing environmental challenge, particularly for temporary sensing applications. This study introduces a fully biodegradable environmental sensor platform fabricated from cellulose-derived materials, conductive biopolymers, and zinc-based microelectronics. The sensors were designed to monitor temperature, humidity, and basic water quality parameters before harmlessly degrading in the environment. Material characterization confirmed complete biodegradability under composting conditions within 3-6 months. Field testing in three distinct ecosystems demonstrated measurement accuracy comparable to commercial sensors (±0.5°C for temperature, ±3% for humidity, ±0.2 pH units). Power was supplied by a novel biobattery utilizing microbial fuel cell principles, providing sufficient energy for 2-3 months of intermittent measurements and wireless data transmission. Degradation products were analyzed and confirmed to be non-toxic to aquatic and soil organisms. This technology offers a sustainable alternative for environmental monitoring in remote or sensitive ecosystems where sensor retrieval is challenging or disruptive.",
        walkthrough:
            "We created electronic sensors that can monitor environmental conditions and then completely biodegrade when they're no longer needed. Made from plant-based materials and zinc electronics, these sensors can measure temperature, humidity, and water quality almost as accurately as regular sensors. They're powered by a battery that uses microbes to generate electricity. After 3-6 months in compost conditions, the sensors break down into harmless materials. This technology could be really useful for monitoring remote natural areas where collecting sensors after use would be difficult or harmful to the environment.",
        category: "engineering",
        keywords: [
            "biodegradable electronics",
            "environmental monitoring",
            "sustainable technology",
            "biopolymers",
            "sensors",
        ],
        submissionDate: "July 3, 2023",
        paperUrl: "https://example.com/paper7",
        comments: [],
    },
    {
        id: "8",
        title: "Novel Deep Learning Architecture for Predicting Extreme Weather Events",
        authors: "Aiden Patel, Zoe Thompson",
        institution: "Climate Research Center",
        abstract:
            "Accurate prediction of extreme weather events remains a significant challenge in climate science. This study presents a novel deep learning architecture that combines convolutional neural networks (CNNs) with transformer mechanisms to predict extreme precipitation events at regional scales. The model was trained on 40 years of historical climate data, including atmospheric variables, sea surface temperatures, and topographical features. Evaluation on test data from 2010-2020 showed significant improvements over operational forecasting systems, with a 72% detection rate for extreme events (>99th percentile precipitation) at a 7-day lead time, compared to 45% for current methods. False alarm rates were reduced by 30%. Attention mechanism analysis revealed that the model identified previously underappreciated teleconnection patterns between tropical sea surface temperature anomalies and mid-latitude extreme precipitation. The architecture demonstrates particular skill in predicting atmospheric river events along the western North American coast. This approach offers promising capabilities for early warning systems and climate adaptation planning in vulnerable regions.",
        walkthrough:
            "We built a new AI system that can predict extreme weather events, like severe storms and flooding, better than current methods. Our AI combines two powerful techniques (CNNs and transformers) and was trained on 40 years of weather data. When tested, it could correctly predict 72% of extreme rainfall events a week in advance, while current systems only catch 45%. It also had fewer false alarms. Interestingly, the AI discovered new connections between ocean temperatures in the tropics and extreme weather in temperate regions. This could help communities prepare for dangerous weather with more advance notice, potentially saving lives and reducing damage.",
        category: "computer-science",
        keywords: ["artificial intelligence", "climate science", "extreme weather", "deep learning", "forecasting"],
        submissionDate: "August 14, 2023",
        paperUrl: "https://example.com/paper8",
        comments: [
            {
                id: "c6",
                author: "Climate Science Student",
                text: "Have you considered applying this to hurricane prediction specifically?",
                date: "August 20, 2023",
            },
        ],
    },
]

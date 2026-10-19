export const experiences = [

  {
    id: 1,
    title: "Research Assistant",
    company: "Purdue University | NASA",
    website: "https://www.freshrealm.com/",
    logo: "/images/purdue_logo.png",
    icon: "/images/purdue_icon.png",
    period: "Jan 2016 - Dec 2016",
    location: "Edwardson School of Industrial Engineering | NASA UX Research",
    description: "Ran NASA-funded flight simulator experiments with licensed pilots, analyzing how verbal workload affects flight risk and pilot performance.",
    achievements: [
      "Performed Human-Machine Interaction experiments with licensed pilots funded by a NASA research grant.",
      "Experiments were performed using a Tobii Eyetracker, a Probe response unit, and an xPlane-based flight simulator setup.",
      "Acquired, cleaned and populated database with only practical data to optimize procedural analysis using Excel, and Minitab",
      "Investigated the correlation between flight risk and verbal task load intensity on pilots using advanced statistical algorithms with R, Minitab and Excel.",
      'Summary report <a href="/support/HMI_flight_analysis.html" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-700 ">here</a>'
    ],
    technologies: ["R", "Minitab", "Excel", "Tobii Eyetracker", "xPlane", "Statistical Analysis"]
  },



  {
    id: 2,
    title: "Process Quality Engineer",
    company: "FreshRealm",
    website: "https://www.freshrealm.com/",
    logo: "/images/FR_logo.png",
    icon: "/images/FR_icon.png",
    period: "May 2017 - Jan 2018",
    location: "Riverside Packer | Quality Engineering",
    description: "Built quality and production standards for a newly launched food manufacturing facility. Used Lean methods to raise throughput 28% and cut assembly defects 13%.",
    achievements: [
      "Wrote and maintained company-wide GMPs, SOPs and Quality Control Policies for SQFII and ISO certification",
      "Facilitated launch of new retail program in freshly-acquired facility including layout planning and scalability",
      "Trained and managed Quality Technicians team for standardized quality management system adherence",
      "Organized production lines setup utilizing Lean Six Sigma concepts like Kanban systems and 5S Methodology"
    ],
    technologies: ["Quality Management Systems", "Lean Six Sigma", "Kanban", "5S Methodology", "Data Mining"]
  },
  {
    id: 3,
    title: "Manufacturing Engineer II",
    company: "Medtronic",
    website: "https://www.medtronic.com/",
    logo: "/images/MDT_Logo.png",
    icon: "/images/MDT_icon.png",
    period: "Jan 2018 - Jun 2021",
    location: "Structural Heart | Manufacturing Engineering",
    description: "Led automation and process improvement programs for heart valve manufacturing. Cut manual entry of regulated data by 75% and raised output efficiency 26%.",
    achievements: [
      "Developed new tooling prototype process using 3D-printing, improving prototype iteration speed by 85%",
      "Led cross-functional team for heart valve assembly yield optimization, improving product yield by 10%",
      "Generated root-cause analysis reports using statistical techniques like pareto charts and control charts",
      "Authored and submitted FDA reports enabling new product specifications"
    ], projects: [
      {
        title: "Electronic Device History Record (e-DHR) Automation Product Development",
        details: [
          "Spearheaded design of product and information flow during implementation of e-DHR initiative using streams in Visio.",
          "Created work breakdown structure with cross-functional team using Microsoft Project and Mindjet MindManager.",
          "Collaborated with Business Intelligence developers to update module routing and goods movement codes within SAP MM and QM production modules to ensure production records adhere to FDA requirements.",
          "Reduced manual entry of regulated data by 75%, saving $100K/year."
        ]
      },
      {
        title: "Global Data Analytics Challenge: Covid-19 infection analysis",
        details: [
          "Joined analytics competition with the goal of performing comprehensive data analysis on Covid-19 global infection data set",
          "Developed objectives and answered key questions regarding Covid-19 spread using Jupyter notebook platform.",
          "Utilized python modules: Numpy, Pandas, Plotly to generate dynamic Choropleth, bar chart race, and static interactive charts and calculate polynomial trendline best fit with R-Squared value.",
          "Won honorable mention for outstanding data visualization out of 59 submissions",
          'Summary findings report <a href="/support/covid19_analysis.html" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-700 ">here.</a>'
        ]
      },
      {
        title: "Medical Device M&A Product Integration",
        details: [
          "Designed value stream maps and SIPOC in Visio for acquired medical device product lines to streamline subassembly integration.",
          "Generated layout alternatives for subassembly workstreams on AutoCAD, optimizing workstation placement for product flow.",
          "Led integration Kaizen event to stabilize production value streams, reducing defect rate by 10% while improving output speed by 26%, resulting in ~$160k annual savings"
        ]
      }
    ],
    technologies: ["SAP MM/QM", "Jupyter Notebook", "Visio", "AutoCAD", "Microsoft Project", "Lean Six Sigma", "FDA QSR", "Pareto Analyses", "IQ/OQ/PQ", "Minitab"]
  },
  {
    id: 4,
    title: "Data Science Program Manager II",
    company: "Amazon",
    website: "https://www.amazon.com/",
    logo: "/images/AMZ_logo.png",
    icon: "/images/AMZ_icon.png",
    period: "Jun 2021 - Feb 2026",
    location: "Network Engineering & Scheduling Tech (NEST)",
    description: "Led product strategy for ML forecasting and optimization models across Amazon's Middle Mile logistics network. Launched a DeepAR forecasting model delivering $26M in annual savings.",
    achievements: [
      "Planned and executed launch of a DeepAR-based ML forecasting model, delivering $26M in annual savings.",
      "Designed and managed product roadmap for placement design initiative, generating $11.4MM in annual cost savings.",
      "Facilitated integration of scheduling algorithm from pre-production to production, achieving $7.4M in estimated annual savings.",
      "Spearheaded defect reduction program that reduced defect occurrences by 15% and contributed to $1M in annual cost savings.",
      "Implemented document writing review tool using Amazon internal AI platform driven by Anthropic's Claude Sonnet 4 LLM with detailed prompt engineering."
    ],projects: [
      {
        title: "Volume Forecasting - DeepAR Machine Learning Model Launch",
        details: [
          'Planned and executed launch of a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/deepar.html" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-700 ">DeepAR</a>  operations research model, incorporating forward-looking inputs alongside historical time-series data to improve volume accumulation forecasting during periods of volatility. This data-driven solution delivered $26M in annual savings, driving substantial operational improvements in logistics planning.',
          "Partnered with engineering teams to refine and enhance product features, identifying configuration gaps in the forecasting model and leading the development of critical features such as automated alarms and guardrails. This collaboration resulted in the successful mitigation of $1.3M in annual recurring defects by proactively addressing system vulnerabilities.",
          "Utilized advanced performance tracking methods through SQL and R-scripting to gather actionable insights, iterating on product features to continuously improve accuracy. Applied A/B testing to validate feature adjustments, ensuring data-driven decision-making that maximized model performance and reliability.",
          "Managed a phased rollout strategy to scale deployment of model across the network, collaborating with cross-functional teams to ensure seamless product adoption. By leveraging feedback loops and performance metrics, the model was fine-tuned to meet evolving business needs, optimizing forecasting and delivering sustainable value across the organization."
        ]
      },
      {
        title: "Placement Design Product Roadmap planning",
        details: [
          "Designed and managed the product roadmap for a placement design initiative, starting with a product feature for integrating new timestamp data into the forecasting model to improve data accuracy, reduce defect rates by 105bps, and generate $11.4MM in annual cost savings.",
          "Prioritized features based on impact analysis and cross-functional input, leading hypothesis testing and root cause analysis that resulted in cost savings of $270k while ensuring alignment with business objectives and customer needs.",
          "Developed metrics dashboards with custom SQL queries filtering production data to identify gaps in production tech that create defects.",
          "Facilitated collaboration with engineering and operations teams to refine product specifications, implement a robust performance tracking system, and execute a phased rollout strategy to ensure successful adoption and optimization of enhancements."
        ]
      },
      {
        title: "Scheduling Solver Algorithm Product Integration",
        details: [
          "Facilitated integration of scheduling algorithm from pre-production to production pilot by documenting launch ramp strategy and leading root cause analyses for remediation efforts.",
          "Generated test plan, stratified sampling lists and results tracking metrics for A/B testing within production environment to measure quantifiable improvements across multiple KPIs as a direct result of solver integration.",
          "Developed metrics dashboards with custom SQL queries filtering production data to identify gaps in production tech that create defects.",
          "Collaborated with SDE partner teams to execute code updates and code reviews for logic changes within the solver to reduce defect rate generated from solver, improving outbound scheduling workflow and reducing SDE touchpoints in scheduling configuration portal.",
          "Measured and tracked post-launch success upon full integration of solver through key performance indicator metrics, expected savings estimated at $7.4M annually"
        ]
      }
    ],
    technologies: ["SQL", "R", "Python", "AWS", "DeepAR", "A/B Testing", "Data Science","Machine Learning","Product Management","PRDs","Roadmap planning","E-commerce","Prompt Engineering"]
  },
  {
    id: 5,
    title: "Sr Technical Product Ops Manager",
    company: "General Motors",
    website: "https://www.gm.com/innovation/autonomous-driving",
    logo: "/images/GM_Logo.png",
    icon: "/images/GM_icon2.png",
    period: "Feb 2026 - Present",
    location: "Autonomous Vehicle Engineering | Data Operations",
    description: "Own the data products that turn on-road driving footage into training data for GM's autonomous driving and ADAS programs, including Super Cruise. Cut data delivery lead time by 40% while scaling ingestion volume 16x.",
    achievements: [
      "Own two data annotation pipelines end to end, turning on-road driving footage into labeled training data for autonomous vehicle machine learning models.",
      "Take in data requests from ML and engineering teams, translate them into pipeline and annotation requirements, and prioritize the backlog against model training timelines.",
      "Monitor pipeline health, throughput, and data quality day to day, triaging ingestion errors and quality excursions with engineering so training data ships on time.",
      "Manage the human-in-the-loop needs of data annotation pipelines, external vendors on request intake, annotation guidelines, and quality feedback.",
      "Keep ML, engineering, and operations stakeholders aligned on pipeline status, delivery schedules, and upcoming capacity."
    ],projects: [
      {
        title: "On-Road Training Data Pipeline Automation Roadmap",
        details: [
          "Owned the automation roadmap for two data annotation pipelines that supply annotated on-road driving data to autonomous vehicle model training.",
          "Found manual handoffs and tracking gaps across ingestion, annotation, and delivery, then prioritized automation work by its effect on lead time and traceability. This cut data output lead time by 40% while ingestion volume grew 16x.",
          "Authored the long-term product strategy and roadmap for on-road training data pipelines. Leadership approved funding for dedicated engineering headcount to scale automation beyond what the operations team could build.",
          "Worked with external labeling vendors and internal engineering teams to refine automated intake requirements. Folding vendor feedback into request specs reduced the annotation rework rate by 25%."
        ]
      },
      {
        title: "Google Apps Script Automation Toolset",
        details: [
          "<b>Human-in-the-Loop Annotation Tool:</b> Built a server-side Apps Script calculator tool that replaced an error-prone offline workflow for human annotators. Annotators now handle manual annotation requirements in one standardized tool, which improves the efficiency and throughput of the human-in-the-loop annotation process and cuts calculation errors.",
          "<b>Capacity Forecast Calculator:</b> Built a Google Apps Script and Sheets forecasting tool that replaced a manual, multi-input capacity estimation process, cutting quarterly planning time from 2 weeks to about 2 days. The tool forecasts within 10% of actual volume and is now the org's standard tool for quarter-over-quarter planning. It combines annotation throughput rates, planned ingestion volume, the ML model training event schedule, and external vendor capacity to project annotation demand against available capacity. Leadership uses it for headcount requests, operations for annotator staffing, ML and engineering teams to size training event data volume, and program managers to allocate work between in-house annotators and vendors.",
          "<b>Pipeline Artifact Archival & Versioning:</b> Built a Git repository integration that automatically versions and archives pipeline artifacts. This gives every data request a traceable history and reduces manual tracking of quality excursions.",
          "<b>Pipeline Notification System:</b> Designed automated notifications that track data requests through the pipeline and alert owners when ingestion errors occur, increasing the share of ingestion errors resolved by 15%.",
          "Wrote the requirements, built, and maintained all three tools, cutting manual work for operations staff while engineering headcount for long-term automation was being funded."
        ]
      },
      {
        title: "Pre-Labeled Training Data Pilot",
        details: [
          "Piloted and executed an end-to-end data pipeline product from initiation through delivery, processing 125 hours of autonomous driving training footage.",
          "Defined pipeline requirements, coordinated handoffs between engineering and an external vendor, and tracked delivery milestones, enabling the purchase of pre-labeled training data and opening a new data sourcing channel for model training."
        ]
      }
    ],
    technologies: ["Google Apps Script", "JavaScript", "Google Sheets", "Git", "Data Pipelines", "Human-in-the-Loop ML", "Data Annotation", "Vendor Management", "Product Roadmapping", "Product Strategy", "Autonomous Vehicles", "ADAS"]
  },
];

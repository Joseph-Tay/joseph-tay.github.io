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
    description: "Conducted aviation research focused on human factors and pilot performance.",
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
    period: "Mar 2017 - Jan 2018",
    location: "Riverside Packer | Quality Engineering",
    description: "Managed quality engineering processes for food production facility and led facility startup initiatives.",
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
    period: "Jan 2018 - July 2021",
    location: "Structural Heart | Manufacturing Engineering",
    description: "Led manufacturing engineering initiatives for medical device production, focusing on automation and process optimization.",
    achievements: [
      "Developed new tooling prototype process using 3D-printing, improving prototype iteration speed by 85%",
      "Led cross-functional team for heart valve assembly yield optimization, improving product yield by 10%",
      "Generated root-cause analysis reports using statistical techniques like pareto charts and control charts",
      "Successfully submitted FDA HDE 75-day submission allowing production of new subassembly specifications"
    ], projects: [
      {
        title: "Electronic Device History Record (e-DHR) Automation Product Development",
        details: [
          "Spearheaded design of product and information flow during implementation of e-DHR initiative using streams in Visio.",
          "Created work breakdown structure with cross-functional team using Microsoft Project and Mindjet MindManager.",
          "Collaborated with Business Intelligence developers to update module routing and goods movement codes within SAP MM and QM production modules to ensure production records adhere to FDA requirements.",
          "Successfully automated data entry manual requirements by 30%, leading to financial favorability of $90k/year"
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
    period: "July 2021 - Present",
    location: "Network Engineering & Scheduling Tech (NEST)",
    description: "Leading data science initiatives and product roadmap planning for logistics optimization and forecasting models.",
    achievements: [
      "Planned and executed launch of a DeepAR operations research model, delivering ~$20MM in annual defect mitigation",
      "Designed and managed product roadmap for placement design initiative, generating $11.4MM in annual cost savings",
      "Facilitated integration of scheduling algorithm from pre-production to production, achieving $7.4M in estimated annual savings",
      "Spearheaded defect reduction program that reduced defect occurrences by 15% and contributed to $1M in annual cost savings"
    ],projects: [
      {
        title: "Volume Forecasting - DeepAR Machine Learning Model Launch",
        details: [
          'Planned and executed launch of a <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/deepar.html" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-700 ">DeepAR</a>  operations research model, incorporating forward-looking inputs alongside historical time-series data to improve volume accumulation forecasting during periods of volatility. This data-driven solution delivered ~$20MM in annual defect mitigation, driving substantial operational improvements in logistics planning.',
          "Partnered with engineering teams to refine and enhance product features, identifying configuration gaps in the forecasting model and leading the development of critical features such as automated alarms and guardrails. This collaboration resulted in the successful mitigation of ~$1MM in annual recurring defects by proactively addressing system vulnerabilities.",
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
        title: "Scheduling Solver Algorithm Product IntegrationMedical Device M&A Product Integration",
        details: [
          "Facilitated integration of scheduling algorithm from pre-production to production pilot by documenting launch ramp strategy and leading root cause analyses for remediation efforts.",
          "Generated test plan, stratified sampling lists and results tracking metrics for A/B testing within production environment to measure quantifiable improvements across multiple KPIs as a direct result of solver integration.",
          "Developed metrics dashboards with custom SQL queries filtering production data to identify gaps in production tech that create defects.",
          "Collaborated with SDE partner teams to execute code updates and code reviews for logic changes within the solver to reduce defect rate generated from solver, improving outbound scheduling workflow and reducing SDE touchpoints in scheduling configuration portal.",
          "Measured and tracked post-launch success upon full integration of solver through key performance indicator metrics, expected savings estimated at $7.4M annually"
        ]
      }
    ],
    technologies: ["SQL", "R", "Python", "AWS", "DeepAR", "A/B Testing", "Data Science"]
  },
];

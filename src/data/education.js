// src/data/education.js
export const education = {
  degree: "B.S. Industrial Engineering",
  period: "2012 - 2016",
  institution: "Purdue University | Edwardson School of Industrial Engineering",
  logo: "/images/purdue_logo.png",
  website: "https://engineering.purdue.edu/IE", 
  minors: ["Economics", "Statistics"],
  projects: [
    {
      title: "IE431 Senior Design Project",
      company: "Fewell Monument",
      description: "Production Planning System Design",
      details: [
        "Partnered with Fewell Monument in Scottsburg, IN to analyze production capacity constraints and demand fulfillment challenges for custom monument manufacturing",
        "Developed a multivariate regression model incorporating deterministic variables (material type, size dimensions, engraving complexity) and process parameters to predict manufacturing lead times",
        "Conducted statistical validation using historical production data with cross-validation techniques and residual analysis to ensure model accuracy and identify outliers",
        "Supported company efforts to reduce late order fulfillment by establishing data-driven delivery commitments"
      ],
      skills: ["Multivariate Regression Analysis", "Statistical Validation", "Predictive Analytics", "Cross-Validation", "Time Series Forecasting", "Production Planning", "Data Mining", "Statistical Modeling"]
    },
    {
      title: "IE332 Capstone Design Project",
      company: "Wine Company",
      description: "IT Infrastructure Redesign",
      details: [
        "Developed website for simulated wine company's intranet webpage using HTML/CSS",
        "Constructed optimal sales model and workflow using Arena Software to determine best allocation of resources",
        "Utilized MySQL to develop and query a database of sales and business strategy metrics for easy compilation",
        "Generated method to forecast future sales by using R statistical package to analyze queried metrics",
        "Designed floor plan for optimum throughput rate of consumers and products using AutoCAD"
      ],
      skills: ["HTML/CSS", "Arena Simulations", "MySQL", "R Programming", "AutoCAD", "Database Design", "Sales Forecasting", "Workflow Optimization"]
    }
  ],
  awards: [
    "Semester Honors (2016)",
    "Dean's List Award (2012)",
    "Chancellor's Recognition Scholarship (2012)"
  ],
    affiliations: [
        {
      name: "Alpha Pi Mu Honor Society",
      website: "https://www.alphapimu.com/"
    },
    {
      name: "National Society of Collegiate Scholars", 
      website: "https://www.nscs.org"
    }
  ],
  coursework: {
    major: [
      {
        name: "Probability and Statistics in Engineering I & II (IE230, IE330)",
        description: "Probability and probability distributions. Mathematical expectation. Functions of random variables. Estimation. Applications oriented to engineering problems. Statistical inference and experimental design. Correlation, regression, single and multi-factor ANOVA, non-parametric methods. Applications to statistical quality control."
      },
      {
        name: "Computing in Industrial Engineering (IE332)",
        description: "Introduction to computing in industrial engineering. Reinforcement of scientific programming skills on typical IE tasks, together with introduction to simulation and related computer tools."
      },
      {
        name: "Operations Research - Optimization (IE335)",
        description: "Introduction to deterministic optimization modeling and algorithms in operations research. Emphasis on formulation and solution of linear programs, networks flows, and integer programs."
      },
      {
        name: "Operations Research - Stochastic Models (IE336)",
        description: "Introduction to probabilistic models in operations research. Emphasis on Markov chains, Poisson processes, and their application to queueing systems."
      },
      {
        name: "Engineering Economics (IE343)",
        description: "Cost measurement and control in engineering studies. Basic accounting concepts, income measurement, and valuation problems. Manufacturing cost control and standard cost systems."
      },
      {
        name: "Manufacturing Processes I (IE370)",
        description: "Principal manufacturing processes; metal cutting, grinding and metal forming operations, machine tools, and tools and tooling. Nontraditional machining and welding."
      },
      {
        name: "Work Analysis and Design I & II (IE386, IE486)",
        description: "Fundamentals of work methods and measurement. Applications of engineering, psychological, and physiological principles to the analysis and design of human work systems."
      },
      {
        name: "Integrated Production Systems I & II (IE383, IE484)",
        description: "Basic concepts in the design and operational control of integrated production systems. Includes topics on facility layout, material handling, and production planning."
      }
    ],
    economics: [
      {
        name: "Intro to Microeconomics (ECON201)",
        description: "Microeconomics studies the choices individuals make and the incentives that influence those choices. Emphasis is on the incentives that determine market prices and resource allocation."
      },
      {
        name: "Macroeconomics (ECON252)",
        description: "Introduction to macroeconomic theory. The course develops a theoretical framework permitting an analysis of the forces affecting national income, employment, interest rates, and inflation."
      },
      {
        name: "Intermediate Macroeconomics (ECON352)",
        description: "A more rigorous, general equilibrium treatment of macroeconomic theory with emphasis on consumption, investment, unemployment, inflation and long-run economic growth."
      },
      {
        name: "Game Theory (ECON451)",
        description: "Economic, political, and social interactions are represented as games. Analysis of these interactions demonstrates how to make optimal decisions under uncertainty."
      },
      {
        name: "Industrial Organization (ECON461)",
        description: "Examines the determinants of firm and market structure and resulting market performance in imperfectly-competitive markets. Advanced topics include advertising and R&D."
      }
    ],
    statistics: [
      {
        name: "Applied Regression Analysis (STAT512)",
        description: "Inference in simple and multiple linear regression, residual analysis, transformations, polynomial regression, model building with real data, nonlinear regression."
      },
      {
        name: "Design of Experiments (STAT514)",
        description: "Fundamentals, completely randomized design; randomized complete blocks; factorial designs; nested factorial; incomplete block and fractional replications."
      },
      {
        name: "Quality Control (IE530)",
        description: "Principles and practices of statistical quality control in industry. Control charts for measurements and attributes. Acceptance sampling and sequential analysis."
      }
    ]
  }
};
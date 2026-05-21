import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Building2,
  Layers3,
  Activity,
  Map,
  HardHat,
  Filter,
  UserRound,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const makeCards = (items) =>
  items.map(([title, subtitle, tag, gradient, image]) => ({
    title,
    subtitle,
    tag,
    gradient,
    image,
  }));

const learningHubVisualCards = makeCards([
  [
    "Exterior BIM Model",
    "Six-storey book-shaped learning hub facade and site context",
    "Render",
    "from-stone-300 via-slate-500 to-slate-900",
    "/portfolio_assets/3d model.png",
  ],
  [
    "Adaptive Learning Layout",
    "Flexible floor plans showing alternative room and study-space configurations",
    "Plan + 3D",
    "from-slate-200 via-cyan-600 to-slate-950",
    "/portfolio_assets/adaptive learning layout.png",
  ],
  [
    "Parametric Wall Family",
    "Revit family parameters for collapsible partition panels and frame dimensions",
    "Revit Family",
    "from-sky-200 via-indigo-500 to-slate-950",
    "/portfolio_assets/parametric wall family.png",
  ],
]);

const mobilityHubVisualCards = makeCards([
  ["Parametric Bus Terminal Canopy", "Conceptual long-span transport shelter developed in Revit", "Architectural BIM", "from-sky-100 via-cyan-500 to-slate-950", "/portfolio_assets/3d render.png"],
  ["Adaptive Structural Family", "Parametric girder family with formula-driven dimensions and IFC parameters", "Revit Family", "from-slate-200 via-slate-600 to-slate-950", "/portfolio_assets/adaptive structural family.png"],
  ["Structural Workflow & Analysis", "Conceptual modelling, structural analysis and connection detailing workflow", "Structural Engineering", "from-indigo-100 via-blue-700 to-slate-950", "/portfolio_assets/structural workflow analysis.png"],
]);

const rainbowVisualCards = makeCards([
  ["National Seismic Context Mapping", "Regional mapping framework showing Ghana within the West African seismic context", "Regional GIS", "from-yellow-100 via-yellow-700 to-stone-950", "/portfolio_assets/gha pol map.png"],
  ["Historical & Recent Earthquake Catalogue", "Spatial distribution of historical and instrumental earthquake events across Ghana", "Seismic Hazard", "from-red-100 via-rose-700 to-slate-950", "/portfolio_assets/gha EQ cat.png"],
  ["Seismic Station Network", "Mapping and classification of seismic monitoring stations and instrumentation types", "Monitoring Network", "from-violet-100 via-purple-700 to-slate-950", "/portfolio_assets/gha seismic stations.png"],
  ["Topographic Interpretation", "Terrain and elevation analysis supporting hazard interpretation workflows", "Topography", "from-lime-100 via-green-700 to-slate-950", "/portfolio_assets/topo.png"],
  ["Vs30 Site Classification", "Shear-wave velocity mapping and soil classification for seismic response evaluation", "Site Response", "from-emerald-100 via-teal-700 to-slate-950", "/portfolio_assets/vs30.png"],
  ["Building Vulnerability Classification", "Earthquake, flood and wind vulnerability classification using GIS-supported building stock analysis", "Building Stock", "from-orange-100 via-amber-700 to-stone-950", "/portfolio_assets/EQ vulnerability of building stock.png"],
]);

const multiHazardVisualCards = makeCards([
  ["National Hazard Exposure Mapping", "Country-scale GIS mapping framework for multi-hazard assessment across Nigeria", "GIS Mapping", "from-yellow-100 via-amber-700 to-stone-950", "/portfolio_assets/nigeria pol map.png"],
  ["Flood Frequency Distribution", "Spatial representation of recurrent flood exposure and vulnerable regions", "Flood Analysis", "from-red-100 via-red-700 to-slate-950", "/portfolio_assets/flood frequency map.png"],
  ["Flood Extent Identification", "Riverine flood extent mapping and exposure interpretation using spatial datasets", "Exposure Mapping", "from-emerald-100 via-green-700 to-slate-950", "/portfolio_assets/2012 flood extent.png"],
  ["Historic Drought Frequency", "Long-term drought recurrence analysis and climatic stress visualization", "Climate Hazard", "from-orange-100 via-yellow-700 to-stone-950", "/portfolio_assets/historic drought frequency.png"],
  ["Temporal Multi-Hazard Scenario", "Chronological representation of cascading hazard progression and event evolution", "Hazard Timeline", "from-cyan-100 via-blue-700 to-slate-950", "/portfolio_assets/noto event page 1.png"],
  ["Cascading Hazard Chains", "Trigger mechanisms, secondary hazards and displacement impacts", "Risk Interaction", "from-violet-100 via-fuchsia-700 to-slate-950", "/portfolio_assets/2012 flood cascading effects.png"],
]);

const azureVisualCards = makeCards([
  ["Scaled Ground Motion Histories", "Comparison of scaled rock and soft soil acceleration time histories", "Seismic Input", "from-sky-100 via-blue-700 to-slate-950", "/portfolio_assets/scaled time histories according to seismic zone .png"],
  ["Bare vs Infilled Structural Models", "Comparative RC frame modelling with and without masonry infill representation", "Structural Modelling", "from-red-100 via-purple-700 to-slate-950", "/portfolio_assets/bare and infilled frame models.png"],
  ["Elastic & Design Spectra", "Rock and soft-soil spectrum generation based on seismic code procedures", "Response Spectrum", "from-cyan-100 via-teal-700 to-slate-950", "/portfolio_assets/Elastic and design spectra used accoording to GS1207.png"],
  ["Plastic Hinge Performance", "Moment-rotation behaviour and hinge performance evaluation across storeys", "Nonlinear Behaviour", "from-orange-100 via-red-700 to-slate-950", "/portfolio_assets/hinge definition.png"],
  ["Capacity Spectrum & Performance Point", "ADRS representation and seismic performance-point evaluation", "Performance-Based Design", "from-amber-100 via-orange-700 to-slate-950", "/portfolio_assets/performance point.png"],
  ["Damage Localization Comparison", "Comparison of failure mechanisms and damage propagation", "Damage Prognosis", "from-pink-100 via-fuchsia-700 to-slate-950", "/portfolio_assets/deformation progression nonlinear analysis.png"],
]);

const masonryPerformanceVisualCards = makeCards([
  ["URM Numerical Model Development", "Three-dimensional unreinforced masonry modelling and discretization workflow", "Structural Modelling", "from-stone-100 via-slate-500 to-slate-950", "/portfolio_assets/3MURI model.png"],
  ["Equivalent Frame Idealization", "Pier-spandrel macro-element representation and mesh discretization", "3Muri / Tremuri", "from-orange-100 via-amber-700 to-stone-950", "/portfolio_assets/3muri model with pier, spandrels and rigid nodes.png"],
  ["Pushover Damage Evolution", "Progressive failure interpretation from nonlinear pushover analysis", "Nonlinear Analysis", "from-yellow-100 via-orange-700 to-red-950", "/portfolio_assets/push over damage evolution.png"],
  ["EMS-98 Damage Prognosis", "Damage state classification at DL, SD and NC performance levels", "Damage Assessment", "from-red-100 via-rose-700 to-slate-950", "/portfolio_assets/damage prognosis according to EMS-98.png"],
  ["Scaled Shaking Table Modelling", "Physical small-scale masonry specimen development for seismic assessment", "Experimental Testing", "from-cyan-100 via-blue-700 to-slate-950", "/portfolio_assets/shake table model.png"],
  ["Failure Mechanism Interpretation", "Rocking, diagonal cracking and shear sliding failure mechanisms", "Damage Mechanisms", "from-fuchsia-100 via-pink-700 to-slate-950", "/portfolio_assets/comparison of damage patterns.png"],
]);

const coalesceVisualCards = makeCards([
  ["Construction Phase", "Scaffolded residential units during active construction and finishing works", "Site Progress", "from-stone-300 via-orange-700 to-slate-950", "/portfolio_assets/duplex in cons.png"],
  ["Completed Duplex Facade", "Modern residential elevation with balconies and architectural detailing", "Completed Works", "from-amber-100 via-orange-500 to-slate-900", "/portfolio_assets/duplex finished.png"],
  ["Interior Finishing", "Completed wardrobe installation and interior finishing coordination", "Interior", "from-neutral-100 via-yellow-700 to-slate-950", "/portfolio_assets/row house finish.png"],
  ["Aerial Estate Overview", "Multi-unit residential development coordination and site planning", "Masterplan", "from-orange-100 via-amber-700 to-slate-950", "/portfolio_assets/row house finish beta 2.png"],
]);

const zentroaVisualCards = makeCards([
  ["Foundation & Infrastructure Works", "Welding Works", "Site Progress", "from-orange-200 via-orange-700 to-stone-950", "/portfolio_assets/marketing suite in cons.png"],
  ["Marketing / Prototype Building", "Completed architectural showcase unit used for client presentation", "Show Unit", "from-stone-100 via-orange-500 to-slate-950", "/portfolio_assets/marketing suite completed.png"],
  ["Estate Construction Progress", "Multi-building residential development under simultaneous construction phases", "Aerial Progress", "from-amber-100 via-yellow-700 to-stone-950", "/portfolio_assets/zen overview 1.png"],
]);

const projects = [
  {
    title: "Future Mobility Hub — Weimar Bus Station",
    category: "BIM + Structural",
    type: "Digital Project",
    tools: ["Revit", "Robot Structural Analysis", "Dynamo", "ACC", "Idea Statica"],
    summary:
      "Interdisciplinary BIM and structural workflow for a conceptual mobility hub, including parametric Revit families, structural simplification, load path studies, Robot analysis and BIM coordination conventions.",
    highlights: [
      "Developed parametric Revit families for adaptable structural elements",
      "Translated physical design intent into analytical structural models",
      "Investigated load transfer from roof grid to columns and supports",
      "Used Revit–Robot workflows and Dynamo-supported modelling adjustments",
      "Applied BIM coordination logic, file naming and BEP principles",
    ],
    accent: "from-slate-900 to-blue-900",
    visualCards: mobilityHubVisualCards,
  },
  {
    title: "Inclusive Learning Hub",
    category: "BIM Automation",
    type: "Advanced BIM Project",
    tools: ["Revit", "Dynamo", "Desite MD", "IFC"],
    summary:
      "A flexible library concept using parametric Revit families and Dynamo automation to support adaptive learning spaces with collapsible partition systems and 4D simulation workflows.",
    highlights: [
      "Created parametric collapsible wall family with scalable panel logic",
      "Built Dynamo workflow for automated wall placement using room boundaries",
      "Explored flexible layouts for visual, auditory and kinesthetic learning spaces",
      "Linked IFC model components to schedule activities in Desite MD",
      "Used smart sets and ActivityGroup parameters for 4D simulation logic",
    ],
    accent: "from-indigo-900 to-cyan-800",
    visualCards: learningHubVisualCards,
    videos: [
      {
        title: "Wall placement demonstration",
        note: "Dynamo-driven collapsible wall placement workflow",
        src: "/portfolio_assets/wall placement demonstration.mp4",
        type: "video/mp4",
      },
      {
        title: "4D simulation",
        note: "Desite MD construction sequence simulation.",
        src: "/portfolio_assets/Group04_4D_SIMULATION.mp4",
        type: "video/mp4",
      },
    ],
  },
  {
    title: "Structural Design and Performance Assessment",
    category: "Structural + Seismic",
    type: "Masonry Seismic Assessment Project",
    tools: ["3Muri", "Tremuri", "MATLAB", "Shake Table Testing", "EMS-98", "EN 1998-3"],
    summary:
      "Integrated numerical and experimental assessment of unreinforced and reinforced masonry structures involving equivalent frame modelling, pushover analysis, EMS-98 damage classification and shaking-table-based seismic evaluation.",
    highlights: [
      "Developed URM and reinforced masonry structural models using equivalent frame methodologies",
      "Performed nonlinear pushover analysis and interpreted progressive damage evolution",
      "Classified structural performance at DL, SD and NC limit states using EMS-98",
      "Compared numerical predictions with observed experimental shaking-table damage",
      "Investigated rocking, shear sliding and diagonal cracking failure mechanisms",
    ],
    accent: "from-stone-900 to-orange-800",
    visualCards: masonryPerformanceVisualCards,
  },
  {
    title: "Project Azure III — Seismic Damage Prognosis",
    category: "Structural + Seismic",
    type: "Academic Engineering Project",
    tools: ["SAP2000", "MATLAB", "Excel", "FEMA 356/440", "EN 1998-3"],
    summary:
      "Linear and nonlinear seismic assessment of a multistory reinforced concrete frame comparing bare-frame and weak-storey infilled configurations under rock and soft-soil conditions.",
    highlights: [
      "Performed LFA, RSA, linear time-history, pushover and nonlinear time-history analysis",
      "Modelled infill effects using equivalent diagonal struts",
      "Compared base shear, inter-storey drift, force distribution and performance points",
      "Evaluated weak-storey mechanisms and plastic hinge development",
      "Showed that nonlinear analysis better captures damage localization",
    ],
    accent: "from-red-900 to-orange-700",
    visualCards: azureVisualCards,
  },
  {
    title: "GIS & Multi-Hazard Building Stock Analysis",
    category: "GIS + Risk",
    type: "Risk Analysis Project",
    tools: ["QGIS", "Google Earth", "Apple Look Around", "Excel"],
    summary:
      "GIS-based hazard and vulnerability assessment combining earthquake catalogue mapping, seismic station mapping, Vs30/topography interpretation and building stock classification.",
    highlights: [
      "Created thematic maps for earthquake catalogue, seismic stations, topography and Vs30",
      "Classified building stock using roof, wall, storey, cellar, regularity and condition indicators",
      "Assigned earthquake, flood and wind vulnerability classes",
      "Used remote imagery and GIS workflows for exposure characterization",
      "Developed tagged-building examples with full attribute documentation",
    ],
    accent: "from-emerald-900 to-teal-700",
    visualCards: rainbowVisualCards,
  },
  {
    title: "Multi-Hazard Risk Assessment — Nigeria & Global Events",
    category: "Risk + Research",
    type: "Natural Hazard Assessment",
    tools: ["QGIS", "Excel", "Hazard Databases", "Literature Review"],
    summary:
      "Assessment of flood, erosion, drought, landslide and cascading hazard chains in Nigeria, with comparative documentation of recent global hazard events.",
    highlights: [
      "Built multi-hazard scenario timelines linking rainfall, flooding, displacement and health impacts",
      "Mapped hazard exposure and cascading flood impacts",
      "Reviewed data availability for risk assessment and recovery planning",
      "Compared international multi-hazard event sequences",
      "Linked hazard chains to resilience planning and building-code enforcement needs",
    ],
    accent: "from-amber-900 to-yellow-700",
    visualCards: multiHazardVisualCards,
  },
  {
    title: "Project Coalesce",
    category: "Construction",
    type: "Professional Experience — Rolling Bricks LTD",
    tools: ["MS Project", "Excel", "AutoCAD", "Site Coordination"],
    summary:
      "Residential housing development involving detached duplexes and terrace units, managed from carcass at second-floor stage through handover to client.",
    highlights: [
      "Coordinated construction workflows and site activities",
      "Managed resource allocation and project execution processes",
      "Supported quality management and interdisciplinary coordination",
      "Worked between design and site teams",
      "Contributed to timely delivery of housing units",
    ],
    accent: "from-stone-900 to-zinc-700",
    visualCards: coalesceVisualCards,
  },
  {
    title: "Project Zentroa",
    category: "Construction",
    type: "Professional Experience — Rolling Bricks LTD",
    tools: ["MS Project", "Excel", "Payment Logs", "Schedule Tracking", "QA/QC"],
    summary:
      "Large residential development with detached duplexes, twin villas and row houses, involving site coordination, schedule tracking, payment authorization and quality control.",
    highlights: [
      "Coordinated contractors, site activities and materials",
      "Tracked construction schedule and workflow progress",
      "Managed QA/QC documentation and process records",
      "Supported payment authorization and operational spreadsheets",
      "Oversaw works from foundation to upper-floor stages across phases",
    ],
    accent: "from-neutral-900 to-slate-700",
    visualCards: zentroaVisualCards,
    videos: [
      {
        title: "Earthwork stage",
        note: "Site preparation and earthwork sequence captured during groundworks.",
        src: "/portfolio_assets/earthwork stage.mp4",
        type: "video/mp4",
      },
      {
        title: "Ground floor stages",
        note: "Ground floor construction progression across the estate.",
        src: "/portfolio_assets/groundfloor stages.mp4",
        type: "video/mp4",
      },
    ],
  },
];

const competencies = [
  {
    icon: Layers3,
    title: "BIM & Digital Engineering",
    items: ["BIM modelling & coordination", "Parametric modelling", "Dynamo automation", "IFC workflows", "4D simulation", "ACC/CDE collaboration"],
  },
  {
    icon: Activity,
    title: "Structural & Seismic Engineering",
    items: ["Structural modelling", "RSA / THA / NTHA", "Pushover analysis", "Performance-based assessment", "RC and masonry structures", "Damage prognosis"],
  },
  {
    icon: Map,
    title: "Natural Hazards & Risk Analysis",
    items: ["GIS spatial analysis", "Building stock survey", "Vulnerability classification", "Earthquake risk", "Flood/wind exposure", "Cascading hazards"],
  },
  {
    icon: HardHat,
    title: "Construction & Project Delivery",
    items: ["Construction coordination", "Project scheduling", "Quality control", "Resource coordination", "Quantity tracking", "Technical documentation"],
  },
];

const filters = ["All", "BIM + Structural", "BIM Automation", "Structural + Seismic", "GIS + Risk", "Risk + Research", "Construction"];
const softwareTools = ["Revit", "Dynamo", "Robot Structural Analysis", "SAP2000", "Tremuri / 3Muri", "Desite MD", "Autodesk Construction Cloud", "Navisworks", "QGIS", "MATLAB", "MS Project", "Excel", "AutoCAD", "Idea Statica"];

const uiText = {
  en: {
    portfolio: "Portfolio",
    navProjects: "Projects",
    navCompetencies: "Competencies",
    navExperience: "Experience",
    navContact: "Contact",
    heroBadge: "BIM Engineer • Structural Engineering • Construction • Risk Analysis",
    heroTitle: "Digital structural engineering for coordinated, resilient built environments.",
    heroText: "Multidisciplinary engineering graduate student with practical construction management experience and project work across BIM automation, structural analysis, seismic assessment, GIS-based risk analysis and digital project delivery.",
    viewProjects: "View Projects",
    contact: "Contact",
    aboutLabel: "About",
    aboutTitle: "BIM & Digital Structural Engineer",
    aboutText: "I combine almost four years of practical construction industry experience with academic training in natural hazards and risks in structural engineering. My work sits at the intersection of BIM, structural engineering, construction management and resilience-oriented analysis.",
    competenciesLabel: "Core Competencies",
    competenciesTitle: "Technical profile",
    projectsLabel: "Featured Projects",
    projectsTitle: "Selected engineering work",
    filter: "Filter:",
    experienceLabel: "Experience",
    experienceTitle: "Construction management background",
    softwareLabel: "Software",
    contactLabel: "Contact",
    contactTitle: "Let’s connect",
    contactText: "Available for BIM, digital construction, structural engineering and resilience-oriented engineering opportunities.",
    profileBadge: "MSc Natural Hazards & Risks in Structural Engineering",
    profileText: "BIM-focused structural engineering graduate student combining digital engineering, seismic assessment, GIS-based risk analysis and practical construction management experience.",
    videoLabel: "Process Videos",
    videoText: "Workflow demonstrations linked to this project.",
  },
  de: {
    portfolio: "Portfolio",
    navProjects: "Projekte",
    navCompetencies: "Kompetenzen",
    navExperience: "Erfahrung",
    navContact: "Kontakt",
    heroBadge: "BIM-Ingenieur • Tragwerksplanung • Digitales Bauen • Risikoanalyse",
    heroTitle: "Digitale Tragwerksplanung für koordinierte und resiliente Bauprojekte.",
    heroText: "Multidisziplinärer Masterstudent im Ingenieurwesen mit praktischer Erfahrung im Baumanagement und Projektarbeit in BIM-Automatisierung, Strukturanalyse, seismischer Bewertung, GIS-basierter Risikoanalyse und digitaler Projektabwicklung.",
    viewProjects: "Projekte ansehen",
    contact: "Kontakt",
    aboutLabel: "Über mich",
    aboutTitle: "BIM- und digitaler Tragwerksingenieur",
    aboutText: "Ich verbinde fast vier Jahre praktische Erfahrung in der Bauindustrie mit akademischer Ausbildung im Bereich Naturgefahren und Risiken im Bauingenieurwesen. Meine Arbeit liegt an der Schnittstelle von BIM, Tragwerksplanung, Baumanagement und resilienter Strukturanalyse.",
    competenciesLabel: "Kernkompetenzen",
    competenciesTitle: "Technisches Profil",
    projectsLabel: "Ausgewählte Projekte",
    projectsTitle: "Ingenieurprojekte",
    filter: "Filter:",
    experienceLabel: "Erfahrung",
    experienceTitle: "Erfahrung im Baumanagement",
    softwareLabel: "Software",
    contactLabel: "Kontakt",
    contactTitle: "Kontakt aufnehmen",
    contactText: "Verfügbar für Tätigkeiten in BIM, digitalem Bauen, Tragwerksplanung und resilienter Ingenieurpraxis.",
    profileBadge: "MSc Naturgefahren und Risiken im Bauingenieurwesen",
    profileText: "BIM-orientierter Masterstudent im Tragwerksingenieurwesen mit Erfahrung in digitalem Engineering, seismischer Bewertung, GIS-basierter Risikoanalyse und praktischem Baumanagement.",
    videoLabel: "Prozessvideos",
    videoText: "Workflow-Demonstrationen zu diesem Projekt.",
  },
};

function LinkedInMark({ className = "" }) {
  return (
    <span aria-hidden="true" className={`inline-flex h-[18px] w-[18px] items-center justify-center rounded-[4px] bg-cyan-300 text-[11px] font-bold leading-none text-slate-950 ${className}`}>
      in
    </span>
  );
}

function getFilteredProjects(activeFilter) {
  return activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);
}

function validatePortfolioData() {
  const projectCategories = new Set(projects.map((project) => project.category));
  const missingFilters = filters.filter((filter) => filter !== "All" && !projectCategories.has(filter));
  const emptyProjectFields = projects.filter((project) => !project.title || !project.category || !project.summary || !Array.isArray(project.highlights) || project.highlights.length === 0);
  const emptyCompetencyFields = competencies.filter((competency) => !competency.title || !Array.isArray(competency.items) || competency.items.length === 0);
  const invalidMediaProjects = projects.filter((project) => !Array.isArray(project.visualCards) || (project.videos && !Array.isArray(project.videos)));
  const learningHub = projects.find((project) => project.title === "Inclusive Learning Hub");

  return {
    hasProjects: projects.length > 0,
    allFiltersMatchProjects: missingFilters.length === 0,
    allProjectsHaveRequiredFields: emptyProjectFields.length === 0,
    allCompetenciesHaveRequiredFields: emptyCompetencyFields.length === 0,
    allMediaFieldsAreArrays: invalidMediaProjects.length === 0,
    learningHubHasVideos: Boolean(learningHub?.videos?.length),
    filterTestsPass: getFilteredProjects("All").length === projects.length && getFilteredProjects("BIM Automation").every((project) => project.category === "BIM Automation"),
    languageTestsPass: uiText.en.heroTitle.length > 0 && uiText.de.heroTitle.length > 0,
  };
}

if (typeof console !== "undefined") {
  const testResults = validatePortfolioData();
  console.assert(testResults.hasProjects, "Portfolio should include at least one project.");
  console.assert(testResults.allFiltersMatchProjects, "Every non-All filter should match at least one project category.");
  console.assert(testResults.allProjectsHaveRequiredFields, "Every project should include title, category, summary, and highlights.");
  console.assert(testResults.allCompetenciesHaveRequiredFields, "Every competency should include title and at least one item.");
  console.assert(testResults.allMediaFieldsAreArrays, "Every project should include visualCards, and videos should be arrays when present.");
  console.assert(testResults.learningHubHasVideos, "Learning Hub should include process videos.");
  console.assert(testResults.filterTestsPass, "Project filtering should return expected projects.");
  console.assert(testResults.languageTestsPass, "Both English and German UI text should be available.");
}

function VisualCards({ cards }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-1">
      {cards.map((card) => (
        <div key={card.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-black/20">
          <div className={`relative h-[500px] overflow-hidden bg-gradient-to-br ${card.gradient}`}>
            {card.image ? (
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/25 to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0,transparent_35%)]" />
            <div className="absolute inset-0 flex flex-col justify-between p-4">
              <span className="w-fit rounded-full bg-black/45 px-3 py-1 text-xs text-white/90 backdrop-blur">{card.tag}</span>
              <div>
                <h4 className="text-lg font-semibold text-white drop-shadow">{card.title}</h4>
                <p className="mt-1 text-sm text-white/85">{card.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function VideoPlaceholders({ videos, text }) {
  return (
    <div className="mt-6 grid gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{text.videoLabel}</p>
        <p className="mt-1 text-sm text-slate-400">{text.videoText}</p>
      </div>
      {videos.map((video) => (
        <div key={video.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
          {video.src ? (
            <video controls preload="metadata" className="w-full bg-black">
              <source src={video.src} type={video.type || "video/mp4"} />
              Your browser does not support embedded video playback.
            </video>
          ) : null}
          <div className="p-4">
            <p className="text-sm font-medium text-cyan-200">{video.title}</p>
            <p className="mt-1 text-xs text-slate-400">{video.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProfileCard({ text }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
      <div className="relative min-h-[520px] bg-gradient-to-br from-slate-800 via-slate-950 to-cyan-950">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-slate-950" />
        <div className="relative flex min-h-[520px] flex-col justify-between p-6">
          <div className="mx-auto mt-4 h-52 w-52 overflow-hidden rounded-full border border-cyan-300/30 bg-white/10 shadow-2xl backdrop-blur">
            {!imageError ? (
              <img
                src="/portfolio_assets/photo in office.jpg"
                alt="Obinna Rosato Ndupuechi"
                className="h-full w-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <UserRound className="text-cyan-200" size={84} />
              </div>
            )}
          </div>
          <div>
            <div className="inline-flex rounded-full border border-cyan-300/30 bg-slate-950/50 px-4 py-2 text-sm text-cyan-200 backdrop-blur">{text.profileBadge}</div>
            <h3 className="mt-4 text-3xl font-bold text-white">Obinna Rosato Ndupuechi</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">{text.profileText}</p>
            <div className="mt-6 grid gap-3">
              {["BIM Coordination", "Parametric + Dynamo Workflows", "Structural & Seismic Analysis", "GIS + Hazard Risk Mapping", "Construction Project Delivery"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-200">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function PortfolioWebsite() {
  const [active, setActive] = useState("All");
  const [lang, setLang] = useState("en");
  const text = uiText[lang];
  const filtered = useMemo(() => getFilteredProjects(active), [active]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{text.portfolio}</p>
            <h1 className="text-lg font-semibold">Obinna Rosato Ndupuechi</h1>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">{text.navProjects}</a>
            <a href="#competencies" className="hover:text-white">{text.navCompetencies}</a>
            <a href="#experience" className="hover:text-white">{text.navExperience}</a>
            <a href="#contact" className="hover:text-white">{text.navContact}</a>
            <button
              onClick={() => setLang(lang === "en" ? "de" : "en")}
              className="rounded-full border border-cyan-300/30 px-3 py-1 text-cyan-200 hover:bg-cyan-300/10"
            >
              {lang === "en" ? "DE" : "EN"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-slate-950 to-blue-700/20" />
          <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 px-4 py-2 text-sm text-cyan-200">{text.heroBadge}</p>
              <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">{text.heroTitle}</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{text.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-2xl bg-cyan-400 px-6 text-slate-950 hover:bg-cyan-300">
                  <a href="#projects" className="flex items-center gap-2">{text.viewProjects} <ExternalLink size={16} /></a>
                </Button>
                <Button variant="outline" className="rounded-2xl border-white/20 bg-white/5 px-6 text-white hover:bg-white/10">
                  <a href="#contact" className="flex items-center gap-2">{text.contact} <Mail size={16} /></a>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <ProfileCard text={text} />
            </motion.div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-slate-900/60 px-6 py-16">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{text.aboutLabel}</p>
              <h2 className="mt-3 text-3xl font-bold">{text.aboutTitle}</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">{text.aboutText}</p>
          </div>
        </section>

        <section id="competencies" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{text.competenciesLabel}</p>
            <h2 className="mt-3 text-4xl font-bold">{text.competenciesTitle}</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {competencies.map(({ icon: Icon, title, items }) => (
                <Card key={title} className="rounded-3xl border-white/10 bg-white/[0.06]">
                  <CardContent className="p-6">
                    <Icon className="mb-5 text-cyan-300" size={28} />
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {items.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-900/50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{text.projectsLabel}</p>
            <h2 className="mt-3 text-4xl font-bold">{text.projectsTitle}</h2>
            <div className="my-8 flex flex-wrap gap-2">
              <span className="mr-2 inline-flex items-center gap-2 text-sm text-slate-400"><Filter size={16} /> {text.filter}</span>
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-4 py-2 text-sm transition ${active === filter ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-slate-300 hover:bg-white/15"}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {filtered.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <Card className="h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06] shadow-xl">
                    <div className={`h-44 bg-gradient-to-br ${project.accent} p-6`}>
                      <div className="flex h-full items-end justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.25em] text-white/60">{project.category}</p>
                          <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                        </div>
                        <Building2 className="text-white/50" size={36} />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-cyan-200">{project.type}</p>
                      <p className="mt-3 leading-7 text-slate-300">{project.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tools.map((tool) => <span key={tool} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">{tool}</span>)}
                      </div>
                      <VisualCards cards={project.visualCards} />
                      {project.videos && <VideoPlaceholders videos={project.videos} text={text} />}
                      <ul className="mt-6 space-y-2 text-sm text-slate-300">
                        {project.highlights.map((highlight) => <li key={highlight}>• {highlight}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{text.experienceLabel}</p>
            <h2 className="mt-3 text-4xl font-bold">{text.experienceTitle}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                ["Rolling Bricks LTD", "Project Manager / Construction Coordination", "Coordinated resources, quality control, site workflows, documentation and project delivery across residential housing developments."],
                ["Project Coalesce", "Residential development", "Managed construction progress from carcass stage to handover, including coordination, QA/QC and delivery tracking."],
                ["Project Zentroa", "Residential & housing development", "Supported scheduling, contractor coordination, payment authorization, quality assurance and progress tracking across project phases."],
              ].map(([title, subtitle, body]) => (
                <Card key={title} className="rounded-3xl border-white/10 bg-white/[0.06]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="mt-2 text-slate-400">{subtitle}</p>
                    <p className="mt-4 text-slate-300">{body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/60 px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{text.softwareLabel}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              {softwareTools.map((tool) => <span key={tool} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{tool}</span>)}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{text.contactLabel}</p>
              <h2 className="mt-3 text-4xl font-bold">{text.contactTitle}</h2>
              <p className="mt-4 max-w-xl text-slate-300">{text.contactText}</p>
            </div>
            <Card className="rounded-3xl border-white/10 bg-white/[0.06]">
              <CardContent className="space-y-4 p-6 text-slate-300">
                <p className="flex items-center gap-3"><MapPin size={18} className="text-cyan-300" /> Weimar, Germany</p>
                <p className="flex items-center gap-3"><Phone size={18} className="text-cyan-300" /> +49 1520 7505199</p>
                <p className="flex items-center gap-3"><Mail size={18} className="text-cyan-300" /> obinna.rosato.ndupuechi@uni-weimar.de</p>
                <p className="flex items-center gap-3"><LinkedInMark /> linkedin.com/in/obinna-ndupuechi-b454b519a</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

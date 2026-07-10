import React from "react";
import Nav from "../components/Nav.jsx";

// EDIT ME: adjust wording, dates, or add/remove entries as needed.
const SECTIONS = [
  {
    label: "research",
    entries: [
      {
        role: "humanitech - medication adherence team member",
        org: "vertically integrated program, georgia institute of technology",
        dates: "spring 2026",
        description:
          "conducted a literature review on language barriers and medication adherence, collaborated with a research team to design and survey-test improved prescription label prototypes against current standards, and presented findings and design recommendations to program faculty and peers.",
      },
      {
        role: "student researcher",
        org: "global problem-solving institute, pioneer academics",
        dates: "summer 2024",
        description:
          "collaborated with a research team to author a report examining the use of ai in wrongful conviction analysis and its relationship to recidivism rates.",
      },
      {
        role: "student researcher",
        org: "pioneer research institute, pioneer academics",
        dates: "summer 2023",
        description:
          "under mentorship of babson college faculty, authored a research paper on the effectiveness of positive emotional appeals in charity run advertising, designing a survey-based experiment (qualtrics, prolific, n = 80) and applying independent t-tests and thematic analysis to evaluate results.",
      },
    ],
  },
  {
    label: "leadership",
    entries: [
      {
        role: "vp internal, gt international ambassadors",
        org: "georgia institute of technology",
        dates: "present",
        description:
          "serve on the executive board, overseeing member recruitment and planning internal community initiatives for the upcoming semester.",
      },
      {
        role: "class president",
        org: "york house school",
        dates: "jun 2024 — jun 2025",
        description:
          "hosted weekly school-wide assemblies, liaised with administration, and managed graduation events on behalf of the student body.",
      },
      {
        role: "chapter head, integirls",
        org: "vancouver, canada",
        dates: "aug 2023 — jun 2025",
        description:
          "initiated virtual math competitions for 100+ girls worldwide and produced a weekly \"femmes in stem\" podcast to help bridge the gender gap in stem.",
      },
      {
        role: "concertmaster, vanstrings chamber music",
        org: "vancouver, canada",
        dates: "2018 — present",
        description:
          "lead performances by providing musical direction, fostering collaboration, and contributing to the ensemble's overall success.",
      },
      {
        role: "team leader, joy of arts",
        org: "vancouver, canada",
        dates: "2022 — 2024",
        description:
          "facilitated volunteer coordination and event organization at venvi crofton manor in kerrisdale by maintaining effective communication with staff.",
      },
      {
        role: "student & social media ambassador",
        org: "york house school",
        dates: "2021 — 2025",
        description:
          "ensured a positive experience for all by offering warm welcomes to guests, conducting campus tours, and contributing to various events; created engaging videos and content for the school's social media accounts.",
      },
    ],
  },
  {
    label: "work",
    entries: [
      {
        role: "barista and server",
        org: "john 3:16 malaysian delights",
        dates: "aug 2024 — aug 2025",
        description:
          "prepared drinks and desserts, packaged take-out orders, and served customers in a fast-paced restaurant environment; strengthened skills in time management, multitasking, and quick problem-solving.",
      },
      {
        role: "english, math, violin & piano tutor",
        org: "self-employed, vancouver, canada",
        dates: "2018 — 2025",
        description:
          "taught students of varying ages, building lesson plans tailored to each student's pace across four subjects.",
      },
      {
        role: "program assistant",
        org: "connaught skating club",
        dates: "2018 — 2023",
        description:
          "taught and supported children learning to skate through leading fun games, sharing skills and tips, and organizing exercises and circuits.",
      },
    ],
  },
  {
    label: "projects",
    entries: [
      {
        role: "snappy - ai video clip assistant",
        org: "swift, swiftui, ffmpeg, deepgram api, claude api, cloudflare workers",
        dates: "june 2026",
        description:
          "built a native macos app that transcribes, tags, and enables chat-based search across video clips. engineered a processing pipeline combining ffmpeg, deepgram transcription, and the claude api with a caching layer, deployed behind a cloudflare worker as a secure api proxy.",
      },
      {
        role: "medicine reminder robot",
        org: "3d printing, hackathon",
        dates: "september 2024",
        description:
          "collaborated in a 36-hour hackathon to build a 3d-printed robot with an automated water dispenser, voice reminders, and a companion app for medication tracking; led the project presentation to judges.",
      },
    ],
  },
];

function Entry({ entry }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_140px] gap-2 md:gap-6 py-5 border-t border-[#dedcd4]">
      <div>
        <h3 className="text-sm font-semibold lowercase text-[#1a1a1a]">
          {entry.role}
        </h3>
        <p className="text-xs text-[#8a8983] lowercase mb-2">{entry.org}</p>
        <p className="text-sm text-[#3a3a37] leading-relaxed lowercase">
          {entry.description}
        </p>
      </div>
      {entry.dates && (
        <span className="text-xs text-[#E1417A] font-mono lowercase md:text-right shrink-0">
          {entry.dates}
        </span>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#F2F1ED]">
      <Nav />
      <section className="px-6 md:px-10 py-12 md:py-16 max-w-4xl mx-auto">
        <h1 className="text-lg font-semibold lowercase mb-10 text-[#1a1a1a]">experience</h1>

        {SECTIONS.map((section) => (
          <div key={section.label} className="mb-12">
            <h2 className="text-xs uppercase tracking-widest text-[#8a8983] mb-1">
              {section.label}
            </h2>
            {section.entries.map((entry, idx) => (
              <Entry key={idx} entry={entry} />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
}

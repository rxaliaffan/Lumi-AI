# Lumi AI Pharmacist — Production MVP Blueprint

## Mission

Build and deploy a fully functional **Lumi AI Digital Pharmacist** web app on **Vercel** using **Next.js + Tailwind + Supabase + Gemini API + Tesseract OCR**, matching the provided UI mockup as closely as possible.

---

# Core Deployment Stack

## Frontend

* Next.js (App Router)
* Tailwind CSS
* Framer Motion
* Lucide Icons

## Backend / Database

* Supabase PostgreSQL
* Supabase Auth
* Supabase Storage

## AI Layer

* Gemini Free API
* Custom medication parser
* Rule-based drug safety engine
* OpenFDA + Pakistan formulary datasets

## OCR

* Tesseract.js

## Deployment

* GitHub
* Vercel

---

# Folder Structure

```txt
lumi-ai-pharmacist/
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.local
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── globals.css
│   └── api/
│       ├── analyze/route.js
│       └── chat/route.js
├── components/
│   ├── Sidebar.js
│   ├── Header.js
│   ├── ScanCard.js
│   ├── RiskScore.js
│   ├── MedicinesTable.js
│   ├── ChatAssistant.js
│   ├── SchedulePanel.js
│   ├── AdherenceCard.js
│   ├── PharmacyPanel.js
│   └── ActionButtons.js
├── lib/
│   ├── supabase.js
│   ├── ocr.js
│   ├── parser.js
│   ├── ai.js
│   ├── riskEngine.js
│   ├── drugDatabase.js
│   └── utils.js
├── public/
│   ├── logo.png
│   ├── bot.png
│   └── icons/
└── styles/
    └── globals.css
```

---

# Exact MVP Features

## 1. Dashboard UI

### Must Match Mockup:

* Sidebar navigation
* Greeting header
* Prescription scanner card
* Camera/upload/voice buttons
* Risk score donut
* AI summary
* Medicines table
* Adherence tracker
* Nearby pharmacies
* Action buttons

---

## 2. Prescription Upload Flow

### Workflow:

1. Upload image
2. OCR extraction
3. Parse medicines
4. Structure medication list
5. Run safety engine
6. Generate score
7. Save to Supabase

---

## 3. Safety Engine

### Checks:

* Drug interactions
* Duplicate therapies
* Dose warnings
* High-risk medications
* Elderly caution
* Pregnancy flags (future-ready)

### Output:

* Risk score /10
* Warnings
* Recommendations

---

## 4. AI Assistant

### User can ask:

* What is this medicine for?
* Side effects?
* Can I take these together?
* Urdu/local language support (future expanded)

---

## 5. Database Tables

### users

* id
* name
* email

### prescriptions

* id
* user_id
* image_url
* extracted_text
* risk_score
* created_at

### medicines

* id
* prescription_id
* name
* dosage
* purpose
* schedule
* safety

---

# Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
GEMINI_API_KEY=
```

---

# Build Roadmap (Tonight)

## Phase 1 — UI Clone

* Build exact dashboard layout
* Match spacing/colors/cards
* Responsive desktop-first

## Phase 2 — Functional Upload

* Tesseract integration
* Parser logic
* Medicine extraction

## Phase 3 — AI Layer

* Gemini integration
* Drug explanations
* Safety summaries

## Phase 4 — Database

* Supabase schema
* Save prescriptions
* User history

## Phase 5 — Deployment

* Push to GitHub
* Deploy via Vercel
* Environment config

---

# Immediate Priorities

## First Files to Build:

* package.json
* tailwind.config.js
* app/layout.js
* app/page.js
* Sidebar.js
* Header.js
* ScanCard.js
* RiskScore.js
* MedicinesTable.js

---

# Strategic Notes

## Free + Safe

* Vercel handles hosting
* Supabase handles DB securely
* Gemini handles AI cheaply/free
* OpenFDA improves safety

## Competitive Edge

### Your USP:

**Prescription Risk Score + AI Medication Safety**
This is stronger than generic health apps.

---

# Future LumiX SaaS Expansion

* Doctor dashboards
* Pharmacy integrations
* Hospital systems
* Clinical decision support
* API monetization

---

# Critical Rule

Healthcare accuracy matters.

### Always prioritize:

* Verified medication databases
* Rule-based safeguards
* Reduced hallucination
* Clear patient explanations

---

# Next Execution Step — GitHub Online Build (No Coding Experience Required)

## PHASE 1 — Prepare GitHub Repository Online

### Step 1:

Open your repository:
**[https://github.com/rxaliaffan/Lumi-AI](https://github.com/rxaliaffan/Lumi-AI)**

### Step 2:

In GitHub:

* Press **. (dot key)** on keyboard

### This opens:

**github.dev online VS Code editor**

---

## PHASE 2 — Create Core Project Files

Inside github.dev:

### Create these root files:

```txt
package.json
next.config.js
tailwind.config.js
postcss.config.js
.env.local
```

### Create folders:

```txt
app/
components/
lib/
public/
styles/
```

---

## PHASE 3 — Initialize Next.js Structure Manually

Since this is browser-only:

### In package.json paste:

```json
{
  "name": "lumi-ai-pharmacist",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest",
    "tailwindcss": "latest",
    "autoprefixer": "latest",
    "postcss": "latest",
    "lucide-react": "latest",
    "framer-motion": "latest",
    "tesseract.js": "latest",
    "@supabase/supabase-js": "latest"
  }
}
```

---

## PHASE 4 — First UI Build Priority

### Build these files first:

```txt
app/layout.js
app/page.js
app/globals.css
components/Sidebar.js
components/Header.js
components/ScanCard.js
components/RiskScore.js
components/MedicinesTable.js
```

---

## PHASE 5 — Commit Changes

In GitHub source control panel:

* Stage all files
* Commit message:

```txt
Initial Lumi MVP dashboard structure
```

* Push to main

---

## PHASE 6 — Deploy to Vercel

### Steps:

1. Go to Vercel
2. Import GitHub repository
3. Select Lumi-AI
4. Deploy

---

# BUILD ORDER (STRICT)

## RIGHT NOW:

### Only focus on:

### Pixel-perfect dashboard clone

### Do NOT build yet:

* OCR
* Gemini
* Supabase logic
* Advanced AI

---

# AFTER UI:

## Add:

### OCR:

```txt
lib/ocr.js
```

### Parser:

```txt
lib/parser.js
```

### AI:

```txt
lib/ai.js
```

### Risk Engine:

```txt
lib/riskEngine.js
```

---

# YOUR ACTION NOW

## Immediate:

### Open GitHub repo → Press . → Start file creation

---

# WHEN READY:

Request from me:

## “Generate package.json + layout.js + page.js”

Then continue:

## “Generate Sidebar.js”

## “Generate Header.js”

## etc.

---

# IMPORTANT EXECUTION RULE

To avoid overwhelm:

## We build component-by-component.

This is fastest, safest, and easiest for a non-coder.

---

# PRIMARY GOAL BY MORNING

## Live deployed Lumi MVP with:

* Exact UI
* Upload functionality
* Basic prescription analysis
* AI assistant
* Database-ready backend

---

# Strategic Reminder

Your strongest competitive edge:

## Prescription Risk Score + AI Pharmacist + Local Accessibility

This is what should remain central throughout build.

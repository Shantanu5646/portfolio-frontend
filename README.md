# Shantanu Deshmukh – Portfolio Website

Live: **https://www.shantanu5646.me**

This is my personal portfolio website built with **Next.js**.  
It showcases my projects, experience, certifications, and provides a direct way to contact me.

---

## 🚀 Features

- **Responsive one-page layout**
  - Hero section with intro, avatar and call-to-action
  - About section with summary, skills, education, and current work
  - Projects grid with tech stack tags and GitHub links
  - Work section highlighting real-world experience
  - Certificates & documents section with clickable cards
  - Contact form with email notifications

- **Dark / Light mode**
  - Global theme toggle in the navbar
  - Custom background video in dark mode and light mode for the hero section
  - Sections automatically adapt styles based on the current theme

- **Projects section**
  - Cards for:
    - Sentiment Aware Customer Support Chatbot (AWS)
    - Stock Prediction web app (LSTM)
    - Invoice Processing System (React + Spring Boot)
    - San Juan Sailboat Charters case project (Access vs Excel)
    - Document Scanner (OpenCV + Tesseract)
    - This Portfolio Website itself

- **Certificates & Documents**
  - Cards for major certificates and documents (PCAP, Java FSD, GRE, TOEFL, WES, Resume, etc.)
  - Mix of:
    - Static PDFs served from `/public/docs`
    - External credentials (e.g., Credly badge for “GenAI in Action”)

- **Contact form with email sending**
  - Form submits to a Next.js API route
  - Uses **Nodemailer** with **Brevo (Sendinblue) SMTP**
  - Sends the message to my inbox when someone fills in the form

---

## 🧰 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript / TSX
- **Styling:** Tailwind CSS
- **UI / UX:**
  - Custom responsive layout
  - Glassmorphism-style cards
  - Gradient text and hover effects
- **Email:** Nodemailer + Brevo SMTP (via API route)
- **Hosting:** Vercel
- **Domain:** `shantanu5646.me` (Namecheap + Vercel DNS)

---

## 📁 Project Structure (simplified)

```bash
frontend/
├─ app/
│  ├─ layout.tsx          # Root layout, wraps app with ThemeProvider and Nav/Footer
│  ├─ page.tsx            # Main page with all sections
│  └─ api/
│     └─ contact/
│        └─ route.ts      # Contact form API (Nodemailer + Brevo)
├─ public/
│  ├─ hero-bg.mp4         # Dark mode hero background video
│  ├─ hero-light.mp4      # Light mode hero background video
│  ├─ projects-bg.mp4     # Projects section background video
│  ├─ work-bg.jpg         # Work section background
│  ├─ documents-bg.jpg    # Certificates section background
│  └─ docs/               # PDF files (certificates, resume, etc.)
├─ src/
│  └─ components/
│     ├─ Nav.tsx
│     ├─ Hero.tsx
│     ├─ Footer.tsx
│     ├─ ThemeProvider.tsx
│     ├─ ProjectCard.tsx
│     ├─ DocumentCard.tsx
│     ├─ AboutSummaryCard.tsx
│     ├─ TechStackCard.tsx
│     ├─ FlexibleTimezoneCard.tsx
│     ├─ EducationCard.tsx
│     ├─ CurrentProjectCard.tsx
│     └─ LetsWorkTogetherCard.tsx
└─ ...

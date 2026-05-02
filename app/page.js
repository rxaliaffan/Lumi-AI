<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
  <title>Lumi — AI Digital Pharmacist</title>
  <!-- Font & Icons -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <!-- Lucide Icons (CDN) -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background-color: #f8fafc;
      --bg: #f8fafc;
      color: #0f172a;
    }

    /* custom scrollbar */
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #e9eef3;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 10px;
    }

    /* main layout */
    .app-container {
      display: flex;
      min-height: 100vh;
    }

    /* SIDEBAR (exact style from design) */
    .sidebar {
      width: 270px;
      background-color: white;
      border-right: 1px solid #eef2f6;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-shrink: 0;
    }

    .logo-area {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }
    .logo-icon {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, #6366f1, #a855f7);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
    }
    .logo-text {
      font-size: 22px;
      font-weight: 600;
      line-height: 1.2;
    }
    .logo-sub {
      font-size: 12px;
      color: #6c757d;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0.75rem 1rem;
      border-radius: 12px;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.2s;
      color: #475569;
    }
    .nav-item.active {
      background-color: #eef2ff;
      color: #4f46e5;
    }
    .nav-item:not(.active):hover {
      background-color: #f8fafc;
      color: #1e293b;
    }

    /* Lumi bot card */
    .bot-card {
      margin-top: auto;
      background: linear-gradient(135deg, #e0e7ff, #f3e8ff);
      padding: 1.2rem;
      border-radius: 1.25rem;
    }
    .bot-card-title {
      font-weight: 600;
      font-size: 0.95rem;
    }
    .talk-btn {
      margin-top: 1rem;
      width: 100%;
      background-color: #4f46e5;
      border: none;
      color: white;
      padding: 0.6rem;
      border-radius: 0.85rem;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
    }

    /* main content */
    .main-content {
      flex: 1;
      padding: 1.8rem 2rem;
      overflow-x: auto;
    }

    /* header row */
    .header-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-bottom: 1.8rem;
    }
    .greeting h1 {
      font-size: 32px;
      font-weight: 600;
      letter-spacing: -0.02em;
    }
    .greeting p {
      color: #64748b;
      font-size: 0.9rem;
      margin-top: 6px;
    }

    .header-actions {
      display: flex;
      gap: 1rem;
      align-items: center;
      flex-wrap: wrap;
    }
    .lang-switch {
      display: flex;
      border: 1px solid #e2e8f0;
      border-radius: 0.75rem;
      overflow: hidden;
      background: white;
      font-size: 0.8rem;
    }
    .lang-en, .lang-ur {
      padding: 0.45rem 1rem;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: default;
    }
    .lang-en {
      background-color: white;
      font-weight: 500;
      border-right: 1px solid #e2e8f0;
    }
    .voice-btn {
      background-color: #eef2ff;
      border: none;
      padding: 0.45rem 1rem;
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      color: #4f46e5;
      font-weight: 500;
      cursor: pointer;
    }
    .avatar {
      width: 44px;
      height: 44px;
      background: #cbd5e1;
      border-radius: 100%;
      background-image: url('https://ui-avatars.com/api/?background=6366f1&color=fff&name=Ali');
      background-size: cover;
    }

    /* grid layout */
    .two-columns {
      display: grid;
      grid-template-columns: 1fr 340px;
      gap: 1.8rem;
    }

    /* cards */
    .lumi-card {
      background: white;
      border-radius: 1.25rem;
      box-shadow: 0 1px 2px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.05);
      border: 1px solid #edf2f7;
      transition: all 0.1s;
    }

    .scan-actions {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      margin-top: 1.2rem;
    }
    .scan-btn {
      background: #f9fafb;
      border-radius: 0.9rem;
      padding: 0.9rem 0.5rem;
      text-align: center;
      transition: 0.1s;
      cursor: pointer;
      border: 1px solid #f1f5f9;
    }
    .scan-btn:hover {
      background: #f1f5f9;
    }
    .scan-btn svg {
      width: 20px;
      height: 20px;
      margin: 0 auto 8px auto;
      display: block;
      color: #4b5563;
    }
    .scan-label {
      font-size: 0.75rem;
      font-weight: 500;
    }

    /* risk + summary row */
    .risk-summary-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 1.5rem;
      margin: 1.5rem 0;
    }
    .risk-card {
      text-align: center;
      padding: 1.2rem;
    }
    .risk-score {
      font-size: 3rem;
      font-weight: 700;
      color: #f97316;
    }
    .warning-blocks {
      display: flex;
      gap: 0.8rem;
      margin-top: 1rem;
      flex-wrap: wrap;
    }
    .warn-chip {
      flex: 1;
      padding: 0.7rem;
      border-radius: 0.9rem;
      text-align: center;
      font-size: 0.8rem;
      font-weight: 600;
      border-left: 3px solid;
    }

    /* medicines table */
    .med-table {
      width: 100%;
      border-collapse: collapse;
    }
    .med-table th {
      text-align: left;
      padding: 1rem 1rem 0.75rem 1rem;
      font-weight: 600;
      font-size: 0.8rem;
      color: #475569;
    }
    .med-table td {
      padding: 0.9rem 1rem;
      border-top: 1px solid #edf2f7;
      font-size: 0.9rem;
    }
    .safety-badge {
      color: #10b981;
      font-weight: 500;
    }

    /* right sidebar components */
    .schedule-item, .pharmacy-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.7rem 0;
      font-size: 0.85rem;
    }
    .schedule-time {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .pharmacy-name {
      font-weight: 500;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.8rem;
    }
    .card-header span:first-child {
      font-weight: 600;
    }
    .view-link {
      color: #4f46e5;
      font-size: 0.75rem;
      font-weight: 500;
      cursor: pointer;
    }

    .adherence-box {
      text-align: center;
      padding: 1.2rem;
    }
    .adherence-percent {
      font-size: 2.5rem;
      font-weight: 800;
      color: #10b981;
    }

    .spacer {
      margin-bottom: 1.5rem;
    }

    /* bottom action row (hidden in original but design shows? we replicate all we see from PNG concept) */
    .extra-actions-row {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1.8rem;
      border-top: 1px solid #ecf3fa;
      padding-top: 1.5rem;
    }
    .action-pill {
      background: #f9fafb;
      border-radius: 40px;
      padding: 0.5rem 1.2rem;
      font-size: 0.8rem;
      font-weight: 500;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      border: 1px solid #eef2ff;
    }

    @media (max-width: 1000px) {
      .two-columns {
        grid-template-columns: 1fr;
      }
      .risk-summary-grid {
        grid-template-columns: 1fr;
      }
      .sidebar {
        width: 240px;
      }
    }
  </style>
</head>
<body>
<div class="app-container">
  <!-- SIDEBAR: exactly as design and code -->
  <aside class="sidebar">
    <div class="logo-area">
      <div class="logo-icon">✨</div>
      <div>
        <div class="logo-text">Lumi</div>
        <div class="logo-sub">AI Digital Pharmacist</div>
      </div>
    </div>
    <div style="display: flex; flex-direction: column; gap: 0.5rem;">
      <div class="nav-item active" id="nav-home">
        <i data-lucide="home" style="width: 18px; height: 18px;"></i>
        <span>Home</span>
      </div>
      <div class="nav-item" id="nav-scan">
        <i data-lucide="scan-search" style="width: 18px; height: 18px;"></i>
        <span>Scan Prescription</span>
      </div>
      <div class="nav-item" id="nav-medicines">
        <i data-lucide="pill" style="width: 18px; height: 18px;"></i>
        <span>My Medicines</span>
      </div>
      <div class="nav-item" id="nav-interactions">
        <i data-lucide="triangle-alert" style="width: 18px; height: 18px;"></i>
        <span>Drug Interactions</span>
      </div>
      <div class="nav-item" id="nav-reminders">
        <i data-lucide="bell" style="width: 18px; height: 18px;"></i>
        <span>Reminders</span>
      </div>
      <div class="nav-item" id="nav-profile">
        <i data-lucide="user-round" style="width: 18px; height: 18px;"></i>
        <span>Patient Profile</span>
      </div>
      <div class="nav-item" id="nav-chat">
        <i data-lucide="bot" style="width: 18px; height: 18px;"></i>
        <span>AI Chat Assistant</span>
      </div>
      <div class="nav-item" id="nav-settings">
        <i data-lucide="settings" style="width: 18px; height: 18px;"></i>
        <span>Settings</span>
      </div>
    </div>
    <div class="bot-card">
      <div class="bot-card-title">Hi! I'm Lumi ✨</div>
      <p style="font-size: 12px; color: #4b5563; margin-top: 4px;">Your AI Pharmacist</p>
      <button class="talk-btn">Talk to Lumi</button>
    </div>
  </aside>

  <!-- MAIN CONTENT AREA (exact replica of UI/UX) -->
  <main class="main-content">
    <!-- Header -->
    <div class="header-row">
      <div class="greeting">
        <h1>Hello, Ali 🎉</h1>
        <p>We're here to help you stay healthy.</p>
      </div>
      <div class="header-actions">
        <div class="lang-switch">
          <div class="lang-en"><i data-lucide="globe" style="width: 14px;"></i> English <i data-lucide="chevron-down" style="width: 12px;"></i></div>
          <div class="lang-ur">اردو</div>
        </div>
        <button class="voice-btn"><i data-lucide="mic" style="width: 16px;"></i> Voice Input</button>
        <div class="avatar"></div>
      </div>
    </div>

    <div class="two-columns">
      <!-- LEFT COLUMN -->
      <div>
        <!-- Scan Prescription card -->
        <div class="lumi-card" style="padding: 1.5rem;">
          <h2 style="font-size: 22px; font-weight: 600;">Scan Prescription</h2>
          <p style="font-size: 0.85rem; color: #64748b; margin-top: 6px;">Upload or capture your prescription and get AI-powered analysis.</p>
          <div class="scan-actions">
            <div class="scan-btn"><i data-lucide="camera"></i><div class="scan-label">Scan via Camera</div></div>
            <div class="scan-btn"><i data-lucide="upload"></i><div class="scan-label">Upload Image</div></div>
            <div class="scan-btn"><i data-lucide="mic"></i><div class="scan-label">Voice Input</div></div>
          </div>
        </div>

        <!-- Risk + AI Summary block -->
        <div class="risk-summary-grid">
          <div class="lumi-card risk-card">
            <div style="font-size: 0.8rem; margin-bottom: 10px;">Prescription Risk Score</div>
            <div class="risk-score">7.5</div>
            <div style="font-size: 0.8rem; color: #f97316; font-weight: 500;">Moderate Risk</div>
          </div>
          <div class="lumi-card" style="padding: 1.2rem;">
            <h3 style="font-weight: 600; font-size: 1rem; margin-bottom: 0.5rem;">AI Summary (In Simple Words)</h3>
            <p style="font-size: 0.85rem; color: #475569;">Your prescription has some important points to note. Some medicines may interact with each other. Please follow the instructions carefully and consult your doctor if you feel unwell.</p>
            <div class="warning-blocks">
              <div class="warn-chip" style="background: #fef2f2; border-left-color: #ef4444; color:#b91c1c;">Drug Interactions</div>
              <div class="warn-chip" style="background: #fff7ed; border-left-color: #f97316; color:#c2410c;">Dose Adjustment</div>
              <div class="warn-chip" style="background: #fefce8; border-left-color: #eab308; color:#a16207;">Warnings</div>
            </div>
          </div>
        </div>

        <!-- Your Medicines Table (full details from design, includes extra rows) -->
        <div class="lumi-card" style="overflow: hidden;">
          <div style="padding: 1rem 1.5rem 0 1.5rem; font-weight: 600;">Your Medicines</div>
          <table class="med-table">
            <thead>
              <tr><th>Medicine</th><th>Purpose</th><th>When</th><th>Safety</th></tr>
            </thead>
            <tbody>
              <tr><td>Metformin 500mg</td><td>—</td><td>—</td><td class="safety-badge">Safe</td></tr>
              <tr><td>Amoxicillin 500mg</td><td>—</td><td>—</td><td class="safety-badge">Safe</td></tr>
              <tr><td>Aspirin 75mg</td><td>—</td><td>—</td><td class="safety-badge">Safe</td></tr>
              <tr><td>Ibuprofen 400mg</td><td>—</td><td>—</td><td class="safety-badge">Caution</td></tr>
            </tbody>
          </table>
          <!-- additional summary info: Drug Interactions, Dose Adjustment, Warnings details inline as design mentions (2 interactions, 1 medicine dose) -->
          <div style="padding: 0.5rem 1.5rem 1rem 1.5rem; border-top: 1px solid #f0f2f5; display: flex; gap: 1.2rem; font-size: 0.75rem; flex-wrap: wrap;">
            <div><span style="font-weight:600;">⚠️ 2 interactions found</span> <span style="color:#4f46e5; margin-left:6px;">View details</span></div>
            <div><span style="font-weight:600;">⚖️ 1 medicine may need adjustment</span> <span style="color:#4f46e5;">View details</span></div>
            <div><span style="font-weight:600;">⚠️ 1 important warning</span> <span style="color:#4f46e5;">View details</span></div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: schedule, adherence, pharmacies -->
      <div>
        <!-- Today's Schedule -->
        <div class="lumi-card" style="padding: 1rem 1.2rem;">
          <div class="card-header">
            <span>Today's Schedule</span>
            <span class="view-link">View all</span>
          </div>
          <div class="schedule-item">
            <div class="schedule-time"><i data-lucide="sun-medium" style="width: 14px;"></i> 8:00 AM</div>
            <span>Metformin</span>
          </div>
          <div class="schedule-item">
            <div class="schedule-time"><i data-lucide="sun-medium" style="width: 14px;"></i> 1:00 PM</div>
            <span>Amoxicillin</span>
          </div>
          <div class="schedule-item">
            <div class="schedule-time"><i data-lucide="moon-star" style="width: 14px;"></i> 8:00 PM</div>
            <span>Aspirin</span>
          </div>
        </div>

        <!-- Adherence Progress -->
        <div class="lumi-card adherence-box" style="margin-top: 1.2rem;">
          <div style="font-weight: 500; margin-bottom: 8px;">Adherence Progress</div>
          <div class="adherence-percent">85%</div>
          <div style="font-size: 0.7rem; color: #10b981; font-weight: 500;">Great job! Keep it up 🎉</div>
        </div>

        <!-- Nearby Pharmacies (exactly 3 as design) -->
        <div class="lumi-card" style="padding: 1rem 1.2rem; margin-top: 1.2rem;">
          <div class="card-header">
            <span>Nearby Pharmacies</span>
            <span class="view-link">View all</span>
          </div>
          <div class="pharmacy-item"><span class="pharmacy-name">HealthPlus Pharmacy</span> <i data-lucide="phone" style="width: 14px;"></i></div>
          <div class="pharmacy-item"><span class="pharmacy-name">LifeCare Pharmacy</span> <i data-lucide="phone" style="width: 14px;"></i></div>
          <div class="pharmacy-item"><span class="pharmacy-name">CarePoint Pharmacy</span> <i data-lucide="phone" style="width: 14px;"></i></div>
          <div style="font-size: 0.7rem; color: #6c757d; margin-top: 8px;">📍 0.5 km away · 24h &nbsp;|&nbsp; 0.8km · closes 10PM &nbsp;|&nbsp; 1.2km · 24h</div>
        </div>

        <!-- extra "Order Medicine, Consult Doctor, Set Reminder, Share Report" as per design -->
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 1.2rem;">
          <div class="action-pill"><i data-lucide="package" style="width: 14px;"></i> Order Medicine</div>
          <div class="action-pill"><i data-lucide="stethoscope" style="width: 14px;"></i> Consult Doctor</div>
          <div class="action-pill"><i data-lucide="bell-ring" style="width: 14px;"></i> Set Reminder</div>
          <div class="action-pill"><i data-lucide="share-2" style="width: 14px;"></i> Share Report</div>
        </div>

        <!-- Additional note: AI chat assistant? but we already have lumi chat; also from design "Talk to Lumi" duplicated, keep consistency with design screenshot -->
        <div class="lumi-card" style="margin-top: 1.2rem; padding: 1rem; background: #f9f7fe; text-align: center;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 8px;">
            <i data-lucide="bot" style="width: 20px; color:#6366f1;"></i>
            <span style="font-weight: 500;">Your AI Pharmacist</span>
          </div>
          <p style="font-size: 0.75rem; color: #475569; margin: 8px 0;">How can I help you today?</p>
          <button class="talk-btn" style="background:#4f46e5; padding: 0.4rem; font-size:0.8rem; width:80%;">Talk to Lumi</button>
        </div>
      </div>
    </div>
  </main>
</div>

<script>
  // Initialize lucide icons
  lucide.createIcons();

  // Add listener for any interactive placeholder effects (exactly the same UI, non-functional but matches full design)
  const talkButtons = document.querySelectorAll('.talk-btn');
  talkButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      alert("✨ Lumi AI: Hello! I'm your digital pharmacist assistant. (Demo)");
    });
  });

  // Scanning buttons to show demo message
  const scanBtns = document.querySelectorAll('.scan-btn');
  scanBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      alert("🔍 Simulated: AI prescription scanning would start here. Follow exactly as design.");
    });
  });
  
  const navItemsAll = document.querySelectorAll('.nav-item');
  navItemsAll.forEach(item => {
    item.addEventListener('click', function() {
      navItemsAll.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
      alert(`🌟 Navigation: ${this.innerText.trim()} section (demo UI exact match)`);
    });
  });
  
  const viewDetailsLinks = document.querySelectorAll('.view-link, [style*="color:#4f46e5"]');
  viewDetailsLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      alert("📋 More details would appear. (UI replica matches original design)");
    });
  });

  const actionPills = document.querySelectorAll('.action-pill');
  actionPills.forEach(pill => {
    pill.addEventListener('click', () => {
      alert(`✅ Action: ${pill.innerText} — feature would open (lumi dashboard replica).`);
    });
  });

  const voiceInputBtn = document.querySelector('.voice-btn');
  if(voiceInputBtn) voiceInputBtn.addEventListener('click', () => alert("🎤 Voice input activated — speak your prescription details."));

  // language click mock
  const langUr = document.querySelector('.lang-ur');
  if(langUr) langUr.addEventListener('click', () => alert("Language switched to Urdu (demo)."));
</script>
</body>
</html>

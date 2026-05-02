"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [activeNav, setActiveNav] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", icon: "🏠" },
    { name: "Scan Prescription", icon: "📷" },
    { name: "My Medicines", icon: "💊" },
    { name: "Drug Interactions", icon: "⚠️" },
    { name: "Reminders", icon: "🔔" },
    { name: "Patient Profile", icon: "👤" },
    { name: "AI Chat Assistant", icon: "🤖" },
    { name: "Settings", icon: "⚙️" },
  ];

  const medicines = [
    { name: "Metformin 500mg", purpose: "Diabetes", when: "Morning", safety: "Safe", safetyColor: "green" },
    { name: "Amoxicillin 500mg", purpose: "Infection", when: "Afternoon", safety: "Safe", safetyColor: "green" },
    { name: "Aspirin 75mg", purpose: "Blood thinner", when: "Evening", safety: "Safe", safetyColor: "green" },
    { name: "Ibuprofen 400mg", purpose: "Pain relief", when: "As needed", safety: "Caution", safetyColor: "yellow" },
  ];

  const pharmacies = [
    { name: "HealthPlus Pharmacy", distance: "0.5 km", hours: "Open 24 hours" },
    { name: "LifeCare Pharmacy", distance: "0.8 km", hours: "Closes at 10 PM" },
    { name: "CarePoint Pharmacy", distance: "1.2 km", hours: "Open 24 hours" },
  ];

  const schedule = [
    { time: "8:00 AM", medicine: "Metformin", icon: "☀️" },
    { time: "1:00 PM", medicine: "Amoxicillin", icon: "☀️" },
    { time: "8:00 PM", medicine: "Aspirin", icon: "🌙" },
  ];

  return (
    <div className="app-wrapper">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "✕" : "☰"}
      </button>

      <div className="app-container">
        {/* ================= SIDEBAR ================= */}
        <aside className={`sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          {/* LOGO */}
          <div className="logo">
            <div className="logo-icon">
              <span>✨</span>
            </div>
            <div>
              <div className="logo-text">Lumi</div>
              <div className="logo-sub">AI Digital Pharmacist</div>
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="nav">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => {
                  setActiveNav(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`nav-item ${activeNav === item.name ? "active" : ""}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </nav>

          {/* BOT CARD */}
          <div className="bot-card">
            <div className="bot-title">Hi! I'm Lumi ✨</div>
            <div className="bot-subtitle">Your AI Pharmacist</div>
            <button 
              onClick={() => alert("✨ Lumi: Hello! How can I help you with your medications today?")}
              className="talk-btn"
            >
              Talk to Lumi
            </button>
          </div>
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="main-content">
          {/* HEADER */}
          <div className="header">
            <div>
              <h1 className="greeting">Hello, Ali 🎉</h1>
              <p className="greeting-sub">We're here to help you stay healthy.</p>
            </div>
            <div className="header-actions">
              <div className="language-selector">
                <span>🌐 English ▼</span>
                <span className="urdu">اردو</span>
              </div>
              <button 
                onClick={() => alert("🎤 Voice input activated. Please speak your prescription details.")}
                className="voice-btn"
              >
                🎤 Voice Input
              </button>
              <div className="avatar">A</div>
            </div>
          </div>

          {/* TWO COLUMN LAYOUT */}
          <div className="two-columns">
            {/* LEFT COLUMN */}
            <div className="left-column">
              {/* SCAN PRESCRIPTION CARD */}
              <div className="card scan-card">
                <h2 className="card-title">Scan Prescription</h2>
                <p className="card-subtitle">Upload or capture your prescription and get AI-powered analysis.</p>
                <div className="scan-options">
                  <button 
                    onClick={() => alert("📸 Opening camera to scan prescription...")}
                    className="scan-btn"
                  >
                    <div className="scan-icon">📷</div>
                    <div>Scan via Camera</div>
                  </button>
                  <button 
                    onClick={() => alert("📁 Select image from gallery...")}
                    className="scan-btn"
                  >
                    <div className="scan-icon">📁</div>
                    <div>Upload Image</div>
                  </button>
                  <button 
                    onClick={() => alert("🎤 Listening... Please speak your prescription")}
                    className="scan-btn"
                  >
                    <div className="scan-icon">🎤</div>
                    <div>Voice Input</div>
                  </button>
                </div>
              </div>

              {/* RISK + SUMMARY ROW */}
              <div className="risk-summary-row">
                <div className="card risk-card">
                  <div className="risk-label">Prescription Risk Score</div>
                  <div className="risk-score">7.5<span className="risk-max">/10</span></div>
                  <div className="risk-level moderate">Moderate Risk</div>
                </div>

                <div className="card summary-card">
                  <h3 className="summary-title">AI Summary (In Simple Words)</h3>
                  <p className="summary-text">
                    Your prescription has some important points to note. Some medicines may interact with each other. 
                    Please follow the instructions carefully and consult your doctor if you feel unwell.
                  </p>
                  <div className="warning-grid">
                    <button 
                      onClick={() => alert("2 drug interactions found between your medications")}
                      className="warning-card drug"
                    >
                      <div className="warning-title">Drug Interactions</div>
                      <div className="warning-count">2 interactions found</div>
                      <div className="warning-link">View details →</div>
                    </button>
                    <button 
                      onClick={() => alert("1 medicine may need dose adjustment")}
                      className="warning-card dose"
                    >
                      <div className="warning-title">Dose Adjustment</div>
                      <div className="warning-count">1 medicine may need adjustment</div>
                      <div className="warning-link">View details →</div>
                    </button>
                    <button 
                      onClick={() => alert("1 important warning to review")}
                      className="warning-card warn"
                    >
                      <div className="warning-title">Warnings</div>
                      <div className="warning-count">1 important warning</div>
                      <div className="warning-link">View details →</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* YOUR MEDICINES TABLE */}
              <div className="card medicines-card">
                <h3 className="medicines-title">Your Medicines</h3>
                <div className="table-container">
                  <table className="medicines-table">
                    <thead>
                      <tr>
                        <th>Medicine</th>
                        <th>Purpose</th>
                        <th>When</th>
                        <th>Safety</th>
                      </tr>
                    </thead>
                    <tbody>
                      {medicines.map((med, idx) => (
                        <tr key={idx}>
                          <td className="med-name">{med.name}</td>
                          <td className="med-purpose">—</td>
                          <td className="med-when">—</td>
                          <td className={`safety-${med.safetyColor}`}>{med.safety}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="right-column">
              {/* TODAY'S SCHEDULE */}
              <div className="card schedule-card">
                <div className="card-header">
                  <h3>Today's Schedule</h3>
                  <button onClick={() => alert("View full medication schedule")} className="view-all">View all</button>
                </div>
                <div className="schedule-list">
                  {schedule.map((item, idx) => (
                    <div key={idx} className="schedule-item">
                      <div className="schedule-time">
                        <span>{item.icon}</span>
                        <span>{item.time}</span>
                      </div>
                      <span className="schedule-med">{item.medicine}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ADHERENCE PROGRESS */}
              <div className="card adherence-card">
                <h3>Adherence Progress</h3>
                <div className="adherence-percent">85%</div>
                <p className="adherence-message">Great job! Keep it up 🎉</p>
              </div>

              {/* NEARBY PHARMACIES */}
              <div className="card pharmacies-card">
                <div className="card-header">
                  <h3>Nearby Pharmacies</h3>
                  <button onClick={() => alert("View all nearby pharmacies")} className="view-all">View all</button>
                </div>
                <div className="pharmacies-list">
                  {pharmacies.map((pharmacy, idx) => (
                    <div key={idx} className="pharmacy-item">
                      <div>
                        <div className="pharmacy-name">{pharmacy.name}</div>
                        <div className="pharmacy-details">{pharmacy.distance} away • {pharmacy.hours}</div>
                      </div>
                      <button onClick={() => alert(`Calling ${pharmacy.name}...`)} className="phone-icon">📞</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="quick-actions">
                <button 
                  onClick={() => alert("Order medicine for delivery")}
                  className="action-btn"
                >
                  <span>📦</span>
                  <div>
                    <div>Order Medicine</div>
                    <small>Get medicines delivered</small>
                  </div>
                </button>
                <button 
                  onClick={() => alert("Connect with a doctor online")}
                  className="action-btn"
                >
                  <span>🩺</span>
                  <div>
                    <div>Consult Doctor</div>
                    <small>Talk to a doctor online</small>
                  </div>
                </button>
                <button 
                  onClick={() => alert("Set medication reminder")}
                  className="action-btn"
                >
                  <span>⏰</span>
                  <div>
                    <div>Set Reminder</div>
                    <small>Never miss your medication</small>
                  </div>
                </button>
                <button 
                  onClick={() => alert("Share report with family or doctor")}
                  className="action-btn"
                >
                  <span>📤</span>
                  <div>
                    <div>Share Report</div>
                    <small>Share analysis with family or doctor</small>
                  </div>
                </button>
              </div>

              {/* AI ASSISTANT SECTION */}
              <div className="card ai-assistant">
                <div className="ai-header">
                  <span className="ai-icon">🤖</span>
                  <div>
                    <div className="ai-title">Your AI Pharmacist</div>
                    <div className="ai-subtitle">How can I help you today?</div>
                  </div>
                </div>
                <button 
                  onClick={() => alert("✨ Lumi: Hello! I'm your AI Pharmacist. Ask me anything about your medications!")}
                  className="talk-to-lumi"
                >
                  Talk to Lumi
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        /* ================= GLOBAL STYLES ================= */
        .app-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%);
          position: relative;
        }

        .mobile-menu-btn {
          display: none;
          position: fixed;
          top: 20px;
          left: 20px;
          z-index: 1001;
          background: #4f46e5;
          color: white;
          border: none;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .app-container {
          display: flex;
          min-height: 100vh;
        }

        /* ================= SIDEBAR ================= */
        .sidebar {
          width: 280px;
          background: white;
          border-right: 1px solid #e2e8f0;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          position: fixed;
          height: 100vh;
          overflow-y: auto;
          transition: transform 0.3s ease;
          z-index: 1000;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          padding-bottom: 8px;
          border-bottom: 2px solid #eef2ff;
        }

        .logo-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          box-shadow: 0 4px 10px rgba(99,102,241,0.3);
        }

        .logo-text {
          font-size: 22px;
          font-weight: 700;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-sub {
          font-size: 11px;
          color: #64748b;
          margin-top: 2px;
        }

        .nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
          color: #475569;
          font-size: 15px;
          font-weight: 500;
        }

        .nav-item:hover {
          background: #f8fafc;
          color: #4f46e5;
        }

        .nav-item.active {
          background: linear-gradient(135deg, #eef2ff, #f3e8ff);
          color: #4f46e5;
          font-weight: 600;
        }

        .nav-icon {
          font-size: 20px;
        }

        .bot-card {
          margin-top: 24px;
          background: linear-gradient(135deg, #eef2ff, #f3e8ff);
          border-radius: 20px;
          padding: 20px 16px;
          text-align: center;
        }

        .bot-title {
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .bot-subtitle {
          font-size: 12px;
          color: #64748b;
          margin-bottom: 16px;
        }

        .talk-btn {
          width: 100%;
          background: #4f46e5;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .talk-btn:hover {
          background: #6366f1;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(79,70,229,0.3);
        }

        /* ================= MAIN CONTENT ================= */
        .main-content {
          flex: 1;
          margin-left: 280px;
          padding: 28px 32px;
          overflow-x: auto;
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .greeting {
          font-size: 34px;
          font-weight: 700;
          background: linear-gradient(135deg, #1e293b, #4f46e5);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .greeting-sub {
          color: #64748b;
          margin-top: 6px;
          font-size: 15px;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .language-selector {
          display: flex;
          background: white;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .language-selector span {
          padding: 8px 16px;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .language-selector span:first-child {
          border-right: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .language-selector .urdu {
          font-weight: 600;
        }

        .voice-btn {
          background: #eef2ff;
          border: none;
          padding: 8px 20px;
          border-radius: 12px;
          color: #4f46e5;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .voice-btn:hover {
          background: #e0e7ff;
          transform: scale(1.02);
        }

        .avatar {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 20px;
          box-shadow: 0 4px 10px rgba(99,102,241,0.3);
        }

        /* Two Columns Layout */
        .two-columns {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 24px;
        }

        .left-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .right-column {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Cards */
        .card {
          background: white;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: all 0.3s;
          border: 1px solid #edf2f7;
        }

        .card:hover {
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }

        .card-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .card-subtitle {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 20px;
        }

        /* Scan Options */
        .scan-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .scan-btn {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 500;
          font-size: 13px;
        }

        .scan-btn:hover {
          background: #eef2ff;
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .scan-icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        /* Risk + Summary Row */
        .risk-summary-row {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
        }

        .risk-card {
          text-align: center;
        }

        .risk-label {
          font-size: 13px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .risk-score {
          font-size: 56px;
          font-weight: 800;
          color: #f59e0b;
          line-height: 1;
        }

        .risk-max {
          font-size: 24px;
          color: #cbd5e1;
          font-weight: 500;
        }

        .risk-level {
          margin-top: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 20px;
          display: inline-block;
        }

        .risk-level.moderate {
          background: #fff7ed;
          color: #f59e0b;
        }

        .summary-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .summary-text {
          font-size: 14px;
          color: #475569;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .warning-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .warning-card {
          padding: 14px;
          border-radius: 16px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          width: 100%;
        }

        .warning-card.drug {
          background: #fef2f2;
          border-left: 4px solid #ef4444;
        }

        .warning-card.dose {
          background: #fff7ed;
          border-left: 4px solid #f59e0b;
        }

        .warning-card.warn {
          background: #fefce8;
          border-left: 4px solid #eab308;
        }

        .warning-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .warning-title {
          font-weight: 700;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .warning-count {
          font-size: 11px;
          color: #64748b;
          margin-bottom: 8px;
        }

        .warning-link {
          font-size: 11px;
          font-weight: 600;
          color: #4f46e5;
        }

        /* Medicines Table */
        .medicines-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .table-container {
          overflow-x: auto;
        }

        .medicines-table {
          width: 100%;
          border-collapse: collapse;
        }

        .medicines-table th {
          text-align: left;
          padding: 14px 12px;
          background: #f8fafc;
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .medicines-table td {
          padding: 14px 12px;
          border-bottom: 1px solid #e2e8f0;
          font-size: 14px;
        }

        .med-name {
          font-weight: 600;
          color: #1e293b;
        }

        .safety-green {
          color: #10b981;
          font-weight: 600;
        }

        .safety-yellow {
          color: #f59e0b;
          font-weight: 600;
        }

        /* Right Column Components */
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .card-header h3 {
          font-size: 16px;
          font-weight: 700;
        }

        .view-all {
          color: #4f46e5;
          font-size: 12px;
          font-weight: 600;
          background: none;
          border: none;
          cursor: pointer;
        }

        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .schedule-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .schedule-time {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #64748b;
        }

        .schedule-med {
          font-weight: 600;
          color: #1e293b;
        }

        .adherence-card {
          text-align: center;
        }

        .adherence-card h3 {
          font-size: 16px;
          margin-bottom: 16px;
        }

        .adherence-percent {
          font-size: 52px;
          font-weight: 800;
          color: #10b981;
        }

        .adherence-message {
          font-size: 13px;
          color: #64748b;
          margin-top: 12px;
        }

        .pharmacies-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .pharmacy-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .pharmacy-name {
          font-weight: 700;
          margin-bottom: 4px;
        }

        .pharmacy-details {
          font-size: 11px;
          color: #64748b;
        }

        .phone-icon {
          background: #f1f5f9;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 16px;
          transition: all 0.2s;
        }

        .phone-icon:hover {
          background: #e2e8f0;
          transform: scale(1.05);
        }

        /* Quick Actions */
        .quick-actions {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .action-btn {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 14px;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
        }

        .action-btn:hover {
          border-color: #4f46e5;
          box-shadow: 0 4px 12px rgba(79,70,229,0.15);
          transform: translateY(-2px);
        }

        .action-btn span {
          font-size: 28px;
        }

        .action-btn div div {
          font-weight: 600;
          font-size: 13px;
        }

        .action-btn small {
          font-size: 10px;
          color: #64748b;
        }

        /* AI Assistant */
        .ai-assistant {
          background: linear-gradient(135deg, #eef2ff, #f3e8ff);
        }

        .ai-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ai-icon {
          font-size: 40px;
        }

        .ai-title {
          font-weight: 700;
          font-size: 15px;
        }

        .ai-subtitle {
          font-size: 12px;
          color: #64748b;
        }

        .talk-to-lumi {
          width: 100%;
          background: #4f46e5;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
        }

        .talk-to-lumi:hover {
          background: #6366f1;
          transform: translateY(-2px);
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1024px) {
          .mobile-menu-btn {
            display: block;
          }

          .sidebar {
            transform: translateX(-100%);
            position: fixed;
            top: 0;
            left: 0;
            width: 280px;
          }

          .sidebar.mobile-open {
            transform: translateX(0);
          }

          .main-content {
            margin-left: 0;
            padding: 80px 20px 20px 20px;
          }

          .two-columns {
            grid-template-columns: 1fr;
          }

          .risk-summary-row {
            grid-template-columns: 1fr;
          }

          .warning-grid {
            grid-template-columns: 1fr;
          }

          .scan-options {
            grid-template-columns: 1fr;
          }

          .quick-actions {
            grid-template-columns: 1fr;
          }

          .greeting {
            font-size: 28px;
          }
        }

        @media (max-width: 640px) {
          .main-content {
            padding: 80px 16px 20px 16px;
          }

          .header {
            flex-direction: column;
          }

          .header-actions {
            width: 100%;
            justify-content: space-between;
          }

          .card {
            padding: 18px;
          }

          .risk-score {
            font-size: 44px;
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Page() {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f5f7fb" }}>
      {/* ========== LEFT SIDEBAR ========== */}
      <div
        style={{
          width: "280px",
          background: "white",
          borderRight: "1px solid #e5e7eb",
          padding: "24px 20px",
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            ✨
          </div>
          <div>
            <div style={{ fontSize: "22px", fontWeight: "bold", color: "#1f2937" }}>Lumi</div>
            <div style={{ fontSize: "11px", color: "#6b7280" }}>AI Digital Pharmacist</div>
          </div>
        </div>

        {/* Menu Items */}
        {[
          "Home",
          "Scan Prescription",
          "My Medicines",
          "Drug Interactions",
          "Reminders",
          "Patient Profile",
          "AI Chat Assistant",
          "Settings",
        ].map((item) => (
          <div
            key={item}
            onClick={() => setActiveMenu(item)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "12px",
              cursor: "pointer",
              marginBottom: "4px",
              background: activeMenu === item ? "#eef2ff" : "transparent",
              color: activeMenu === item ? "#4f46e5" : "#4b5563",
              fontWeight: activeMenu === item ? "600" : "400",
            }}
          >
            <span style={{ fontSize: "20px" }}>
              {item === "Home" && "🏠"}
              {item === "Scan Prescription" && "📷"}
              {item === "My Medicines" && "💊"}
              {item === "Drug Interactions" && "⚠️"}
              {item === "Reminders" && "🔔"}
              {item === "Patient Profile" && "👤"}
              {item === "AI Chat Assistant" && "🤖"}
              {item === "Settings" && "⚙️"}
            </span>
            <span style={{ fontSize: "14px" }}>{item}</span>
          </div>
        ))}

        {/* Bot Card at Bottom */}
        <div
          style={{
            marginTop: "auto",
            background: "linear-gradient(135deg, #eef2ff, #f3e8ff)",
            borderRadius: "20px",
            padding: "20px",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "4px" }}>Hi! I'm Lumi ✨</div>
          <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "16px" }}>Your AI Pharmacist</div>
          <button
            onClick={() => alert("✨ Lumi: How can I help you?")}
            style={{
              width: "100%",
              background: "#4f46e5",
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Talk to Lumi
          </button>
        </div>
      </div>

      {/* ========== RIGHT MAIN CONTENT ========== */}
      <div
        style={{
          flex: 1,
          marginLeft: "280px",
          padding: "32px 40px",
          maxWidth: "calc(100% - 280px)",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div>
            <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>Hello, Ali 🎉</h1>
            <p style={{ color: "#6b7280", marginTop: "4px" }}>We're here to help you stay healthy.</p>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div style={{ display: "flex", border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
              <span style={{ padding: "8px 16px", fontSize: "13px", background: "#f9fafb", borderRight: "1px solid #e5e7eb" }}>
                🌐 English ▼
              </span>
              <span style={{ padding: "8px 16px", fontSize: "13px", fontWeight: "bold" }}>اردو</span>
            </div>
            <button
              onClick={() => alert("Voice input activated")}
              style={{
                background: "#eef2ff",
                border: "none",
                padding: "8px 20px",
                borderRadius: "12px",
                color: "#4f46e5",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              🎤 Voice Input
            </button>
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              A
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "24px" }}>
          {/* LEFT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Scan Prescription Card */}
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "28px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                border: "1px solid #edf2f7",
              }}
            >
              <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "8px" }}>Scan Prescription</h2>
              <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "24px" }}>
                Upload or capture your prescription and get AI-powered analysis.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {[
                  { icon: "📷", label: "Scan via Camera", sub: "Use camera to scan" },
                  { icon: "📁", label: "Upload Image", sub: "Upload prescription image" },
                  { icon: "🎤", label: "Voice Input", sub: "Speak prescription details" },
                ].map((btn) => (
                  <button
                    key={btn.label}
                    onClick={() => alert(btn.label)}
                    style={{
                      background: "#f9fafb",
                      border: "1px solid #e5e7eb",
                      borderRadius: "16px",
                      padding: "20px",
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#eef2ff";
                      e.currentTarget.style.borderColor = "#6366f1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f9fafb";
                      e.currentTarget.style.borderColor = "#e5e7eb";
                    }}
                  >
                    <div style={{ fontSize: "32px", marginBottom: "10px" }}>{btn.icon}</div>
                    <div style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "4px" }}>{btn.label}</div>
                    <div style={{ fontSize: "11px", color: "#6b7280" }}>{btn.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Risk Score + AI Summary Row */}
            <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: "24px" }}>
              {/* Risk Score Card */}
              <div
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "28px",
                  textAlign: "center",
                  border: "1px solid #edf2f7",
                }}
              >
                <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "16px" }}>Prescription Risk Score</div>
                <div style={{ fontSize: "56px", fontWeight: "bold", color: "#f97316" }}>7.5</div>
                <div style={{ fontSize: "14px", color: "#f97316", fontWeight: "bold", marginTop: "8px" }}>Moderate Risk</div>
              </div>

              {/* AI Summary Card */}
              <div
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "28px",
                  border: "1px solid #edf2f7",
                }}
              >
                <h3 style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "12px" }}>AI Summary (In Simple Words)</h3>
                <p style={{ fontSize: "14px", color: "#4b5563", lineHeight: "1.5", marginBottom: "20px" }}>
                  Your prescription has some important points to note. Some medicines may interact with each other.
                  Please follow the instructions carefully and consult your doctor if you feel unwell.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                  {[
                    { title: "Drug Interactions", count: "2 interactions found", color: "#ef4444", bg: "#fef2f2" },
                    { title: "Dose Adjustment", count: "1 medicine may need adjustment", color: "#f97316", bg: "#fff7ed" },
                    { title: "Warnings", count: "1 important warning", color: "#eab308", bg: "#fefce8" },
                  ].map((item) => (
                    <button
                      key={item.title}
                      onClick={() => alert(item.title)}
                      style={{
                        padding: "14px",
                        borderRadius: "12px",
                        background: item.bg,
                        borderLeft: `4px solid ${item.color}`,
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ fontWeight: "bold", fontSize: "13px", marginBottom: "6px" }}>{item.title}</div>
                      <div style={{ fontSize: "11px", color: "#6b7280", marginBottom: "8px" }}>{item.count}</div>
                      <div style={{ fontSize: "11px", color: "#4f46e5", fontWeight: "bold" }}>View details →</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Your Medicines Table */}
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                border: "1px solid #edf2f7",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "24px 24px 0 24px" }}>
                <h3 style={{ fontWeight: "bold", fontSize: "18px" }}>Your Medicines</h3>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
                    <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "bold", color: "#6b7280" }}>
                      Medicine
                    </th>
                    <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "bold", color: "#6b7280" }}>
                      Purpose
                    </th>
                    <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "bold", color: "#6b7280" }}>
                      When
                    </th>
                    <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "12px", fontWeight: "bold", color: "#6b7280" }}>
                      Safety
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Metformin 500mg", safety: "Safe", color: "#10b981" },
                    { name: "Amoxicillin 500mg", safety: "Safe", color: "#10b981" },
                    { name: "Ibuprofen 400mg", safety: "Caution", color: "#f59e0b" },
                    { name: "Aspirin 75mg", safety: "Safe", color: "#10b981" },
                  ].map((med, idx) => (
                    <tr key={idx} style={{ borderBottom: "1px solid #f3f4f6" }}>
                      <td style={{ padding: "16px 24px", fontWeight: "500" }}>{med.name}</td>
                      <td style={{ padding: "16px 24px", color: "#6b7280" }}>—</td>
                      <td style={{ padding: "16px 24px", color: "#6b7280" }}>—</td>
                      <td style={{ padding: "16px 24px", color: med.color, fontWeight: "bold" }}>{med.safety}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Today's Schedule */}
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "24px",
                border: "1px solid #edf2f7",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <h3 style={{ fontWeight: "bold" }}>Today's Schedule</h3>
                <button onClick={() => alert("View all")} style={{ color: "#4f46e5", fontSize: "13px", fontWeight: "bold", cursor: "pointer" }}>
                  View all
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { time: "8:00 AM", med: "Metformin", icon: "☀️" },
                  { time: "1:00 PM", med: "Amoxicillin", icon: "☀️" },
                  { time: "8:00 PM", med: "Aspirin", icon: "🌙" },
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: idx < 2 ? "1px solid #f3f4f6" : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#6b7280" }}>
                      <span>{item.icon}</span>
                      <span>{item.time}</span>
                    </div>
                    <span style={{ fontWeight: "bold" }}>{item.med}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Adherence Progress */}
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "24px",
                textAlign: "center",
                border: "1px solid #edf2f7",
              }}
            >
              <h3 style={{ fontWeight: "bold", marginBottom: "16px" }}>Adherence Progress</h3>
              <div style={{ fontSize: "56px", fontWeight: "bold", color: "#10b981" }}>85%</div>
              <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "12px" }}>Great job! Keep it up 🎉</p>
            </div>

            {/* Nearby Pharmacies */}
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "24px",
                border: "1px solid #edf2f7",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                <h3 style={{ fontWeight: "bold" }}>Nearby Pharmacies</h3>
                <button onClick={() => alert("View all")} style={{ color: "#4f46e5", fontSize: "13px", fontWeight: "bold", cursor: "pointer" }}>
                  View all
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {[
                  { name: "HealthPlus Pharmacy", distance: "0.5 km away", hours: "Open 24 hours" },
                  { name: "LifeCare Pharmacy", distance: "0.8 km away", hours: "Closes at 10 PM" },
                  { name: "CarePoint Pharmacy", distance: "1.2 km away", hours: "Open 24 hours" },
                ].map((pharmacy, idx) => (
                  <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: idx < 2 ? "1px solid #f3f4f6" : "none" }}>
                    <div>
                      <div style={{ fontWeight: "bold", marginBottom: "4px" }}>{pharmacy.name}</div>
                      <div style={{ fontSize: "11px", color: "#6b7280" }}>
                        {pharmacy.distance} • {pharmacy.hours}
                      </div>
                    </div>
                    <button onClick={() => alert(`Calling ${pharmacy.name}`)} style={{ background: "#f3f4f6", border: "none", padding: "8px", borderRadius: "50%", cursor: "pointer" }}>
                      📞
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
              {[
                { icon: "📦", label: "Order Medicine", sub: "Get medicines delivered" },
                { icon: "🩺", label: "Consult Doctor", sub: "Talk to a doctor online" },
                { icon: "⏰", label: "Set Reminder", sub: "Never miss your medication" },
                { icon: "📤", label: "Share Report", sub: "Share analysis with family or doctor" },
              ].map((action) => (
                <button
                  key={action.label}
                  onClick={() => alert(action.label)}
                  style={{
                    background: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#6366f1";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#e5e7eb";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span style={{ fontSize: "28px" }}>{action.icon}</span>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: "13px" }}>{action.label}</div>
                    <div style={{ fontSize: "10px", color: "#6b7280" }}>{action.sub}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* AI Assistant Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #eef2ff, #f3e8ff)",
                borderRadius: "24px",
                padding: "24px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "12px" }}>🤖</div>
              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>Your AI Pharmacist</div>
              <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "16px" }}>How can I help you today?</div>
              <button
                onClick={() => alert("✨ Lumi: How can I help you?")}
                style={{
                  width: "100%",
                  background: "#4f46e5",
                  color: "white",
                  border: "none",
                  padding: "12px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Talk to Lumi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

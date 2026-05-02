'use client';

import { useState } from 'react';
import { SendHorizonal } from 'lucide-react';

export default function ChatAssistant({ analysisData }) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hello, I am Lumi AI Pharmacist. Ask me anything about your medicines.',
    },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = { role: 'user', text: message };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          medicines: analysisData?.medicines || [],
          riskScore: analysisData?.riskScore || 0,
          warnings: analysisData?.warnings || [],
        }),
      });

      const result = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: result.reply || 'Unable to answer right now.',
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Error connecting to AI service.',
        },
      ]);
    }

    setMessage('');
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft p-8 h-full flex flex-col">
      <h3 className="text-2xl font-semibold mb-6">Lumi AI Assistant</h3>

      <div className="flex-1 overflow-y-auto space-y-4 max-h-96 mb-6 pr-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl max-w-[85%] ${
              msg.role === 'user'
                ? 'bg-primary text-white ml-auto'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-slate-100 text-slate-500 p-4 rounded-2xl max-w-[85%]">
            Lumi is analyzing...
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about medicines, dosage, side effects..."
          className="flex-1 border rounded-2xl px-4 py-3 outline-none"
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />

        <button
          onClick={handleSend}
          className="bg-primary text-white px-5 rounded-2xl flex items-center justify-center"
        >
          <SendHorizonal size={20} />
        </button>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Lumi - AI Digital Pharmacist',
  description: 'AI-powered prescription analysis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">{children}</body>
    </html>
  );
}

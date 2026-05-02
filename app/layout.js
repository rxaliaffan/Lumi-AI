import './globals.css';

export const metadata = {
  title: 'Lumi AI Pharmacist',
  description: 'AI-powered digital pharmacist for safer medication use',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-light text-dark antialiased">
        {children}
      </body>
    </html>
  );
}

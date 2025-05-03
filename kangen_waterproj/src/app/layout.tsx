// app/layout.tsx
import './globals.css';
import Navbar from '@/app/components/Navbar';



export const metadata = {
  title: 'Your Site Name',
  description: 'Water Ionizer Info',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

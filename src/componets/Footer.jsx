// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-16 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Obys Agency — addressing info@obys.agency
    </footer>
  );
}

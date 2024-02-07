// Footer.js

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white text-center py-4 font-mono">
      <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

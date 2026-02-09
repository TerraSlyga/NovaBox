export default function Footer() {
  const currentDateTime = new Date().toLocaleString();

  return (
    <footer className="footer">
      <p className="footer__text">
        NovaBox © 2026 | Current Time: {currentDateTime}
      </p>
    </footer>
  );
}

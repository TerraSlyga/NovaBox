export default function Footer() {
  const currentDateTime = new Date().toLocaleString();

  return (
    <footer className="footer">
      <small>NovaBox. Current Time: {currentDateTime}</small>
    </footer>
  );
}

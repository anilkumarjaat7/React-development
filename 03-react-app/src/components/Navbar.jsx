function Navbar() {
  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 40px",
      background: "#0d6efd",
      color: "#fff",
    },
    logo: {
      margin: 0,
    },
    menu: {
      display: "flex",
      gap: "20px",
      listStyle: "none",
    },
  };
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>TechWired</h2>

      <ul style={styles.menu}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;

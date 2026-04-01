function Footer() {
  const styles = {
    footer: {
      textAlign: "center",
      padding: "20px",
      background: "#212529",
      color: "#fff",
      marginTop: "20px",
    },
  };

  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} TechWired. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

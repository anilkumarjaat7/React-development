function Hero() {
  const styles = {
    header: {
      textAlign: "center",
      padding: "60px 20px",
      background: "#f8f9fa",
    },
  };
  return (
    <header style={styles.header}>
      <h1>Welcome to TechWired</h1>
      <p>Your one-stop solution for web development</p>
    </header>
  );
}

export default Hero;

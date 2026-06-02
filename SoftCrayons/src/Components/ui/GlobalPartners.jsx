const partners = [
  {
    name: "Pearson",
    logo: "/partners/pearson.png",
  },
  {
    name: "SAP",
    logo: "/partners/sap.png",
  },
  {
    name: "Microsoft",
    logo: "/partners/microsoft.png",
  },
  {
    name: "Google Cloud",
    logo: "/partners/google-cloud.png",
  },
  {
    name: "AWS",
    logo: "/partners/aws.png",
  },
  {
    name: "Kryterion",
    logo: "/partners/kryterion.png",
  },
  {
    name: "ACT",
    logo: "/partners/act.png",
  },
  {
    name: "LanguageCert",
    logo: "/partners/languagecert.png",
  },
  {
    name: "Skills for English",
    logo: "/partners/skills-for-english.png",
  },
  {
    name: "Salesforce",
    logo: "/partners/salesforce.png",
  },
  {
    name: "Oracle",
    logo: "/partners/oracle.png",
  },
  {
    name: "ISO",
    logo: "/partners/iso.png",
  },
];

export default function GlobalPartners() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold uppercase tracking-widest">
            Partners
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-5">
            SoftCrayons{" "}
            <span className="text-slate-500">
              global
            </span>{" "}
            <span className="text-orange-500">
              partners
            </span>
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-3xl mx-auto">
            We are proud to partner with world-leading
            technology and certification organizations.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl h-32 flex items-center justify-center p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-14 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
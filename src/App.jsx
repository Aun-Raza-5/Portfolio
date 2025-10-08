import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaProjectDiagram, FaGraduationCap, FaEnvelopeOpenText } from "react-icons/fa";
import LaptopAvatar from "./assets/software-development.png";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const projects = [
    { title: "ASD Prediction", desc: "Machine learning model using Python, pandas, scikit-learn, XGBoost", link: "https://github.com/Aun-Raza-5/ASD-Prediction", note: "Archived – view code only" },
    { title: "Medical App", desc: "Java Swing application for managing patient health records", link: "https://github.com/Aun-Raza-5/MedicalApp", note: "Archived – view code only" },
    { title: "Web-Based Game", desc: "Browser-based game built with HTML, CSS, and JavaScript", link: "https://github.com/Aun-Raza-5/Web-Based-Game", note: "Archived – view code only" },
  ];

  const education = [
  {
    title: "Queen's University Belfast",
    desc: [
      <>
        • Academic Year 2025/26: Computer Science Project, Software Testing, Cloud Computing, Deep Learning, Video Analytics and Machine Learning
      </>,
      <>
        • Academic Year 2023/24: Software Engineering and System Development (<strong>78%</strong>), Data Structures and Algorithms (<strong>98%</strong>), Professional and Transfer Skills (<strong>79%</strong>), Introduction to Artificial Intelligence (<strong>72%</strong>), Theory of Computation (<strong>83%</strong>)
      </>,
      <>
        • Academic Year 2022/23: Databases (<strong>73%</strong>), Fundamentals of Maths for Computing (<strong>84%</strong>), Programming – OOP (<strong>78%</strong>), Web Technologies (<strong>67%</strong>), Software Design Principles (<strong>91%</strong>), Introduction to Computer Architecture (<strong>87%</strong>)
      </>
    ]
  },
  { title: "Lahore Grammar School (2020-2022)", desc: ["A-Levels: Mathematics (A), Physics (A), Computer Science (B)"] },
  { title: "Lahore Grammar School (2019-2020)", desc: ["GCSEs: 9 subjects including Mathematics (A), Physics (A), Chemistry (A), English Language (A), Urdu (A)"] },
];


  useEffect(() => {
    const sections = ["about", "projects", "publications", "education", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          setActiveSection(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="app-body min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-700 relative overflow-hidden">
        {/* Navbar */}
        <nav className="w-full fixed top-0 left-0 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 z-50 shadow-md px-6 md:px-12 py-3 md:py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#0ea5e9]">Syed Aun Raza</h1>
          <ul className="hidden md:flex space-x-6 font-medium">
            {["about","projects","publications","education","contact"].map(sec => (
              <li key={sec}>
                <a href={`#${sec}`} className={`nav-link ${activeSection===sec?"active":""} hover:text-[#0ea5e9] transition-colors`}>
                  {sec.charAt(0).toUpperCase()+sec.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-3">
            <a href="https://github.com/Aun-Raza-5" target="_blank" rel="noreferrer">
              <FaGithub className="text-xl hover:text-[#0ea5e9] transition-colors"/>
            </a>
            <a href="https://www.linkedin.com/in/syed-aun-raza-3822a0294/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-xl hover:text-[#0ea5e9] transition-colors"/>
            </a>
            <a href="mailto:sraza02@qub.ac.uk">
              <FaEnvelope className="text-xl hover:text-[#0ea5e9] transition-colors"/>
            </a>
            <button onClick={toggleDarkMode} className="ml-2 px-2 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </nav>

      {/* About Section */}
<section
  id="about"
  className="max-w-4xl mx-auto text-center mt-28 mb-12 scroll-mt-24 opacity-0 animate-fadeIn section-padding"
>
 {/* Avatar */}
<div className="avatar mb-6 mx-auto w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg border-4 border-[#0ea5e9] overflow-hidden">
  <img
  src={LaptopAvatar}
  alt="Laptop Avatar"
  className="w-20 h-20 object-contain"
/>
</div>

  {/* Title */}
  <h2 className="text-3xl md:text-4xl font-bold text-[#0ea5e9] mb-4 leading-snug">
    Final-Year Computer Science Student at Queen’s University Belfast
  </h2>

  {/* Description */}
  <p className="text-gray-900 dark:text-gray-100 text-lg leading-relaxed px-4 md:px-0">
    I am a final-year Computer Science student at Queen’s University Belfast, predicted to graduate with a
    <strong> First-Class (1:1) Honours degree</strong>. I have completed a year-long software engineering
    placement, which gave me valuable exposure to real-world development, cloud technologies, and collaborative
    project environments.
    <br /><br />
    These experiences have strengthened my technical foundation in <strong>software engineering</strong>,
    <strong> cloud computing</strong>, and <strong>artificial intelligence</strong>, while also enhancing key
    transferable skills such as <strong>problem-solving</strong>, <strong>communication</strong>, and
    <strong> teamwork</strong>.
    <br /><br />
    My goal is to pursue a career or further study that allows me to deepen my expertise, take on new challenges,
    and make a meaningful contribution to the field of technology.
  </p>
</section>

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto mb-16 scroll-mt-24 opacity-0 animate-fadeIn delay-200">
          <h2 className="text-4xl font-bold text-[#0ea5e9] mb-6 text-center flex items-center justify-center gap-3">
            <FaProjectDiagram /> Featured Projects
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <div key={i} className="card p-5 rounded-xl shadow-lg hover:shadow-2xl bg-white dark:bg-gray-800 transition">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.desc}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 italic">{project.note}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="button mt-2 inline-block text-[#0ea5e9] hover:underline">View Project</a>
              </div>
            ))}
          </div>
        </section>

        {/* Publications & Reports Section */}
        <section id="publications" className="max-w-5xl mx-auto mb-16 scroll-mt-24 opacity-0 animate-fadeIn delay-300 text-center">
          <h2 className="text-4xl font-bold text-[#0ea5e9] mb-4 flex items-center justify-center gap-3 mx-auto">
            <FaProjectDiagram /> Publications & Reports
          </h2>
          <div className="card hover:shadow-2xl transition duration-300 mx-auto p-6 max-w-4xl">
            <h3 className="font-bold text-2xl mb-3">Portfolio & Research Paper</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg">
              <strong>Portfolio:</strong> Detailed placement report documenting my software engineering internship at Liberty IT, showcasing projects, cloud computing workflows, and CI/CD implementations.<br/>
              <strong>Research Paper:</strong> “Machine Learning vs Artificial Intelligence: What are the differences?” – analyzing distinctions, applications, and impacts of ML and AI technologies.<br/>
              This collection demonstrates both hands-on industry experience and academic research, reflecting my ability to bridge practical skills with theoretical insights.
            </p>
            <a href="https://1drv.ms/f/c/8d455690e414f124/EjaD0BK8ElFDtHmrqPIboYQB9U9Vm3BgHPjlkiD3wibgSg?e=lypxqc" target="_blank" rel="noreferrer" className="button inline-block text-[#0ea5e9] hover:underline">View Report & Paper</a>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="max-w-4xl mx-auto mb-16 scroll-mt-24 opacity-0 animate-fadeIn delay-400">
          <h2 className="text-4xl font-bold text-[#0ea5e9] mb-4 text-center flex items-center justify-center gap-3">
            <FaGraduationCap /> Education
          </h2>
          <div className="space-y-3">
            {education.map((edu, i) => (
              <div key={i} className="card p-4 rounded-xl shadow-lg hover:shadow-2xl bg-white dark:bg-gray-800 transition">
                <h3 className="font-semibold text-xl mb-2">{edu.title}</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {edu.desc.map((d, idx) => <li key={idx}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
<section id="contact" className="max-w-4xl mx-auto mb-8 scroll-mt-24 opacity-0 animate-fadeIn delay-600">
  <h2 className="text-4xl font-bold text-[#0ea5e9] mb-4 text-center flex items-center justify-center gap-3">
    <FaEnvelopeOpenText /> Contact Me
  </h2>
  <form
    className="flex flex-col space-y-3"
    onSubmit={(e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const message = e.target.message.value;
      window.location.href = `mailto:sraza02@qub.ac.uk?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
    }}
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="p-2 rounded border focus:ring-2 focus:ring-[#0ea5e9] outline-none transition"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      required
      className="h-32 p-2 rounded border focus:ring-2 focus:ring-[#0ea5e9] outline-none transition"
    />
    <button
      type="submit"
      className="button p-2 rounded bg-[#0ea5e9] text-white font-semibold hover:bg-blue-700 transition"
    >
      Send Message
    </button>
  </form>
</section>


        <footer className="text-center py-4 border-t border-gray-300 dark:border-gray-700 text-sm">
  © 2025 Syed Aun Raza. Laptop icon by <a href="https://www.flaticon.com/authors/witdhawaty" target="_blank" rel="noreferrer" className="text-[#0ea5e9] hover:underline">Witdhawaty</a>
</footer>

      </div>
    </div>
  );
}

export default App;

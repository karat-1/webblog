import { FaCode, FaServer, FaTools, FaProjectDiagram, FaDesktop, FaWrench } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>

      <div className="skills-grid">
        <div className="skills-category">
          <h2 data-text="Programming Languages"><FaCode /> Programming Languages</h2>
          <div className="skills-list">
            <span>Python</span> <span>TypeScript</span> <span>JavaScript</span>
            <span>Go</span> <span>C/C++</span> <span>C#</span> <span>Java</span>
          </div>
        </div>

        <div className="skills-category">
          <h2><FaDesktop /> Frontend</h2>
          <div className="skills-list">
            <span>React</span> <span>Vue</span> <span>Angular</span> <span>Bootstrap</span>
            <span>Tailwind</span> <span>Bulma</span> <span>Vite</span> <span>Next.js</span>
          </div>
        </div>

        <div className="skills-category">
          <h2><FaServer /> Backend</h2>
          <div className="skills-list">
            <span>Flask</span> <span>Django</span> <span>GraphQL</span> 
            <span>Spring</span> <span>Jakarta</span> <span>.NET 8.0</span>
          </div>
        </div>

        <div className="skills-category">
          <h2><FaTools /> Infrastructure</h2>
          <div className="skills-list">
            <span>Jenkins</span> <span>ArgoCD</span> <span>Sonar</span> 
            <span>Docker</span> <span>Kubernetes</span>
          </div>
        </div>

        <div className="skills-category">
          <h2><FaProjectDiagram /> Project Management</h2>
          <div className="skills-list">
            <span>Jira</span> <span>Confluence</span> <span>RedMine</span>
          </div>
        </div>

        <div className="skills-category">
          <h2><FaWrench /> Other</h2>
          <div className="skills-list">
            <span>Git</span> <span>PyTorch</span> <span>OpenCL</span> <span>Pygame</span> 
            <span>Pandas</span> <span>NumPy</span> <span>SciPy</span> <span>Numba</span> 
            <span>TCP/IP</span> <span>Websockets</span>
          </div>
        </div>
      </div>
    </div>
  );
}

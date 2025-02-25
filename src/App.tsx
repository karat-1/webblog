import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPostPage";
import ProjectPost from "./pages/ProjectPost";
import Skills from "./pages/Skills";
import { blogPosts, projects } from "./lib/mdxloader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CanvasBackground from "./components/CanvasBackground"; // Importiere die neue Komponente

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash.replace("#", "") || "home";
  });

  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

    // Event-Listener für den Browser-Back-Button
    useEffect(() => {
      const handleHashChange = () => {
        setCurrentPage(window.location.hash.replace("#", "") || "home");
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
      
    }, []);

  const renderPage = () => {
    if (currentPage.startsWith("blog-")) {
      const slug = currentPage.replace("blog-", "");
      const post = blogPosts.find((p) => p.slug === slug);
      if (!post) return <h1>404 - Blog Post Not Found</h1>;
      return <BlogPost post={post} setCurrentPage={setCurrentPage} />;
    }

    if (currentPage.startsWith("project-")) {
      const slug = currentPage.replace("project-", "");
      const post = projects.find((p) => p.slug === slug);
      if (!post) return <h1>404 - Blog Post Not Found</h1>;
      return <ProjectPost post={post} setCurrentPage={setCurrentPage} />;
    }


    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "blogs":
        return <Blog setCurrentPage={setCurrentPage} />;
      case "skills":
        return <Skills />
      default:
        return <Home setCurrentPage={setCurrentPage}/>;
    }
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <CanvasBackground />
      <div className="content">{renderPage()}</div>
      

    </>
  );
}

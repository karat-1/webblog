import matter from "gray-matter";

// Load all MDX files as raw text
const files = import.meta.glob("../content/blogs/*.mdx", { eager: true, as: "raw" });
const projectsFiles = import.meta.glob("../content/projects/*.mdx", {eager: true, as: "raw"})

export const blogPosts = Object.keys(files).map((filePath) => {
  const mdxContent = files[filePath];

  if (!mdxContent || typeof mdxContent !== "string") {
    console.warn(`Fehler: ${filePath} enthält keine MDX-String-Daten.`);
    return null;
  }

  try {
    // Parse the frontmatter metadata
    const { data } = matter(mdxContent);
    const slug = filePath.split("/").pop()?.replace(".mdx", "") || "unknown";

    return { ...data, slug, content: mdxContent };
  } catch (error) {
    console.error(`Fehler beim Parsen von ${filePath}:`, error);
    return null;
  }
}).filter(post => post !== null);


export const projects = Object.keys(projectsFiles).map((filePath) => {
  const mdxContent = projectsFiles[filePath];

  if (!mdxContent || typeof mdxContent !== "string") {
    console.warn(`Fehler: ${filePath} enthält keine MDX-String-Daten.`);
    return null;
  }

  try {
    // Parse the frontmatter metadata
    const { data } = matter(mdxContent);
    const slug = filePath.split("/").pop()?.replace(".mdx", "") || "unknown";

    return { ...data, slug, content: mdxContent };
  } catch (error) {
    console.error(`Fehler beim Parsen von ${filePath}:`, error);
    return null;
  }
}).filter(post => post !== null);
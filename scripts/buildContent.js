import fs from "fs-extra";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "public", "content", "blogs");
const projectsDir = path.join(process.cwd(), "public", "content", "projects");
const outputFile = path.join(process.cwd(), "src", "contentData.json");

const getMarkdownFiles = (dir) => {
  return fs.readdirSync(dir).filter((file) => file.endsWith(".mdx"));
};

const parseMarkdownFiles = (dir) => {
  return getMarkdownFiles(dir).map((file) => {
    const filePath = path.join(dir, file);
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(rawContent);
    const slug = file.replace(".mdx", "");

    return { ...data, slug, content };
  });
};

const buildContent = () => {
  const blogPosts = parseMarkdownFiles(blogDir);
  const projects = parseMarkdownFiles(projectsDir);

  fs.writeJSONSync(outputFile, { blogPosts, projects }, { spaces: 2 });
};

buildContent();

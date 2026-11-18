import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "../components/App"; 
import blog from "../data/blog"; 
describe("App", () => {
  it("renders the blog name as a heading (prop-based rendering)", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(blog.name);
  });

  it("renders one article per post in blog.js", () => {
    render(<App />);
    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(blog.posts.length);
  });

  it("renders each post's title and preview", () => {
    render(<App />);
    blog.posts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.preview)).toBeInTheDocument();
    });
  });

  it("renders the about paragraph", () => {
    render(<App />);
    expect(screen.getByText(blog.about)).toBeInTheDocument();
  });
});
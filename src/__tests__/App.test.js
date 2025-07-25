import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm Ali`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/ali's profile picture/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const subHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(subHeading).toBeInTheDocument();
});

test("displays a paragraph with my biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a software developer/i);
  expect(paragraph).toBeInTheDocument();
});

test("displays GitHub and LinkedIn links", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/your-username");

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/your-profile");
});

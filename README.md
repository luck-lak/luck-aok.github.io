# AOKUN's Portfolio Website

## About

This is the personal portfolio website of Aokun Lei.

The website is currently built with simple HTML, CSS, and JavaScript.

## Project Structure

- `index.html` — Main webpage content
- `css/` — Website styles
- `js/` — JavaScript and interactions
- `images/` — Images and other visual assets

## Future Updates / Maintenance

The current structure is intentionally simple and easy to maintain.

### Adding New Content

For small updates, such as adding a new section or changing text:

1. Edit `index.html`.
2. Add corresponding styles in `css/style.css` if needed.
3. Add JavaScript in `js/script.js` only when interaction is required.

When adding a new section, keep the structure consistent:

```html
<section class="section-name">
    <h2>Section Title</h2>
    <p>Content...</p>
</section>
```

### Updating Projects

Projects are kept in the `#projects` section of `index.html`. To add one, copy a
`<article class="project-card">` block, then update the project name, GitHub link,
and one-sentence description. The card layout is already defined in
`css/style.css`, so no CSS changes are needed for a normal new project.

```html
<article class="project-card">
    <h3><a href="https://github.com/your-name/your-project">Project Name</a></h3>
    <p>A short description of what the project explores or does.</p>
</article>
```

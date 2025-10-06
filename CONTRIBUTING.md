# Contributing to MCDOC

Thank you for your interest in contributing to MCDOC! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Content Guidelines](#content-guidelines)
- [Code Standards](#code-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

- Be respectful and inclusive
- Use welcoming and inclusive language
- Be collaborative and constructive
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/mcdoc.github.io.git
   cd mcdoc.github.io
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the development server:
   ```bash
   pnpm run dev
   ```

## Development Process

### Branch Naming

Use descriptive branch names:
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### Commit Messages

Follow the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

Examples:
```
feat(search): add content search functionality
fix(mobile): improve mobile responsiveness
docs(readme): update installation instructions
```

## Content Guidelines

### Markdown Standards

- Use proper heading hierarchy (h1 → h2 → h3)
- Include alt text for all images
- Use relative links for internal content
- Format code blocks with proper syntax highlighting
- Use tables for structured data

### Frontmatter Schema

All content files should include proper frontmatter:

```yaml
---
title: "Page Title"
description: "Brief description of the page content"
lastUpdated: "2024-01-20"
tags:
  - tag1
  - tag2
category: "Category Name"
platform: "Platform Name" # Optional
difficulty: "beginner|intermediate|advanced" # Optional
---
```

### Image Guidelines

- Use WebP format when possible
- Optimize images for web (compress, resize)
- Include descriptive alt text
- Use relative paths: `/assets/images/filename.webp`
- Maximum width: 1200px for screenshots

### Content Structure

- Start with an introduction
- Use clear headings and subheadings
- Include step-by-step instructions
- Add troubleshooting sections when relevant
- Include related links at the end

## Code Standards

### Vue Components

- Use Composition API
- Include proper TypeScript types
- Follow Vue style guide
- Use semantic HTML
- Include accessibility attributes

### CSS/Styling

- Use Tailwind CSS classes when possible
- Follow BEM methodology for custom CSS
- Use CSS custom properties for theming
- Ensure responsive design
- Test in dark mode

### JavaScript/TypeScript

- Use modern ES6+ features
- Include proper error handling
- Use async/await for promises
- Follow ESLint rules
- Include JSDoc comments for functions

## Pull Request Process

### Before Submitting

1. Ensure your code follows our standards
2. Test your changes thoroughly
3. Update documentation if needed
4. Check for linting errors: `pnpm run lint`
5. Build successfully: `pnpm run build`

### PR Checklist

- [ ] Code follows project standards
- [ ] Tests pass (if applicable)
- [ ] Documentation updated
- [ ] No linting errors
- [ ] Builds successfully
- [ ] Responsive design tested
- [ ] Accessibility tested
- [ ] Dark mode tested

### PR Description

Include:
- Description of changes
- Screenshots (if UI changes)
- Testing instructions
- Related issues

## Issue Reporting

### Bug Reports

Include:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information
- Screenshots (if applicable)

### Feature Requests

Include:
- Clear description of the feature
- Use case and benefits
- Proposed implementation (if any)
- Related issues or discussions

### Issue Templates

Use the provided issue templates:
- Bug report
- Feature request
- Documentation update
- Question

## Review Process

1. **Automated Checks**: All PRs must pass automated checks
2. **Code Review**: At least one maintainer must review
3. **Testing**: Changes must be tested in multiple browsers
4. **Documentation**: Documentation must be updated
5. **Approval**: Maintainer approval required for merge

## Recognition

Contributors will be recognized in:
- CONTRIBUTORS.md file
- Release notes
- Project documentation

## Getting Help

- Check existing issues and discussions
- Ask questions in GitHub Discussions
- Join our Discord server
- Contact maintainers directly

## License

By contributing to MCDOC, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to MCDOC! Your efforts help make this project better for everyone.

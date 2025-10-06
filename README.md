<div align="center">
  <img src="https://raw.githubusercontent.com/OpenM-Project/mcdoc.github.io/main/docs/public/assets/images/title.webp" alt="MCDOC Title">
  <p><b>MCDOC is a documentation project for Minecraft tools and unlockers</b></p>
  <a href="https://mcdoc.site" target="_blank">
    <img src="https://raw.githubusercontent.com/OpenM-Project/mcdoc.github.io/main/docs/public/assets/images/webapp-badge.svg" alt="Available on the Web" height="60">
  </a>
  <br>
  <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/OpenM-Project/mcdoc.github.io/deploy.yml?style=for-the-badge">
  <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fmcdoc.site&style=for-the-badge">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/OpenM-Project/mcdoc.github.io?style=for-the-badge">



</div>

## Overview 

This documentation aims to provide comprehensive information and guides on various tools and unlockers for Minecraft.

## Technologies Used

- VitePress: A static site generator that allows you to build and maintain your documentation easily.
- Markdown: A lightweight markup language that you can use to add formatting elements to plaintext text documents

## Getting Started

To get started with MCDOC using VitePress, follow these steps:
1. Clone the repository: `git clone https://github.com/openm-project/mcdoc.github.io.git`
2. Navigate to the project directory: `cd mcdoc.github.io`
3. Install pnpm: `npm install -g pnpm`
4. Install Dependencies with pnpm: `pnpm install`
5. Start the internal server: `pnpm run dev`
6. Open your browser and visit `http://localhost:5173` to view your local hosted version of MCDOC.


## Contributing

Contributions to MCDOC are welcome! If you have any suggestions, improvements, or bug fixes, please feel free to submit a pull request, or create an issue.
**For requesting to add a material to MCDOC is accepted!, please do a Pull Request for it.**

### How to Contribute

1. **Fork the repository** and clone it to your local machine
2. **Create a new branch** for your changes: `git checkout -b feature/your-feature-name`
3. **Make your changes** following our coding standards and guidelines
4. **Test your changes** by running the development server: `pnpm run dev`
5. **Commit your changes** with a descriptive commit message
6. **Push to your fork** and create a pull request

### Contribution Guidelines

- **Code Style**: Follow the existing code style and use Prettier for formatting
- **Commit Messages**: Use clear, descriptive commit messages
- **Pull Requests**: Provide a clear description of your changes and why they're needed
- **Issues**: Use the issue templates and provide as much detail as possible
- **Documentation**: Update documentation for any new features or changes

### Development Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Project Structure

```
docs/
├── .vitepress/          # VitePress configuration and theme
│   ├── config.mts       # Main configuration
│   └── theme/           # Custom theme components
├── bedrock/             # Bedrock Edition content
├── java/                # Java Edition content
├── guides/              # Tutorials and guides
├── marketplace/         # Marketplace content
└── public/              # Static assets
```

### Content Guidelines

- **Markdown**: Use proper Markdown syntax and formatting
- **Images**: Optimize images and use WebP format when possible
- **Links**: Use relative links for internal content
- **Frontmatter**: Include proper frontmatter with title, description, and tags
- **Accessibility**: Ensure content is accessible with proper alt text and headings

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed style, frontmatter schema, and PR checklist.

## License

This project is licensed under the MIT License. For more info, check out the [LICENSE](LICENSE) file.

## Contact

For any questions or inquiries, please contact the project maintainer at [mcdoc@mcdoc.site](mailto:mcdoc@mcdoc.site)

## Feedback

We value your feedback! If you have any suggestions, comments, or questions about the documentation, please don't hesitate to reach out to us. You can submit an issue on the [GitHub repository](https://github.com/openm-project/mcdoc.github.io/issues) or instead, you can contact us directly via our socials such as Discord.

We appreciate your support and hope you find MCDOC helpful for your Minecraft: Bedrock Edition projects, tips, and tricks!

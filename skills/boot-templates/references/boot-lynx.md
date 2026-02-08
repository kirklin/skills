---
name: boot-lynx
description: Starter template for boot-lynx
---

# Boot-Lynx

<p align="center">
  <img src="https://github.com/kirklin/boot-lynx/raw/master/src/assets/lynx-logo.png" alt="Boot-Lynx Logo" width="120" height="120" style="margin-bottom: 20px" />
</p>

<p align="center">
  <a href="https://github.com/kirklin/boot-lynx/blob/main/LICENSE"><img src="https://img.shields.io/github/license/kirklin/boot-lynx" alt="license"></a>
  <a href="https://github.com/kirklin/boot-lynx/releases"><img src="https://img.shields.io/github/v/release/kirklin/boot-lynx" alt="release"></a>
  <a href="https://github.com/kirklin/boot-lynx"><img src="https://img.shields.io/github/stars/kirklin/boot-lynx?style=social" alt="stars"></a>
</p>

> A feature-rich Lynx application starter template built with React and UnoCSS, powered by Rspeedy for rapid development.

English | [简体中文](./README.zh-CN.md)

## 🌟 Features

- 🚀 **Fast Development**: Powered by Rspeedy for lightning-fast builds
- ⚛️ **React on Lynx**: Use React with Lynx engine for efficient mobile applications
- 🎨 **UnoCSS Integration**: Atomic CSS engine for highly optimized styling
- 📱 **QR Code Preview**: Easily test on mobile devices
- 📦 **Optimized Bundle**: Smaller file sizes for better performance
- 🔄 **Hot Module Replacement**: Fast refresh during development
- 🧩 **TypeScript Support**: Type-safe JavaScript development

## 📦 Prerequisites

- Node.js >= 18
- pnpm >= 10.2.1

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/kirklin/boot-lynx.git my-lynx-app

# Navigate to the project directory
cd my-lynx-app

# Install dependencies
pnpm install
```

### Development

```bash
# Start the development server
pnpm dev
```

Scan the QR code displayed in the terminal with the Lynx app to preview your application on mobile.

### Building for Production

```bash
# Build the application for production
pnpm build
```

### Preview Production Build

```bash
# Preview the production build locally
pnpm preview
```

## 🧪 Testing and Linting

```bash
# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix
```

## 🛠️ Project Structure

```
boot-lynx/
├─ src/                  # Source code
│  ├─ assets/            # Static assets
│  ├─ App.tsx            # Main application component
│  ├─ index.tsx          # Application entry point
│  └─ globals.css        # Global styles
├─ lynx.config.ts        # Lynx configuration
├─ tsconfig.json         # TypeScript configuration
├─ package.json          # Project dependencies and scripts
└─ README.md             # Project documentation
```

## 🚧 Known Issues

### CSS Compatibility

Lynx engine does not fully support some modern CSS features:

- Pseudo-elements like `::backdrop` are not supported
- Modern color syntax like `rgb(255 255 255/0.65)` is not recognized

**Workaround:** Use traditional CSS syntax like `rgba(255,255,255,0.65)` instead.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Lynx Engine](https://lynxjs.org/zh/index.html) - The core engine
- [React](https://reactjs.org/) - UI library
- [UnoCSS](https://github.com/unocss/unocss) - CSS engine
- [Rspeedy](https://github.com/web-infra-dev/rspack) - Build tool

---

<p align="center">Developed with ❤️ by <a href="https://github.com/kirklin">Kirk Lin</a></p>

# FormaText Editor
![npm](https://img.shields.io/npm/v/forma-text)
![AI Powered by Gemini](https://img.shields.io/badge/AI%20Powered%20by-Gemini-blue?logo=google)

**FormaText** is a modern, feature-rich, and highly customizable **React text editor** with **AI integration**. It provides a seamless and intuitive editing experience, offering both standard and advanced features to support a wide range of use cases—from simple text input to rich content editing.

---

## 🚀 Installation

```bash
npm install forma-text
```




## 🧑‍💻 Usage

Here's a basic example of how to use the `TextEditor` component in your React application:

```jsx
import { useState } from "react";
import FormaText from "forma-text";

function App() {
  const [content, setContent] = useState("<p>Hello, world!</p>");

  return (
    <FormaText
      content={content}
      setContent={setContent}
      geminiApiKey="YOUR_GEMINI_API_KEY"
      theme="modern" // Options: "classic", "modern", "futuristic"
      premiumApiKey="API_KEY" //Optional
    />
  );
}

export default App;
```

---

## ✨ Features


### 🎨 Theme Variants

FormaText comes with **three beautifully designed themes**, allowing you to tailor the editor's look and feel to your application:

| Theme          | Preview                                                                                               |
|----------------|--------------------------------------------------------------------------------------------------------|
| **Classic**    | ![Classic Theme](https://github.com/Sandaruwan-Jayasundara/public-assets/blob/main/classic.jpg)       |
|                |                                                                                                        |
| **Modern**     | ![Modern Theme](https://github.com/Sandaruwan-Jayasundara/public-assets/blob/main/modern.jpg)         |
|                |                                                                                                        |
| **Futuristic** | ![Futuristic Theme](https://github.com/Sandaruwan-Jayasundara/public-assets/blob/main/futuristic.jpg) |


> ✨ Each theme is crafted with unique UI elements, and toolbar styles for different user preferences.


---
### 🤖 AI Features

---

### 🔒 Basic AI Features
- Refactor code blocks within the editor
- Improve **basic SEO** automatically
- Rewrite and enhance content for readability
- Rich text formatting with real-time preview
- Display **diff tracking** to compare content versions

---

### 🔑 Premium AI Features
- Advanced refactoring with AI-powered suggestions
- Improve **advanced SEO** and **GEO** automatically
- Reorganize and optimize content using **advanced SEO best practices**
- Rewrite and enhance content for better engagement
- Structure content logically with headings and subheadings
- Apply **inline CSS styling** for better visual hierarchy
- Rich text formatting and real-time preview
- Support for multiple languages: **English, Japanese, Hindi, French, Spanish, Sinhalese, Arabic, Chinese**
- Display **diff tracking** to compare content versions

---

### ✅ Standard Features

- **Basic Text Formatting**: Bold, Italic, Underline, Strikethrough, Superscript, and Subscript.
- **Headings and Paragraphs**: Switch between different heading levels and paragraph styles.
- **Font Customization**: Change font family and size.
- **Text & Highlight Colors**: Full-color palette for text and background.
- **Lists**: Ordered & unordered lists with indentation.
- **Text Alignment**: Left, center, and right alignment options.
- **Links**: Add/edit hyperlinks with a modal.
- **Block Elements**: Blockquotes, code blocks, and horizontal lines.
- **Undo/Redo**: Full undo and redo support.
- **Emoji Picker**: Rich emoji selection.
- **Clear Formatting**: Remove all styles from selected text.
- **AI-Powered Refactoring** _(with **`geminiApiKey`**)_:
  - Improve clarity, grammar, and flow using Google Gemini AI.
  - Get intelligent suggestions with a highlighted diff view.
- **Image Insertion**:
  - Upload and embed images.
  - Resize images after inserting.
  - Store image as a Base64 string.
- **Video Embedding**: Embed YouTube/Vimeo videos by URL.
- **Table Creation**: Add customizable tables.
- **Multi-Column Layouts**: Easily structure content with columns.
- **Word (.docx) Import**: Import directly from Word files.
- **Full-Screen Mode**: Distraction-free editing.
- **Source View**: View and edit raw HTML.

---

## Premium Access

We provide **premium keys for special purposes**.  
For production use or extended access and features, please contact us at: [Contact](https://exivio.net/contact)


## ⚙️ Component Props

| Prop                | Type     | Default | Description                                     |
| ------------------- | -------- | ------- | ----------------------------------------------- |
| `content`           | string   | `""`    | The HTML content to be displayed and edited.    |
| `setContent`        | function | `""`    | Function called with updated content.           |
| `geminiApiKey`      | string   | `""`    | Your Google Gemini API key for AI refactoring.  |
| `parentEditorClass` | string   | `""`    | Custom CSS class for the main editor container. |
| `toolBarClass`      | string   | `""`    | Custom CSS class for the toolbar.               |
| `textContentClass`  | string   | `""`    | Custom CSS class for the content area.          |
| `theme`             | string   | `""`    | Editor themes (classic, modern, futuristic)     |
| `premiumApiKey`     | string   | `""`    | Premium Api key for Advance Gen AI    |

---

## 📄 Application Preview

### Classic Theme
---
![Classic](https://github.com/Sandaruwan-Jayasundara/public-assets/blob/main/classic.png)


### Modern Theme
---
![Modern](https://github.com/Sandaruwan-Jayasundara/public-assets/blob/main/modern.png)


### Futuristic Theme
---
![Futuristic](https://github.com/Sandaruwan-Jayasundara/public-assets/blob/main/futuristic.gif)

---


## 📄 License

This project is licensed under the **MIT License**.\
See the [LICENSE](https://github.com/Sandaruwan-Jayasundara/forma-text-public/blob/main/LICENSE) file for more details.

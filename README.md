# 📝 To-Do List App - Next.js

A modern, feature-rich to-do list application built with Next.js, React, and Tailwind CSS.

## 🌟 Features

- ✅ **Add Tasks** - Create new tasks with title, description, priority, and category
- ✏️ **Edit Tasks** - Modify existing tasks easily
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 🔍 **Search** - Search tasks by title or description
- 🎯 **Filter by Priority** - Filter tasks by low, medium, or high priority
- 📂 **Filter by Category** - Organize and filter tasks by custom categories
- ✔️ **Mark Complete** - Toggle task completion status
- 📊 **Statistics** - View task statistics at a glance
- 💾 **Local Storage** - Tasks are automatically saved to browser storage
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Beautiful UI** - Modern design with Tailwind CSS

## 📁 Project Structure

```
to-do-list-in-next.js/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Header component with navigation
│   │   ├── Footer.tsx          # Footer component
│   │   ├── TodoForm.tsx        # Form to add/edit tasks
│   │   ├── TodoItem.tsx        # Individual task component
│   │   ├── SearchBar.tsx       # Search and filter component
│   │   └── Stats.tsx           # Statistics display component
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── demo/
│   │   └── page.tsx            # Demo page with sample tasks
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/whilegodsaleamlak-dotcom/to-do-list-in-next.js.git
cd to-do-list-in-next.js
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 💡 Usage

### Main Page

The main page is where you can:
- Add new tasks
- View all your saved tasks
- Edit and delete tasks
- Search and filter tasks
- Mark tasks as complete

### Demo Page

The demo page (`/demo`) includes:
- Pre-populated sample tasks
- Same features as the main page
- Great for testing the app's functionality

### Task Properties

- **Title** (required): The name of your task
- **Description**: Detailed information about the task
- **Priority**: Low, Medium, or High
- **Category**: Custom categories for organization
- **Status**: Mark as complete or incomplete

## 🎨 Customization

### Tailwind CSS Configuration

Modify `tailwind.config.js` to customize colors, fonts, and other design elements.

### Add More Categories

Edit the demo data in `app/demo/page.tsx` to add more sample tasks and categories.

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork, make changes, and submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by [whilegodsaleamlak-dotcom](https://github.com/whilegodsaleamlak-dotcom)

## 🙏 Support

If you find this project helpful, please consider giving it a ⭐ star on GitHub!

# AI Studio – Wonder Story Lab (ECP7)
## Developer Specification for HTML Prototype

## Purpose
Build an interactive HTML prototype where students:
1. Start with 2 base scenes
2. Generate 1 AI scene
3. Rearrange 3 scenes into a story sequence
4. Speak and edit sentences
5. Submit a final story card to a portfolio

---

## Main Pages

### 1. Landing Page
- Title: AI Studio – Wonder Story Lab
- Subtitle: Same picture, different story!
- CTA Button: Start Story Lab

### 2. Class Flow Page
#### Class 1 – Image Maker
- Hook: Show 2 base scenes
- Teacher Modeling
- AI Scene Generation
- My Story Build
- Sharing
- Output: 3-scene storyboard draft

#### Class 2 – Story Builder
- Review 3 scenes
- Teacher Modeling
- Guided Writing
- My Story Build
- Presentation & Portfolio
- Output: Completed story card

---

## Class 1 – Image Maker

### Layout
- Top title bar
- Left: Base scene images
- Center: 3 story slots
- Right: AI scene maker

### Base Scenes
- Scene A: Snowstorm
- Scene B: Child building a snowman

### Features
- Drag/click scenes into 3 slots
- AI placeholder card
- Generate AI Scene button
- Rearrange scenes after generation
- Save story order

---

## Class 2 – Story Builder

Each scene card includes:
- Scene image
- Speak button
- Text area
- Edit button
- Save button

### Sentence Requirement
- 2 sentences per scene
- Total: 6 sentences
- Output: 1 paragraph

### Example Story
Scene 1
- It is a beautiful day.
- The child builds a snowman.

Scene 2
- He decorates the snowman with lights.
- Then he makes a wish.

Scene 3
- There is a snowstorm!
- The wind blew the snowman away.

---

## Student Screen
Buttons:
- Speak
- Edit
- Save
- Submit to Teacher

Submit action:
- Confirmation modal
- Story moves to Portfolio

---

## Teacher Dashboard
Features:
- View progress
- View submissions
- Share stories
- Portfolio access
- Semester story book PDF generation

Status:
- In Progress
- Completed
- Submitted

---

## Portfolio
Each story card contains:
- Student name
- 3 images
- Final paragraph
- Presentation button

Presentation mode:
- Swipe through scenes
- Display paragraph beneath images

---

## Visual Style
Theme:
Magical AI story lab

Colors:
- Deep blue
- Purple
- Mint green
- Soft yellow
- Pink

UI:
- Rounded cards
- Soft shadows
- Large buttons
- Friendly typography

Icons:
🎤 Speak
✏️ Edit
🖼 Save
📤 Submit
🤖 AI
📖 Portfolio
✨ Generate

---

## Suggested Data Structure

```javascript
const students = [
  {
    name: "Student A",
    scenes: [],
    status: "submitted"
  }
];
```

---

## Recommended File Structure

```text
/project-folder
  index.html
  style.css
  script.js
  /assets
    scene-snowstorm.png
    scene-snowman.png
    scene-ai-lights.png
    ai-placeholder.png
```

---

## Required Website Sections
1. Hero Section
2. Learning Goals
3. Class Flow
4. Image Maker Demo
5. Story Builder Demo
6. Student Screen
7. Teacher Dashboard
8. Portfolio
9. Final Presentation

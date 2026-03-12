# MA LAXMI SALE & SERVICE — Website

A premium interior design & decoration website.

---

## 📂 How to Open the Website

### Simple Method (Just Open in Browser)
1. Open the `malaxmi-website` folder
2. Double-click on **`index.html`**
3. The website will open in your default browser
4. Use the navigation bar to visit other pages (About, Services, Portfolio, Contact)

### Using Live Server (Recommended for Best Experience)
1. Install **Visual Studio Code** from https://code.visualstudio.com/
2. Open VS Code → File → Open Folder → select the `malaxmi-website` folder
3. Install the **Live Server** extension (by Ritwick Dey) from the Extensions tab
4. Right-click on `index.html` → **Open with Live Server**
5. The website will open at `http://localhost:5500` with auto-reload

---

## ✏️ How to Edit the Website

### Change Text / Content
- Open any `.html` file (e.g. `index.html`) in **VS Code** or **Notepad**
- Find the text you want to change and edit it directly
- Save the file and refresh the browser

### Change Colors / Fonts / Styling
- Open `css/style.css`
- Edit the color values at the top of the file under `:root`:
  - `--cream` → Background color
  - `--gold` → Accent/highlight color
  - `--charcoal` → Text color
- Save and refresh

### Change Images
- Replace image files in the `images/` folder
- Keep the **same file names** (e.g. `hero.png`, `bedroom.png`) so the pages still work
- Use high-resolution images for best quality

### Add/Edit Services
- Open `services.html`
- Each service is inside a `<div class="service-card-img">` block
- Copy an existing block and change the image, title, and description

### Update Contact Information
- Search for the address/email text across all `.html` files and update it
- The footer with contact info appears on every page

---

## 📁 File Structure

```
malaxmi-website/
├── index.html          ← Home page
├── about.html          ← About us page
├── services.html       ← Services page
├── portfolio.html      ← Portfolio gallery page
├── contact.html        ← Contact page with form
├── css/
│   └── style.css       ← All styling and colors
├── js/
│   └── main.js         ← Animations and interactions
└── images/             ← All website images
    ├── hero.png
    ├── bedroom.png
    ├── ceiling.png
    ├── lighting.png
    ├── wall.png
    ├── furniture.png
    ├── about.png
    ├── portfolio-living.png
    ├── portfolio-bathroom.png
    └── portfolio-dining.png
```

---

## 🌐 Hosting Online (Optional)

To make this website live on the internet:

1. **Free option — Netlify**: Go to https://app.netlify.com → drag and drop the `malaxmi-website` folder → get a live URL
2. **Free option — GitHub Pages**: Push the files to a GitHub repository → enable GitHub Pages in Settings
3. **Custom domain**: Purchase a domain (e.g. `malaxmisale.com`) and connect it to Netlify or GitHub Pages

---

© MA LAXMI SALE & SERVICE

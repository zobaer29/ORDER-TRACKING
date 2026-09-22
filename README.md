# 🚚 Order Tracking Experience Prototype

A high-performance, responsive, and resilient Order Tracking web application built with **React**, **Vite**, and **Tailwind CSS**. Designed following principal frontend engineering practices, mobile-first responsive constraints (360px–430px), dark glassmorphism aesthetics, and comprehensive coverage for logistics edge cases.

---

## 🌟 Key Features & Capabilities

### 1. **Canonical 4-Stage Visual Progress Stepper**
- Clearly tracks high-level order milestones: **Processing → Shipped → Out for Delivery → Delivered**.
- Visual indicators reflect real-time status (`completed`, `active`, `delayed`, `upcoming`).
- Expandable carrier log drawer for full facility scan history.

### 2. **Interactive Vector GPS Route Map**
- SVG-rendered vector route map showing real-time courier position relative to the destination address.
- Contextual driver info card with direct **Call Driver** and **Message Driver** triggers.
- Dynamic route status overlays (Stops away, Weather Reroute indicators).

### 3. **Critical Edge-Case Coverage**
- ⚡ **State 1: Delayed Order**
  - Prominent amber delay alert communicating disruption cause (e.g. weather flight groundings).
  - Revised ETA display (`Thu, Sep 24`) and interactive **Reschedule Date** modal.
- 📦 **State 2: Delivered but Not Received**
  - Instant claim banner launching a guided 3-step **Report Missing Package** resolution wizard (Free Immediate Replacement or Full Refund).
  - **Delivery Photo Proof Modal** displaying GPS-verified drop photo and location notes.
- ⏳ **State 3: Tracking Not Available Yet**
  - Polished empty/pending state for orders still being picked at the warehouse.
  - Interactive **SMS / WhatsApp Live Alerts** sign-up modal.
- 📱 **Interactive Scenario & State Switcher**
  - Fixed control header allowing evaluator testing of all 6 states (`Out for Delivery`, `Delayed`, `Delivered (Not Received)`, `Tracking Not Ready`, `Loading State`, `Network Error`) and toggling between **Mobile Frame Mockup** and **Full View**.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter & Code Quality**: [Oxlint](https://oxc.rs/)

---

## 📂 Repository Structure

```
.
├── public/
│   ├── _redirects            # SPA redirect rule for Netlify / static hosts
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AlertModal.jsx         # Live notification preferences modal
│   │   ├── DeliveryMap.jsx        # SVG Vector route map & courier info
│   │   ├── DeliveryPhotoModal.jsx # Proof of delivery image viewer
│   │   ├── ErrorView.jsx          # Network retry error fallback state
│   │   ├── MissingItemModal.jsx   # 3-Step Guided Resolution Wizard
│   │   ├── MobileFrame.jsx        # Responsive iOS mobile shell container
│   │   ├── OrderSummary.jsx       # Expandable items & pricing breakdown
│   │   ├── ProgressTimeline.jsx   # 4-Stage Stepper & detailed facility logs
│   │   ├── RescheduleModal.jsx    # Delivery slot rescheduling form
│   │   ├── SkeletonLoader.jsx     # Shimmer loading fallback state
│   │   ├── StateSwitcherBar.jsx   # Top scenario evaluator switcher bar
│   │   ├── StatusHeader.jsx       # Main order badge & primary ETA hero card
│   │   └── SupportActions.jsx     # Contextual help & 24/7 priority assistance
│   ├── data/
│   │   └── mockOrders.js          # Mock state data schemas
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── vercel.json                    # SPA rewrite configuration for Vercel
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **pnpm** / **yarn**

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zobaer29/ORDER-TRACKING.git
   cd ORDER-TRACKING
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled static files will be placed in the `dist/` directory.

---

## 🌐 Deployment Routing

This project includes SPA fallback redirect rules out-of-the-box:
- **Netlify / Static Hosts**: Provided via `public/_redirects` (`/* /index.html 200`).
- **Vercel**: Provided via `vercel.json` rewrite configuration.

---

## 🧪 Quality & Accessibility Audit Standards

- **Semantic HTML**: Strict DOM validation, valid button nesting, accessible ARIA attributes.
- **Responsive Boundary**: Outer frame scales seamlessly down to 360px mobile viewports without horizontal clipping.
- **Code Audit Clean**: Zero warnings or errors verified with Oxlint.

# NEEDS.md — Manual Action Items & Next Steps

This file details manual tasks required to finalize the portfolio updates.

---

## 1. Local Preview & Review
Run the development server locally to preview the three updated sections:
```bash
npm run dev
```
Navigate to `http://localhost:5173` (or the port shown in terminal) and verify:
- **Hero Tagline**: Check that *"Final-year computer engineering student building agents, vision models and the apps around them."* displays cleanly under your name on both desktop and mobile viewports.
- **Featured Projects**: Review the *Badi* and *krishiMitra* case study cards, the *YOLOv1* and *PrashnaAI* compact entries, and the *Also Built* list.
- **Skills Section**: Inspect the 4 plain evidence-based rows (*Languages*, *ML & AI*, *Backend & Cloud*, *Tools & Frameworks*) to verify that the evidence tags match your background.

---

## 2. Capture Real Visuals (from ASSETS.md)
Save real screenshots and plots into `src/assets/real/`:
- **YOLOv1**: Re-run the final plotting cell in `train_colab.ipynb` to save a high-resolution PNG of the train mAP curve (0.0 → 0.903) and loss convergence.
- **PrashnaAI**: Open [https://prashnaai.vercel.app/](https://prashnaai.vercel.app/) and capture a clean browser screenshot of the live audio analysis / feedback UI.
- **Badi**: Export a clean SVG or PNG diagram of the FalkorDB schema graph from the FalkorDB browser (`http://localhost:3000`).
- **krishiMitra**: Capture a screenshot of the React Native app running on an Android device/emulator with a disease prediction result.

---

## 3. Git Branch Management
The changes have been implemented across three atomic commits on branch `portfolio-rewrite`:
- `refactor(projects): rewrite projects as case studies, compact entries, and also-built list`
- `refactor(skills): replace card grid with 4 plain evidence-based rows`
- `refactor(hero): update tagline to concrete student engineer statement`

When you are ready to merge into `main`:
```bash
git checkout main
git merge portfolio-rewrite
```
*(As instructed, the agent did not push to remote or trigger deployments).*

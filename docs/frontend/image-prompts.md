# Image prompts for generated artwork (DIG-52)

Owner: Frontend Agent. Last updated: 2026-10-10.

Every image on the site is currently an original SVG illustration drawn in code (`public/images/`). If the owner wants photorealistic or rendered artwork, generate images with the prompts below (Midjourney, DALL-E, Imagen, Firefly, etc.), then:

1. Export as **WebP** (quality 80 to 85) at the target size, or PNG if the tool cannot export WebP.
2. Save to the listed path (same folder as the SVG).
3. In `src/content/images.ts`, change `src` to the new file. If the aspect ratio differs, update `width` and `height`. Review the `alt` text so it still describes the new image.

Rules for every image: no text, letters, logos or watermarks in the image; no recognisable real people; no fake brand marks or UI from real products; leave breathing room at edges because cards crop nothing but sit on rounded corners. Check the tool's licence permits commercial use.

**Shared style suffix** (append to every prompt):
> deep navy background (#0A1222), luminous electric blue (#3A63EA), violet (#7C5CF0) and teal (#14B8A6) accents, soft volumetric glow, glassmorphism panels, subtle depth of field, clean premium tech aesthetic, high detail, no text, no logos, no watermark

## Slots

| Slot (`images.ts` key) | Current file | Target size (ratio) | Where it appears |
|---|---|---|---|
| heroAiCore | `/images/hero/ai-core.svg` | 1280 x 1120 (8:7) | Home hero, right column |
| serviceWebMobile | `/images/services/web-mobile.svg` | 800 x 480 (5:3) | Service card |
| serviceAiAssistants | `/images/services/ai-assistants.svg` | 800 x 480 (5:3) | Service card |
| serviceAutomation | `/images/services/automation.svg` | 800 x 480 (5:3) | Service card |
| serviceDataAnalytics | `/images/services/data-analytics.svg` | 800 x 480 (5:3) | Service card |
| serviceCloudIntegration | `/images/services/cloud-integration.svg` | 800 x 480 (5:3) | Service card |
| serviceCustomSoftware | `/images/services/custom-software.svg` | 800 x 480 (5:3) | Service card |
| aboutCollaboration | `/images/about/collaboration.svg` | 1120 x 840 (4:3) | Home About teaser |
| aboutTeamNetwork | `/images/about/team-network.svg` | 1120 x 920 (~6:5) | /about hero |
| consultantPlaceholder | `/images/team/avatar-placeholder.svg` | 800 x 800 (1:1) | Fallback for consultants without a photo |
| (per consultant) `photo` in `consultants.ts` | `/images/team/<firstname-lastname>.webp` | 800 x 800 minimum (1:1) | /about consultant cards: **real photos only, supplied by the consultant** |

## Prompts

### heroAiCore (home hero)
> A glowing AI core shaped like a rounded square microchip floating at the centre, radiating a neural network of luminous nodes and fine connection lines in concentric rings, small floating translucent glass panels around it showing abstract code lines, a chat bubble and a bar chart, sense of software being built by intelligence, isometric-leaning 3D render, transparent-feeling dark space around the edges, [shared style suffix]

### serviceWebMobile
> A sleek laptop browser window and a modern smartphone side by side, both showing abstract app interfaces made of soft gradient blocks and cards, tiny sparkles suggesting AI features, 3D render on a dark tile, [shared style suffix]

### serviceAiAssistants
> A friendly glowing orb representing an AI assistant beside floating chat bubbles of different sizes, one bubble in a blue-to-violet gradient, a typing indicator with three dots, conversational and helpful mood, 3D render, [shared style suffix]

### serviceAutomation
> Abstract documents and forms flowing along luminous paths into a glowing diamond-shaped AI node and emerging on the other side as neat completed task cards with check marks, conveyor of light, sense of effortless workflow, 3D render, [shared style suffix]

### serviceDataAnalytics
> A floating glass analytics dashboard with glowing bar chart, smooth teal trend line with bright data points and a segmented ring chart, data particles rising, insight and clarity mood, 3D render, [shared style suffix]

### serviceCloudIntegration
> A luminous stylised cloud at the centre connected by dashed light paths to four floating application blocks, data packets travelling along the paths, reliable and connected mood, 3D render, [shared style suffix]

### serviceCustomSoftware
> Layered translucent code editor windows stacked in depth with abstract coloured code lines, a glowing tile with code brackets symbol in front, craftsmanship and precision mood, 3D render, [shared style suffix]

### aboutCollaboration (home About teaser)
> Abstract faceless human silhouettes in glowing circular frames arranged around a central luminous AI symbol, connected by fine light lines, representing consultants collaborating with AI, warm but professional, no real faces, 3D render, [shared style suffix]

### aboutTeamNetwork (/about hero)
> A constellation of seven faceless human silhouette avatars in glowing rings arranged in a circle around a radiant central orb, linked by a delicate network of light, teamwork and expertise mood, no real faces, [shared style suffix]

### consultantPlaceholder
> A minimal neutral silhouette of a person's head and shoulders, softly lit, on a deep navy to indigo gradient background with a faint glow, used as a placeholder avatar, no face details, [shared style suffix]

Consultant photos must be **real photographs of the actual consultants**, provided with their consent. Do not generate AI faces for real people. Suggested brief for a photographer: head and shoulders, square crop, plain dark or softly blurred office background, even soft light, consistent framing across the team.

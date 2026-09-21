# EcoCycle frontend

## Experience
Build a cohesive responsive platform with three tailored workspaces: a public education and centre-discovery site, a citizen recycling dashboard, and operational centre/admin dashboards. The citizen journey will be the visual and interaction priority, with the pickup tracker as the signature screen.

## Foundation
- Establish EcoCycle’s neutral environmental-tech design system with semantic colors, Manrope typography, accessible focus states, subtle motion, and responsive spacing.
- Create reusable navigation, sidebar, cards, status badges, timelines, forms, filters, charts, map placeholders, loading/error/empty states, dialogs, and mobile navigation.
- Centralize realistic mock citizens, centres, devices, pickups, rewards, articles, transfers, and analytics data behind a simple service layer.

## Public experience
- Build the landing page, login, registration, collection-centre discovery and detail pages.
- Include responsive navigation, lifecycle artwork, impact metrics, EcoAssist preview, educational content, filters, map markers, form validation, and meaningful mock actions.

## Citizen experience
- Build the overview, e-waste library and add-item flow, pickup request flow, pickup list and tracking journey, recycling history, authenticated centre discovery, rewards, EcoAssist, awareness/article, profile, and settings pages.
- Make the main recycling journey clear: register an item, run a mock AI identification, choose a verified centre and slot, confirm a pickup, track its stages, and view earned impact and points.

## Centre and admin experiences
- Build role-specific centre overview, request management, collections, and recycler transfer pages.
- Build admin overview, centre verification, user management, and analytics pages with restrained data visualizations and confirmation dialogs.

## Responsiveness and verification
- Use desktop sidebars, tablet collapse behavior, mobile navigation, stacked maps/forms, and card-based mobile table alternatives.
- Verify key pages and flows at desktop and mobile sizes, including navigation, forms, dialogs, toasts, empty/error/loading states, and route metadata.

## Technical details
- Keep TanStack Router as the project’s React routing implementation and create every requested route as a real route file.
- Use Tailwind CSS v4, existing UI primitives, Lucide icons, Recharts, React Hook Form/Zod where useful, and Sonner notifications.
- Frontend-only mock services; no authentication server or persistent backend will be added.

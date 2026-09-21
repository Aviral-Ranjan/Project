# EcoCycle Connect

Build a complete modern responsive frontend for a web platform called EcoCycle, an e-waste collection and recycling management platform.

The platform connects citizens with verified e-waste collection centres and recycling agencies. Citizens can register their electronic waste, request pickups, schedule collections, track recycling progress, find nearby authorized centres, learn responsible disposal practices, and earn sustainability points.

Build the frontend using:

React

Tailwind CSS

React Router

Lucide React icons

Reusable components

Responsive design for desktop, tablet and mobile

Mock data for now

Clean component architecture

No backend implementation yet

Use realistic data rather than lorem ipsum

The application should feel like a real production SaaS platform, not a college project.

DESIGN DIRECTION

Create a premium, minimal, modern environmental-tech aesthetic.

Visual personality

The UI should communicate:

Sustainability

Trust

Technology

Cleanliness

Community

Progress

Avoid making the interface overly "green" or cartoonish.

Use a mostly neutral background with green as the primary accent.

Color system

Use approximately:

Background: #F7F8F5

Cards: #FFFFFF

Primary green: #1F7A5A

Dark green: #145C43

Light green: #E5F3EC

Accent lime: #A8D86E

Primary text: #17211B

Secondary text: #66736B

Borders: #E4E9E5

Warning: #D99A32

Error: #D9534F

Blue/info: #4D7CFE

Use subtle gradients only where appropriate.

Typography

Use a modern font such as Inter, Manrope, or Geist.

Headings should be bold but not oversized.

Use strong typography hierarchy and generous whitespace.

Design characteristics

Use:

Rounded cards

14–20px border radius

Subtle shadows

Thin borders

Spacious layouts

Large whitespace

Clean iconography

Small status badges

Progress indicators

Interactive hover states

Smooth transitions

Avoid:

Excessive gradients

Excessive glassmorphism

Huge shadows

Neon colors

Generic Bootstrap-style UI

Excessive rounded "pill" shapes

Cluttered dashboards

GLOBAL APPLICATION STRUCTURE

Create two main application experiences:

Public website

Authenticated application dashboard

The navigation should change based on authentication.

PUBLIC WEBSITE

Create the following pages:

1. Landing Page /

Create a premium sustainability-focused landing page.

Navbar

Logo:

EcoCycle ♻

Navigation:

How It Works

Find Centres

Learn

About

Right side:

Log In

Get Started

Navbar should become mobile responsive with a hamburger menu.

Hero section

Large headline:

Give your old electronics a better ending.

Supporting text:

"Connect with verified e-waste collection centres, schedule a pickup, and track your electronics from collection to responsible recycling."

Primary CTA:

Schedule a Pickup

Secondary CTA:

Find a Collection Centre

Hero visual:

Create an attractive abstract illustration showing the lifecycle:

Electronic device → Collection → Recycling → Reuse

Use subtle environmental elements such as leaves, circular arrows, electronics and recycling symbols.

Do not make it look like a generic stock-photo website.

Impact statistics

Create a horizontal statistics section:

12,480 kg E-Waste Recycled

3,240 Pickups Completed

48 Verified Centres

6,820 Citizens Participating

Use clean typography and small icons.

How It Works

Three or four steps:

01

Identify your e-waste

Tell us what electronic items you want to dispose of.

02

Schedule a pickup

Choose a verified collection centre and convenient time.

03

Track your recycling

Follow your e-waste through every stage.

04

Make an impact

See how your responsible disposal contributes to sustainability.

Use a horizontal timeline on desktop and vertical timeline on mobile.

Supported Electronics

Create a visually appealing grid:

Smartphones

Laptops

Tablets

Televisions

Printers

Batteries

Chargers

Cables

Computer Components

Other Electronics

Each category should have a clean icon.

AI feature section

Introduce the future AI functionality.

Heading:

Not sure what to do with your device?

Description:

"Use EcoAssist to identify your e-waste and get responsible disposal guidance."

Show an AI assistant mockup with:

User:

"I have an old broken laptop. How should I dispose of it?"

AI:

"Your laptop should be handled through an authorized e-waste recycler. EcoCycle can help you find the nearest verified centre and schedule a pickup."

CTA:

Try EcoAssist

Sustainability section

Create a visually rich section showing:

Every responsible disposal makes a difference.

Display environmental impact cards:

Materials recovered

Electronics diverted from landfill

Estimated CO₂ impact

Devices recycled

Final CTA

Large section:

Ready to clear out your old electronics responsibly?

Buttons:

Schedule a Pickup

Explore Collection Centres

Footer

Columns:

EcoCycle

"Making responsible e-waste disposal simple."

Platform:

Find Centres

Request Pickup

Track Recycling

Rewards

Resources:

Awareness

E-Waste Guide

FAQ

AI Assistant

Company:

About

Contact

Privacy

Terms

2. LOGIN PAGE /login

Create a clean split-screen login page.

Left:

EcoCycle branding and a sustainability illustration.

Right:

Login card.

Fields:

Email
Password

Options:

Remember me
Forgot password?

Button:

Log In

Divider:

OR

Continue with Google

Bottom:

"Don't have an account? Create one"

Include validation and password visibility toggle.

3. REGISTER PAGE /register

Registration page with:

Full Name
Email
Phone Number
Password
Confirm Password

Role selector:

Citizen
Collection Centre

Checkbox:

"I agree to the Terms and Privacy Policy"

Button:

Create Account

Include password strength indicator.

4. FIND CENTRES PAGE /centres

Create a public collection-centre discovery page.

Layout:

Left:

Search/filter panel.

Fields:

Search location
Distance
Accepted e-waste category
Open now

Right:

Interactive map placeholder.

Show centre markers.

Below/alongside map, show centre cards:

GreenCycle Recycling Centre

Verified ✓

2.4 km away

Accepts:

Laptops · Phones · Batteries · TVs

Open until 6:00 PM

Buttons:

View Details

Schedule Pickup

Use a "Verified" badge prominently.

AUTHENTICATED CITIZEN APPLICATION

After login, use a completely different dashboard layout.

Desktop:

Sidebar on left.

Main content on right.

Sidebar:

EcoCycle logo

Overview
My E-Waste
Request Pickup
My Pickups
Find Centres
Recycling History
Eco Points
EcoAssist
Awareness

Bottom:

Settings
Profile
Logout

Mobile:

Bottom navigation or collapsible sidebar.

5. CITIZEN DASHBOARD /dashboard

Create a polished personal sustainability dashboard.

Header:

Good morning, Aviral 👋

Subtitle:

"Here's your environmental impact so far."

Stats cards:

12 kg
E-Waste Recycled

4
Pickups Completed

340
Eco Points

3
Devices Recycled

Current Pickup

Large card showing:

Laptop + 2 Smartphones

Status:

Scheduled

Timeline:

Requested → Accepted → Scheduled → Picked Up → At Recycler → Recycled

Show:

Collection Centre
GreenCycle Recycling Centre

Date:
24 September 2026

Time:
10:00 AM – 12:00 PM

Button:

Track Pickup

Environmental Impact

Create a beautiful card showing:

♻ 12 kg e-waste diverted

🌱 Estimated environmental impact

Display a circular progress visualization.

Nearby Centres

Show 3 collection centre cards.

Button:

View All Centres

Quick Actions

Four cards:

Request Pickup
Add E-Waste
Find Centre
Ask EcoAssist

6. MY E-WASTE /e-waste

Title:

My E-Waste

Subtitle:

"Manage the electronics you've registered for responsible disposal."

Top right:

+ Add E-Waste

Display e-waste as cards or a table.

Each item:

Laptop
Dell Inspiron

Condition:
Not Working

Weight:
2.3 kg

Status:
Awaiting Pickup

Actions:

View
Edit
Delete

7. ADD E-WASTE /e-waste/add

Create a clean multi-step form.

Step indicator:

01 Item Details
02 Condition
03 Photos
04 Review

Fields:

Category

Dropdown:

Smartphone
Laptop
Tablet
TV
Printer
Battery
Charger
Cable
Other

Brand

Model

Condition:

Working
Partially Working
Not Working
Damaged

Estimated quantity

Estimated weight

Upload photos.

AI detection option

Prominent card:

Let AI identify it

"Upload a photo and EcoAssist will identify your electronic device and suggest responsible disposal options."

Button:

Analyze with AI

After analysis, show:

Detected:

Laptop

Confidence:

94%

Suggested category:

Computing Device

Recommended disposal:

Authorized e-waste recycler

Allow user to correct the result.

8. REQUEST PICKUP /pickup/request

Create a multi-step pickup booking experience.

Step 1:

Select your e-waste

Checkbox list of registered items.

Step 2:

Choose collection centre

Show nearby verified centres.

Step 3:

Pickup address

Address form.

Step 4:

Choose date & time

Calendar.

Available slots:

10:00 AM – 12:00 PM
12:00 PM – 2:00 PM
3:00 PM – 5:00 PM

Step 5:

Review request

Show complete summary.

Button:

Confirm Pickup

9. MY PICKUPS /pickups

Title:

My Pickups

Tabs:

All
Upcoming
Completed
Cancelled

Each pickup card:

Pickup ID
Items
Collection centre
Date
Status

Example:

EC-2026-0924

Laptop + Smartphone

GreenCycle Recycling Centre

24 Sep 2026

Status:

Scheduled

Button:

Track

10. TRACK PICKUP /pickups/:id

Make this one of the most visually impressive pages.

Header:

Track your recycling

Pickup ID:

EC-2026-0924

Main timeline:

● Pickup Requested
│
● Centre Accepted
│
● Pickup Scheduled
│
● Items Collected
│
○ At Collection Centre
│
○ Sent to Recycler
│
○ Recycled

Highlight the current stage.

Below timeline:

Collection details

Centre:

GreenCycle Recycling Centre

Pickup date:

24 September 2026

Items:

Dell Laptop
Samsung Smartphone
USB Charger

Weight:

3.2 kg

Recycling journey

Show a visual journey:

Your Home
↓
Collection Centre
↓
Authorized Recycler
↓
Material Recovery
↓
Recycled Materials

Use icons and connecting lines.

11. RECYCLING HISTORY /recycling

Title:

Recycling History

Stats:

Total Items
Total Weight
Pickups
Eco Points

Show historical records.

Each record:

Laptop
3.2 kg

Recycled:
12 Aug 2026

Recycler:
GreenEarth Recycling

Impact:

"3.2 kg electronics responsibly recycled"

12. FIND CENTRES /dashboard/centres

Authenticated version of centre discovery.

Large map.

Search:

"Search by location"

Filters:

Distance
E-waste type
Open now
Pickup available

Centre cards should show:

Verified badge
Distance
Accepted materials
Operating hours
Pickup availability

Buttons:

View Details
Request Pickup

13. CENTRE DETAILS /centres/:id

Hero:

GreenCycle Recycling Centre

Verified Collection Centre ✓

Rating:
4.7

Distance:
2.4 km

Information:

Address
Phone
Opening hours
Accepted e-waste
Pickup availability

Show:

Accepted Items

✓ Smartphones
✓ Laptops
✓ Batteries
✓ TVs
✓ Printers

Map section.

CTA:

Schedule Pickup

14. ECO POINTS /rewards

Create a gamified sustainability page.

Header:

Your Eco Points

Large number:

340 XP

Progress:

340 / 500

"160 points until your next level"

Level:

Eco Explorer

How to earn

Cards:

♻ Recycle an item
+50 points

📅 Complete a pickup
+30 points

📚 Complete an awareness lesson
+10 points

👥 Invite a friend
+25 points

Achievements

Create achievement badges:

First Recycle
Eco Starter
5 Pickups
10kg Recycled
Community Contributor

Locked achievements should appear muted.

15. ECOASSIST /eco-assist

Make this feel like a modern AI assistant.

Header:

EcoAssist

Subtitle:

"Your AI guide for responsible e-waste disposal."

Large chat interface.

Welcome message:

"Hi! I'm EcoAssist. Tell me about your electronic waste and I'll help you figure out what to do with it."

Suggested prompts:

"What should I do with an old laptop?"

"Can I recycle a swollen battery?"

"Where can I dispose of a broken TV?"

"How should I dispose of cables?"

Chat messages should have distinct user and AI bubbles.

Include:

Text input
Image upload
Send button

Below chat:

AI can help you with

Identify electronics
Disposal guidance
Find collection centres
Understand recycling
Learn about environmental impact

Include a small disclaimer:

"AI-generated guidance should be verified with your local authorized collection or recycling facility."

16. AWARENESS /awareness

Create an educational content hub.

Header:

Learn. Recycle. Make an Impact.

Featured article:

Why responsible e-waste disposal matters

Large image/illustration.

Categories:

All
E-Waste Basics
Recycling
Safety
Environment
Technology

Article cards:

"What happens to your old phone?"
"Why batteries need special handling"
"5 ways to reduce electronic waste"
"Understanding e-waste recycling"
"How to safely dispose of electronics"

17. ARTICLE PAGE /awareness/:id

Large article layout.

Category badge.

Title:

What happens to your old phone after recycling?

Author/date.

Hero illustration.

Readable article content.

Sidebar:

Table of contents

Related articles.

At bottom:

Ready to recycle your electronics?

CTA:

Schedule a Pickup

18. PROFILE /profile

Profile settings:

Profile photo
Full name
Email
Phone
Address

Environmental summary:

Total recycled
Pickups
Eco points

Buttons:

Edit Profile
Change Password

19. SETTINGS /settings

Sections:

Account
Notifications
Privacy
Preferences

Notification toggles:

Pickup updates
Recycling updates
Educational content
Rewards

COLLECTION CENTRE DASHBOARD

Create a separate role-based dashboard for collection-centre users.

Sidebar:

Overview
Pickup Requests
Schedule
Collections
Inventory
Recycling Transfers
Analytics
Profile

20. CENTRE DASHBOARD /centre/dashboard

Header:

Good morning, GreenCycle 👋

Stats:

Pending Requests
Today's Pickups
Items Collected
Total Recycled

Show:

Today's Schedule

10:00
Aviral Ranjan
Laptop + Smartphone
Status: Scheduled

12:30
Rahul Sharma
TV + Cable
Status: Pending

Pickup requests

Table:

Citizen
Items
Date
Distance
Status
Actions

Actions:

Accept
Reject
Schedule

21. CENTRE PICKUP REQUESTS /centre/requests

Tabs:

Pending
Accepted
Scheduled
Completed

Create detailed request cards.

Include citizen information, items, estimated weight and address.

22. CENTRE COLLECTIONS /centre/collections

Show collected e-waste.

Columns:

Item
Citizen
Weight
Date
Category
Status

Allow centre staff to update:

Received
Sorted
Transferred to Recycler

23. CENTRE RECYCLING TRANSFERS /centre/transfers

Show transfers to recycling agencies.

Create transfer button.

Form:

Recycler
Items
Total weight
Transfer date
Tracking/reference number

Status:

Prepared
In Transit
Received
Processed

ADMIN DASHBOARD

Create a professional admin interface.

Sidebar:

Overview
Users
Collection Centres
Recycling Agencies
Pickups
Recycling
Awareness
Reports
Settings

24. ADMIN OVERVIEW /admin

Stats:

Total Citizens
Verified Centres
Pending Verification
Total E-Waste
Completed Pickups
Recycled Weight

Charts:

E-waste collected over time

E-waste by category

Pickup completion rate

Centre activity

25. ADMIN CENTRE VERIFICATION /admin/centres

Table:

Centre
Location
Documents
Status
Submitted
Actions

Status:

Pending
Verified
Rejected

Actions:

View
Approve
Reject

Use confirmation dialogs.

26. ADMIN USERS /admin/users

Searchable table:

User
Email
Role
Joined
Status
Actions

Filters:

Citizen
Centre
Recycler
Admin

27. ADMIN ANALYTICS /admin/analytics

Create a rich analytics dashboard.

Charts:

Monthly e-waste collected

E-waste categories

Centre performance

Pickup completion

Recycling outcomes

Geographic distribution

Environmental impact

Use charts that are visually clean and not overly colorful.

GLOBAL COMPONENTS

Create reusable components:

Navbar
Sidebar
MobileNavigation
Button
Card
Badge
Modal
Dialog
Input
Select
Dropdown
Toast
Tabs
ProgressBar
Timeline
StatCard
EmptyState
LoadingSkeleton
Pagination
SearchBar
FilterPanel
MapPlaceholder
StatusBadge
FileUpload
DatePicker

STATUS COLORS

Use consistent status indicators.

Requested:
neutral

Accepted:
blue/info

Scheduled:
purple

Picked Up:
orange

At Collection Centre:
blue

Sent to Recycler:
indigo

Recycled:
green

Cancelled:
red

RESPONSIVENESS

The entire application must work properly on:

1440px desktop

1280px laptop

1024px tablet

768px tablet

390px mobile

Desktop:

Sidebar + content.

Tablet:

Collapsible sidebar.

Mobile:

Bottom navigation or hamburger menu.

Tables should become cards on mobile.

Maps should stack vertically.

Forms should become single-column on mobile.

INTERACTION DETAILS

Add subtle animations:

Button hover

Card hover

Page transitions

Sidebar transitions

Modal animations

Progress animations

Timeline transitions

Keep animations subtle and fast.

Use skeleton loading states rather than blank screens.

Use toast notifications for:

Pickup created
Pickup cancelled
Profile updated
E-waste added
Centre verified

EMPTY STATES

Create meaningful empty states.

Example:

No pickups:

"No pickups yet"

"Your responsible recycling journey starts here."

Button:

Request Your First Pickup

No e-waste:

"No electronics registered"

Button:

Add E-Waste

ERROR STATES

Create proper error UI.

Example:

"Something went wrong"

"Unable to load collection centres. Please try again."

Button:

Retry

ACCESSIBILITY

Use:

Semantic HTML

Accessible buttons

Keyboard navigation

Proper labels

ARIA attributes where required

Good color contrast

Visible focus states

IMPORTANT IMPLEMENTATION RULES

Build reusable React components instead of duplicating UI.

Use React Router for navigation.

Create a centralized mock-data layer so the backend can later be connected without redesigning the frontend.

Keep API/service functions separated from UI components.

Use realistic mock data for citizens, centres, pickups and recycling records.

Every button should either perform a realistic mock action or navigate somewhere meaningful.

Forms should have validation.

Create loading, error and empty states.

Maintain the same design language throughout every page.

The application should feel like a real production product.

Do not use lorem ipsum.

Do not create unnecessary pages that aren't part of the described product.

Make the citizen dashboard the primary polished experience.

Make the pickup tracking timeline visually impressive.

Make the EcoAssist page feel like an integrated AI feature rather than a generic chatbot.

Keep the code modular so a Node.js/Express/MongoDB backend can be connected later.

FINAL PRODUCT EXPERIENCE

The primary user journey should be:

Landing Page
→ Register
→ Dashboard
→ Add E-Waste
→ AI identifies item
→ Request Pickup
→ Choose Centre
→ Schedule Pickup
→ Track Pickup
→ Collection
→ Recycling
→ View Environmental Impact
→ Earn Eco Points

The UI should make this journey obvious and frictionless.

The final result should look like a modern sustainability-tech startup product, combining the visual quality of a premium SaaS dashboard with the friendliness of an environmental platform.

Prioritize visual polish, usability, consistency, responsive behavior, reusable components and a clear end-to-end user journey.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b1afa667-d312-4071-b541-96a552f78131).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

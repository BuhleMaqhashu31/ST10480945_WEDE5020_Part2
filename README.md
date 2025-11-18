Overview:
The title of this project is 'Polish & Plait Beauty Bar Website'.
Buhle Maqhashu is responsible for this project.
We were tasked to design a functional and visually appealing website that will help a business to get more engagement. I chose to create a fictional business called Polish & Plait Beauty Bar.
The goals and objectives of this webiste are to nsure that people around Port Elizabeth can reach us online to view our work, contact us, book appointments, and leave reviews.
The key features and functionality of the webiste include service listings, mobile-friendly design, and online booking.
The timeline and milestones of the business include the folowing:
•	February 2024 
The doors of Polish & Plait Beauty Bar were open to the public.
•	May 2024
Business got registered with CPIC.
Business got legally established.
•	November 2024
Business was growing and this meant we needed additional support.
We officially hired our first employee.
HTML and JavaScript were used.
**References:
Expert Panel (2023). 11 Key Performance Indicators Your Business Should Be Tracking (And Why). [Online]. Available from: https://www.forbes.com/councils/theyec/2023/06/29/11-key-performance-indicators-your-business-should-be-tracking-and-why/ [Accessed on 14 August 2025].
Remi (2024). 10 Salon KPIs You Should Track and How to Calculate Them. [Online]. Available from: https://sharpsheets.io/blog/salon-kpis-key-performance-indicators/ [Accessed on 8 August 2025].
**

Part 2 Summary:
Base Styles
- Implemented a CSS reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`).
- Added `:root` variables for colorswhich are shades of pink, font sizes, spacing, and border radius.
- Set body defaults are `Arial, sans-serif`, base font size `1rem`, line-height `1.6`, text color, and background color.
Typography
- Defined heading hierarchy:
  - `h1` uses `--font-size-xxl` (2.5rem by default).
  - `h2` uses `--font-size-xl` (2rem).
  - `h3` uses `--font-size-lg` (1.5rem).
- Paragraphs and list items use medium font size (`1rem`).
- Responsive adjustments:
  - At `600px+`, header `h1` increases in size.
  - At `1200px+`, `h1` grows to `3rem` and `h2` to `2.25rem`.
Layout
- Main container uses **CSS Grid** with a max width of `1200px` and consistent gaps.
- **Mobile (default):** single-column stacked layout.
- **Desktop (900px+):** switches to a two-column grid (`2fr 1fr`).
- Header and navigation:
  - Centered by default.
  - At `900px+`, header uses Flexbox for logo on the left and nav on the right.
Responsiveness and Interactivity
- Buttons and links have hover and focus-visible states for accessibility.
- Images are fully responsive (`max-width: 100%`, height auto).
- Services images are centered and shrink slightly for small screens.
Breakpoints Summary
- **≤600px (Mobile):**  
  - Nav links stacked vertically.  
  - Buttons expand to full width.  
  - Services images reduced to 90% width.  
- **600px+:**  
  - Increased body padding.  
  - Larger `h1` font size in header.  
- **900px+:**  
  - Two-column grid layout.  
  - Header switches to flexbox for better desktop nav alignment.  
- **1200px+:**  
  - Headings scale up (`h1` = 3rem, `h2` = 2.25rem).
  - 
Screenshots
<img width="1366" height="768" alt="Desktop screenshot" src="https://github.com/user-attachments/assets/1a760933-91a0-48f9-b3a7-a28df843c7c1" />
This is how the website looks on a desktop.

<img width="1366" height="768" alt="iPad mini screenshot" src="https://github.com/user-attachments/assets/82925d13-9b7c-48df-910f-1b5b4e0cf1a9" />
This is how the website looks on an iPad mini.

<img width="1366" height="768" alt="Samsung Galaxy S8+ screenshot" src="https://github.com/user-attachments/assets/75583ed7-b2a6-40b5-8aab-4339842ff44d" />
This is how the website looks on a Samsung Galaxy S8+.

Changelog
18-09-2025 Reviews left by customers are able to be saved and they can see them when opening the website.
(Commit 8f75c01ce3434aa5022547700cb1d8b558d6a25e)
18-09-2025 Merged branch of main after I created the style.css file.
(Commit b5201776fa1429d5bace0a1785b51ca12c4e5fce)
24-09-2025 Added different sizes of all the images so they can be responsive when viewed on different devices.
(Commit 8ac92b691ef753af0c58b84bb189fbc723603415)
25-09-2025 Updated css so that it includes typography, layout, responsiveness, and breakpoints.
(Commit 99203b52f76fc70631e14314873434a2356fa168)
25-09-2025 Fixed the srcset on the 'Services' page.
(Commit 4be7fe8acbb44cd9bcf26f548565cfbdf6569da3)
25-09-2025 Fixed the logo on the 'Index' page so that it can be adaptive.
(Commit 8c5b8136256dcec1c8cf71fab55b89b2c1df29b5)

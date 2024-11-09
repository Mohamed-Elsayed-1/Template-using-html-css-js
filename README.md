# Interactive Website Project

This project is an interactive website built with HTML, CSS, and JavaScript, featuring smooth navigation, a dynamic hero image, theme customization, and an animated skills section. The code includes local storage usage, enabling personalized settings like background image and color scheme that persist across sessions.

## Features

- **Dynamic Hero Section**: The hero section background image changes automatically or can be set by the user.
- **Responsive Navigation**: A toggle menu enables smooth navigation across different sections, adapting for both desktop and mobile.
- **Customizable Settings**: Users can adjust the main theme color and toggle background image rotation.
- **Skills Section Animation**: Skills progress bars animate based on scroll position, showing different skill levels.
- **Gallery Popup**: Images in the gallery open in a popup with an overlay for focused viewing.
- **Smooth Scrolling Navigation**: Clicking navigation bullets smoothly scrolls to the relevant section.

## Technologies Used

- **HTML**: Structure of the website and layout.
- **CSS**: Styling with responsive design, animations, and transitions.
- **JavaScript**: Adds interactivity, handles events, manages local storage, and dynamically updates content.

## Code Highlights

- **Dynamic Background**: The `changeHeroImage` function randomly sets a new background image every few seconds.
- **Scroll Events**: The header changes color upon scrolling, and progress bars in the skills section animate when scrolled into view.
- **Local Storage for Customization**: The chosen theme color and background settings are saved in `localStorage` so they persist across visits.
- **Popup Gallery**: Clicking on a gallery image creates an overlay with a larger view and a close button.
- **Smooth Scrolling**: Clicking navigation bullets scrolls smoothly to sections using `scrollIntoView`.

## Installation

To use or modify this project:

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohamed-Elsayed-1/Template-using-html-css-js.git

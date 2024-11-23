
# Finmetrics Dashboard

Finmetrics Dashboard is a dynamic and responsive web application designed for managing and visualizing key business metrics. It includes features like a customizable sidebar, user-friendly navigation, and a confirmation modal for user actions like logging out.

# Features
## 1. Dynamic Sidebar Styling
The sidebar's background color and styling can be dynamically updated using imported color constants.
Supports responsive design to adjust to various screen sizes, including mobile devices.
Smooth transitions for toggle states (e.g., opening and closing).
## 2. Top Navigation Bar
Displays a user section with a profile icon and username.
Includes a logout button that triggers a confirmation modal.
Responsive layout with mobile-friendly adjustments.
## 3. Logout Confirmation Modal
Fully overlaying modal to confirm user logout actions.
Designed using React and styled with custom CSS.
Implemented using React Portals to ensure it renders above other UI elements.
Accessible with clear buttons for confirmation (Yes) and cancellation (Cancel).

## 4. Key Analytics Pages
# User Acquisition
Displays analytics and key insights into user growth over time.
Designed to showcase dynamic charts and graphs.

# Transaction Volume

Provides transaction analytics, tracking volume over defined periods.
Visualized using customizable chart components.

# Merchant Tracker
Tracks merchant activities and performance.
Includes data visualization tools for clear insights.

# Technologies Used
- **React.js**: Component-based architecture for building UI.
- **CSS**: Styling with support for responsive layouts.
- **React Icons**: For adding icons like user profile and logout icons.
- **TypeScript**: Ensuring type safety across components.
- **React Portals**: For rendering modals at the root level of the DOM.
- **Material UI**: third part library.

# Component Overview
## 1. TopNav Component
Handles the top navigation bar with the following:

* A logo section that toggles the sidebar.
* A user section showing the username and logout button.
tsx

 ```bash 
 import { FaUserCircle } from 'react-icons/fa';
 ```

## 2. Sidebar Component
A dynamically styled sidebar with:

* Responsive design for desktop and mobile.
* Navigation links with hover and active states.
## 3. LogoutModal Component
A reusable modal with the following:

* Overlay with a semi-transparent background.
* Two buttons: Cancel and Yes (Confirm Logout).
* Fully responsive and rendered using ReactDOM.createPortal.
tsx

## 4. Pages
* User Acquisition: Visualizes user growth data with interactive charts.
* Transaction Volume: Tracks and displays transaction trends.
* Merchant Tracker: Monitors merchant metrics and activity.

## Folder Structure

```plaintext
src/
├── components/          # Reusable UI components
│   ├── topNav/          # Top navigation bar
│   │   ├── TopNav.tsx
│   │   ├── topNav.css
│   ├── sidebar/         # Sidebar for navigation
│   │   ├── Sidebar.tsx
│   │   ├── sidebar.css
│   ├── logoutModal/     # Logout confirmation modal
│   │   ├── LogoutModal.tsx
│   │   ├── logoutModal.css
├── constants/           # Global constants like themes
│   ├── themes.ts
├── pages/               # Application pages
│   ├── userAcquisition/ # User Acquisition analytics
│   │   ├── UserAcquisition.tsx
│   │   ├── userAcquisition.css
│   ├── transactionVolume/ # Transaction Volume analytics
│   │   ├── TransactionVolume.tsx
│   │   ├── transactionVolume.css
│   ├── merchantTracker/ # Merchant Tracker analytics
│   │   ├── MerchantTracker.tsx
│   │   ├── merchantTracker.css
│   ├── dashboard/       # Main dashboard
│   │   ├── Dashboard.tsx
```
## Getting Started
# 1. Prerequisites
Node.js: Ensure you have Node.js installed (>= 14.x).
React: A basic understanding of React is recommended.
# 2. Installation
Clone the repository:

```bash
git clone https://github.com/mavine4512/FinMatrics_Dashboard.git
```

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn start
``` 
# 3. Usage
* Navigate through the sidebar to access different sections.
* Click on the Logout button to test the modal functionality.
Customization

## Responsive Design
* The application is fully responsive and adapts seamlessly to various screen sizes.
* Media Queries are used in CSS for fine-tuning layouts on devices.

## Contributions
Contributions are welcome! Feel free to submit issues or pull requests.

## Author

- [Mavine Naaman](https://github.com/mavine4512)
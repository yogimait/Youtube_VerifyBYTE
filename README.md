# YouTube Subscription Verification

This project implements a YouTube subscription verification system using Vite and React. It checks if a user is subscribed to the B.Y.T.E. YouTube channel and provides access to exclusive content for subscribers.

## Features

- OAuth authentication with YouTube
- Subscription status verification
- Private route for subscriber-only content
- User-friendly messages for subscription status
- Environment variable configuration for sensitive data

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- YouTube API credentials (Client ID and Client Secret)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yogimait/Youtube_VerifyBYTE
   cd Youtube_VerifyBYTE
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your YouTube API credentials:
   ```
   VITE_YOUTUBE_CLIENT_ID=your_client_id
   VITE_YOUTUBE_CLIENT_SECRET=your_client_secret
   VITE_BYTE_CHANNEL_ID=UCgIzTPYitha6idOdrr7M8sQ
   ```

## How to Get YouTube API Client ID and Secret Key

1. Go to the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project or select an existing one.
3. In the sidebar, click on "Credentials".
4. Click the "Create Credentials" button and select "OAuth client ID".
5. If you haven't configured the OAuth consent screen, you'll be prompted to do so. Fill in the required information.
6. For the application type, choose "Web application".
7. Add authorized JavaScript origins (e.g., `http://localhost:5173` for development).
8. Add authorized redirect URIs (e.g., `http://localhost:5173/auth/youtube/callback`).
9. Click "Create".
10. You'll be presented with your Client ID and Client Secret. Use these in your `.env` file.
11. In the Google Developers Console, go to the "Library" section.
12. Search for "YouTube Data API v3" and enable it for your project.
13. And you either leave the project under "TESTING" on the OAuth consent screen and add the Email to run the code OR Publish this project and it will accept any email.

Remember to keep your Client Secret confidential and never commit it to version control.

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

3. Click the "Login with YouTube" button to authenticate

4. The app will check your subscription status and redirect you accordingly

## Building for Production

To create a production build, run:

```
npm run build
```

The built files will be in the `dist` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

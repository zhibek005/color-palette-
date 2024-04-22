Color Palette Explorer

Description

The Color Palette Explorer is a React-based web application designed to help users create and customize color palettes. It features real-time color adjustments through a visual interface, allowing users to experiment with different color schemes such as analogous, triadic, and tetradic configurations. The project utilizes react-color for the color picker component and chroma-js for color manipulation.

Features

Dynamic Color Picker: Adjust color using an intuitive interface.
Color Scheme Generation: Generate color schemes based on the current selected color.
Favorite Colors: Save and review your favorite color schemes.
CSS Export: Export color schemes directly to CSS format.
Responsive Design: Accessible on both desktop and mobile devices.
Technology Stack

React: Used for building the user interface.
React Router: Manages navigation within the application.
Chroma-js: A color library used for various color conversions and calculations.
React-color: A collection of color pickers for React.

/color-palette-explorer
|-- /src
    |-- /components
        |-- ColorPicker.js       # Component for color selection
        |-- ColorPalette.js      # Displays color palette
        |-- FavoritesPage.js     # Page to display saved favorite colors
    |-- /utils
        |-- colorUtils.js        # Utility functions for color scheme calculations
    |-- App.js                  # Main React application file
    |-- index.js                # Entry point for React application
|-- /public
    |-- index.html              # Main HTML file
|-- .gitignore                  # Specifies intentionally untracked files to ignore
|-- package.json                # NPM package manager file
|-- README.md                   # The file that you are currently reading

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Usage

After launching the app, you will be greeted with a start screen. Click the "Start" button to begin exploring color schemes:

Use the color picker to select a color.
View automatically generated color schemes based on your selection.
Click the "Add to Favorites" icon to save a color to your favorites.
Access your favorite colors by clicking the "To Favorites" button.
Export the current palette to CSS by clicking the "Export as CSS" button.
Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License

MIT

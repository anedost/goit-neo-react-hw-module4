# Image Search App

This application allows users to search for images using a keyword. It uses the Unsplash image service to fetch images based on the search term provided by the user. The app is built with React hooks and handles loading, error states, and displays images in a gallery format.

## Components

### 1. **Header with Search Form**
The `<SearchBar>` component contains a search input field. It accepts a single prop, `onSubmit`, which is a function used to handle the form submission and pass the value of the input field to the parent component.

### 2. **Image Gallery**
The `<ImageGallery>` component displays a list of image cards. Each image is fetched from the Unsplash service based on the search query entered by the user.

### 3. **Image Card**
The `<ImageCard>` component represents an individual image within the gallery. Each card displays an image with a title or other relevant information.

### 4. **Loading Indicator**
The `<Loader>` component is shown under the gallery while the images are being fetched from the API. It provides a visual cue to the user that the images are still loading.

### 5. **Error Message**
The `<ErrorMessage>` component is displayed instead of the image gallery if there is an error with the HTTP request. It simply renders a text message to inform the user that an error occurred.

### 6. **Load More Button**
The `<LoadMoreBtn>` component displays a "Load More" button. When clicked, it loads the next batch of images and appends them to the existing ones in the gallery. The button is visible only if there are images loaded and the array is not empty.

### 7. **Image Modal**
The `<ImageModal>` component is rendered inside the `<App>` component. It receives the necessary data and functions as props from the parent component and displays the full-size image or additional details when an image is clicked.

## Features

- **Search for Images**: Users can enter a keyword in the search bar to find relevant images.
- **Gallery Display**: Images are displayed in a gallery format, with each image inside a card.
- **Loading State**: A loading spinner or indicator appears while the images are being fetched.
- **Error Handling**: If the HTTP request fails, an error message is displayed.
- **Load More Images**: A button allows the user to load more images, which are appended to the existing gallery.
- **Modal View**: Clicking on an image opens it in a modal, showing a larger view or additional details.

## Topic Number
**Topic 8: Hooks. Homework Assignment**

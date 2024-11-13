# File Zipping WebUI
This is a simple web application that allows users to upload multiple files of any type and download them as a single .zip file.

The application is built using Python and Flask.

## Features

- Multi-File Upload: Upload any number and type of files to be zipped together.
- File Preview: View a list of uploaded files before creating the .zip file.
- One-Click Zipping: Download a .zip archive containing all uploaded files with a single click.
- Theme Toggle: Switch between light and dark themes. Your preferred theme is saved in the browser's local storage, so it loads automatically the next time you visit.

## Requirements
- Python 3.x
- Flask

## Installation

1. **Clone this repository:**
```
git clone https://github.com/yourusername/file-zipping-webui.git
cd file-zipping-webui
```
2. **Install required packages:**
```
pip install Flask
```
## Usage

1. Run the application:

```
python app.py
```

2. **Access the application:** 
Open a browser and navigate to http://localhost:5000 (or replace localhost with your server IP if hosting remotely).

3. **Upload Files:** Use the "Upload" button or drag and drop files to upload them to the server.

4. **Create a Zip File:** Click the "Zip" button to download a single .zip file with all uploaded files inside.

## Project Structure
- ```app.py```: Main application file that contains the Flask server and zipping logic.
- ```templates/```: Folder containing the HTML template for the web UI.
- ```static/```: Folder for static assets, including the light and dark theme CSS files and the js file.
- ```uploads/```: Folder that keeps the temporary upload files until they have been zipped.
- ```zipped/```: Folder that keeps the temporary zipped file until the user has downloaded it.


## Contributions
Contributions are welcome! Please open an issue or submit a pull request with your enhancements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
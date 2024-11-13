from flask import Flask, request, jsonify, send_from_directory, render_template
import os
import zipfile

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads/'
ZIP_FOLDER = 'zipped/'

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
if not os.path.exists(ZIP_FOLDER):
    os.makedirs(ZIP_FOLDER)

# Route to serve the HTML page
@app.route('/')
def index():
    return render_template('index.html')  # Renders the HTML file in the templates directory

# Zipping route (Only ZIP format now)
@app.route('/zip-files', methods=['POST'])
def zip_files():
    files = request.files.getlist('files')

    if not files:
        return jsonify({'error': 'No files uploaded'}), 400
    
    # Save uploaded files
    file_paths = []
    for file in files:
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(file_path)
        file_paths.append(file_path)

    # Output zip file name
    zip_filename = "zipped_files.zip"
    output_zip = os.path.join(ZIP_FOLDER, zip_filename)

    # Create the zip file
    with zipfile.ZipFile(output_zip, 'w') as zipf:
        for file_path in file_paths:
            zipf.write(file_path, os.path.basename(file_path))

    # Clean up uploaded files after zipping
    for file_path in file_paths:
        os.remove(file_path)

    # Return the file path to the frontend for download
    return jsonify({'filepath': f'/download/{os.path.basename(output_zip)}'})

# Serve the zip file
@app.route('/download/<filename>')
def download_file(filename):
    return send_from_directory(ZIP_FOLDER, filename)

if __name__ == '__main__':
    app.run(debug=True)

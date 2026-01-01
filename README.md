# File Metadata Microservice

For my solution to the FreeCodeCamp File Metadata project I utilized Node.js, Express, and Multer for handling file uploads. For simply reading and returning info on the selected file, I chose to implement Multer's `memoryStorage()` option to store the file in memory as a buffer object instead of persisting it in a database. The `/api/fileanalyse` route first validates that there is actually a file selected, then builds a response object containing:
- The original file name
- The mimetype of the file
- The size of the file (in bits)

The boilerplate code for this project which my solution is built on top of can be found here: [FCC File Metadata project boilerplate](https://github.com/freeCodeCamp/boilerplate-project-filemetadata/)

## Test cases
1. ✅ You can submit a form that includes a file upload.
2. ✅ The form file input field has the `name` attribute set to `upfile`.
3. ✅ When you submit a file, you receive the file `name`, `type`, and `size` in bytes within the JSON response.

## Usage
### Endpoint:
```
`POST /api/fileanalyse`
```
### Example Response:
```json
{
  "name": "Screenshot 2025-06-30 215929.png",
  "type": "image/png",
  "size": 97803
}
```

// Bucket API utility functions for file upload and deletion
const BUCKET_API_URL = 'https://bucket.umangsailor.com';
const BUCKET_NAME = 'portfolio';
const FOLDER_NAME = 'projects';

/**
 * Upload files to the bucket API
 * @param {File[]} files - Array of File objects to upload (max 20 files)
 * @returns {Promise<Array<{name: string, link: string}>>} Promise with uploaded file URLs
 */
export async function uploadFilesToBucket(files) {
  if (files.length === 0) {
    throw new Error('No files provided for upload');
  }

  if (files.length > 20) {
    throw new Error('Maximum 20 files allowed per upload');
  }

  const formData = new FormData();
  formData.append('bucket', BUCKET_NAME);
  formData.append('folder', FOLDER_NAME);

  files.forEach((file) => {
    formData.append('files', file);
  });

  try {
    const response = await fetch(`${BUCKET_API_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();

    // Transform the new response format to match the expected format
    return result.files.map((fileInfo) => ({
      name: fileInfo.name,
      link: fileInfo.url,
    }));
  } catch (error) {
    console.error('Bucket upload error:', error);
    throw new Error(`Failed to upload files: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Delete files from the bucket API
 * @param {string[]} fileNames - Array of file names to delete
 * @returns {Promise<void>} Promise indicating success/failure
 */
export async function deleteFilesFromBucket(fileNames) {
  if (fileNames.length === 0) {
    return;
  }

  const deleteRequest = {
    bucket: BUCKET_NAME,
    folder: FOLDER_NAME,
    names: fileNames,
  };

  try {
    const response = await fetch(`${BUCKET_API_URL}/files`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(deleteRequest),
    });

    if (!response.ok) {
      throw new Error(`Delete failed: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error('Bucket delete error:', error);
    throw new Error(`Failed to delete files: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Extract file name from bucket URL for deletion
 * @param {string} url - Full bucket URL
 * @returns {string} File name for deletion
 */
export function extractFileNameFromUrl(url) {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}

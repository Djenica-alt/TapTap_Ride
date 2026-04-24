// Utility functions for managing user profile pictures

export const saveProfilePicture = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        localStorage.setItem('userProfilePicture', reader.result);
        resolve(reader.result);
      } catch (error) {
        reject(new Error('Failed to save profile picture'));
      }
    };
    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };
    reader.readAsDataURL(file);
  });
};

export const getProfilePicture = () => {
  try {
    return localStorage.getItem('userProfilePicture');
  } catch (error) {
    console.error('Failed to retrieve profile picture:', error);
    return null;
  }
};

export const removeProfilePicture = () => {
  try {
    localStorage.removeItem('userProfilePicture');
  } catch (error) {
    console.error('Failed to remove profile picture:', error);
  }
};

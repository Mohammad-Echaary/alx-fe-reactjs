import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com";

// Function to fetch GitHub user data
export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`, // Optional, only needed if API key is used
      },
    });
    return response.data; // Returns the user data
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    throw error; // Propagate error for handling
  }
};

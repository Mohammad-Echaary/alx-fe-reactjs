import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  let query = username ? `${username}+in:login` : "";

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data; // Return the user data
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

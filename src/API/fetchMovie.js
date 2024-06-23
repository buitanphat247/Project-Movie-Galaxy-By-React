import axios from "axios";

export const getDetail_Movie_Tv = async ({ url }) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/${url}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzRmOWRhZTViZTRjZGJlNGZjZGU3YzAyMjM4ZDA5NyIsInN1YiI6IjY0ZDg3ZTY1YjZjMjY0MTE1NWYxY2RhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VQQrURB0BKTjZBbt8nXrMZ5bRYaibMrouEyFEDEiIns",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw error for error handling in fetchData
  }
};

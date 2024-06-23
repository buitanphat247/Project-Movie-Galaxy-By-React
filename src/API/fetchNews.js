import axios from "axios";

export const getNews = async () => {
  const options = {
    method: "GET",
    url: "https://eventregistry.org/api/v1/article/getArticles",
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      action: "getArticles",
      keyword: "euro",
      articlesPage: 1,
      articlesCount: 24,
      resultType: "articles",
      dataType: ["news", "pr"],
      apiKey: "625381a9-de2f-41ca-8fd1-bf592e02b873",
      forceMaxDataTimeWindow: 31,
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

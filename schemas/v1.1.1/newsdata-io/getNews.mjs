export const schema = {
    name: "CryptoNews",
    description: "Fetches general or topic-specific cryptocurrency news articles from NewsData.io.",
    version: "1.0.0",
    flowMCP: "1.0.0",
    root: "https://newsdata.io/api/1/crypto",
    requiredServerParams: ["NEWSDATA_API_KEY"],
    headers: {
      apikey: "{{NEWSDATA_API_KEY}}"
    },
    routes: {
      getLatestNewsdata: {
        requestMethod: "GET",
        description: "Fetch the latest general crypto news from NewsData.io.",
        route: "/",
        parameters: [],
        tests: [
          { _description: "Get latest general crypto news" }
        ],
        modifiers: [
          { phase: "post", handlerName: "formatNewsList" }
        ]
      },
      getCryptoNewsdata: {
        requestMethod: "GET",
        description: "Fetch topic-specific crypto news for a given query and max number of pages.",
        route: "/",
        parameters: [
          {
            position: { key: "query", value: "{{USER_PARAM}}", location: "query" },
            z: { primitive: "string()", options: ["min(1)"] }
          },
          {
            position: { key: "max_pages", value: "{{USER_PARAM}}", location: "query" },
            z: { primitive: "number()", options: ["min(1)", "max(5)", "default(1)"] }
          }
        ],
        tests: [
          {
            _description: "Fetch Bitcoin news from 2 pages",
            query: "bitcoin",
            max_pages: 2
          }
        ],
        modifiers: [
          { phase: "post", handlerName: "formatNewsList" }
        ]
      }
    },
    handlers: {
      formatNewsList: async ({ struct, payload }) => {
        struct.news = payload?.content?.[0]?.text || "No data.";
        return { struct, payload };
      }
    }
  };
  
const selection = {
    fedRateCuts2025: 'how-many-fed-rate-cuts-in-2025'
}


const schema = {
    namespace: "polymarket",
    name: "Fed Rate Cuts 2025",
    description: "Zeigt Marktprognosen für Fed-Zinssenkungen im Jahr 2025.",
    docs: ["https://polymarket.com"],
    tags: [],
    flowMCP: "1.2.0",
    root: "https://gamma-api.polymarket.com",
    requiredServerParams: [],
    headers: {},
    routes: {
        searchBySlug: {
            requestMethod: "GET",
            description: "Get market data for Fed rate cuts in 2025 by slug",
            route: "/events/slug/:slug",
            parameters: [
                { position: { key: "slug", value: "{{USER_PARAM}}", location: "insert" }, z: { primitive: `enum(${Object.keys(selection)})`, options: [] } }
            ],
            modifiers: [
                { phase: "pre", handlerName: "mapSelectionToSlug" },
                { phase: "post", handlerName: "extractOutcomePercents" }
            ],
            tests: [
                { _description: "Test Fed Cut Market 2025", slug: "fedRateCuts2025" }
            ]
        }
    },
    handlers: {
        mapSelectionToSlug: async ( { struct, payload, userParams } ) => {
            const key = userParams.slug;
            if( selection[ key ] ) {
                payload['url'] = payload.url.replace( key, selection[ key ] )
            } else {
                struct.status = false
                struct.messages.push( `Selection not found.` )
            }
            return { struct, payload }
        },
        extractOutcomePercents: async ({ struct, payload }) => {
            if( !struct.data || !struct.data.markets ) {
                struct.status = false
                struct.messages.push( `Error` )
                return { struct, payload }
            }

            struct['data'] = struct['data']?.markets
                .map( ( market ) => {
                    const prices = JSON.parse(market.outcomePrices || "[]")
                    return {
                        question: market.question,
                        outcomes: JSON.parse(market.outcomes || "[]"),
                        prices: prices.map(p => Math.round(parseFloat(p) * 100)),
                        lastTrade: Math.round(parseFloat(market.lastTradePrice || "0") * 100)
                    }
                } )

            return { struct, payload };
        }
    }
};


export { schema };

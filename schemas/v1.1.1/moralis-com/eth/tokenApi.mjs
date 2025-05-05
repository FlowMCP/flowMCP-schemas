const schema = {
    'name': 'Moralis tokenApi API',
    'description': 'Moralis tokenApi API',
    'version': '1.0.0',
    'flowMCP': '1.0.0',
    'root': 'https://deep-index.moralis.io/api/v2.2',
    'requiredServerParams': [
        'MORALIS_API_KEY'
    ],
    'headers': {
        "X-API-Key": "{{MORALIS_API_KEY}}"
    },
    'routes': {	
		"/pairs/:address/ohlcv": 		{
		    "requestMethod": "GET",
		    "description": "Get the OHLCV candle stick by using pair address",
		    "route": "/pairs/:address/ohlcv",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"timeframe","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(1s,10s,30s,1min,5min,10min,30min,1h,4h,12h,1d,1w,1M)"]}},
				{"position":{"key":"currency","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(usd,native)"]}},
				{"position":{"key":"fromDate","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":[]}},
				{"position":{"key":"toDate","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":[]}},
				{"position":{"key":"limit","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"cursor","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get the OHLCV candle stick by using pair address",
		            "chain": "eth",
		            "timeframe": "1h",
		            "currency": "usd",
		            "fromDate": "2025-01-01T10:00:00.000",
		            "toDate": "2025-01-02T10:00:00.000",
		            "address": "0xa43fe16908251ee70ef74718545e4fe6c5ccec9f"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/erc20/:address/price": 		{
		    "requestMethod": "GET",
		    "description": "Get the token price denominated in the blockchain's native token and USD. View supported exchanges here",
		    "route": "/erc20/:address/price",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,polygon,0x89,bsc,0x38,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,chiliz,0x15b38,base,0x2105,optimism,0xa,linea,0xe708,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,ronin,0x7e4,lisk,0x46f,pulse,0x171)"]}},
				{"position":{"key":"include","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()","enum(percent_change)"]}},
				{"position":{"key":"exchange","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()","enum(uniswapv2,uniswapv3,sushiswapv2,pancakeswapv1,pancakeswapv2,pancakeswapv3,quickswap,quickswapv2,traderjoe,pangolin,spookyswap,vvs,mm finance,crodex,camelotv2)"]}},
				{"position":{"key":"to_block","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"max_token_inactivity","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"min_pair_side_liquidity_usd","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get the token price denominated in the blockchain's native token and USD.",
		            "chain": "eth",
		            "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/:pair_address/reserves": 		{
		    "requestMethod": "GET",
		    "description": "Get the liquidity reserves for a given pair address. Only Uniswap V2 based exchanges supported at the moment.",
		    "route": "/:pair_address/reserves",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,polygon,0x89,bsc,0x38,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,chiliz,0x15b38,base,0x2105,optimism,0xa,linea,0xe708,moonbeam,0x504,moonriver,0x505,moonbase,0x507)"]}},
				{"position":{"key":"to_block","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"to_date","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"pair_address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get the liquidity reserves for a given pair address.",
		            "chain": "eth",
		            "pair_address": "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/pairs/:address/snipers": 		{
		    "requestMethod": "GET",
		    "description": "Get all snipers (wallets that quickly buy and sell tokens) for a specific token pair address.",
		    "route": "/pairs/:address/snipers",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,polygon,0x89,bsc,0x38,avalanche,0xa86a,fantom,0xfa,arbitrum,0xa4b1,gnosis,0x64,base,0x2105,optimism,0xa,linea,0xe708,ronin,0x7e4,pulse,0x171)"]}},
				{"position":{"key":"blocksAfterCreation","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get all snipers (wallets that quickly buy and sell tokens) for a specific token pair address.",
		            "chain": "eth",
		            "address": "0xa3c2076eb97d573cc8842f1db1ecdf7b6f77ba27"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/pairs/:address/swaps": 		{
		    "requestMethod": "GET",
		    "description": "Get all swap related transactions (buy, sell, add liquidity & remove liquidity)",
		    "route": "/pairs/:address/swaps",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"cursor","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"limit","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"fromBlock","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"toBlock","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"fromDate","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"toDate","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"order","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()","enum(ASC,DESC)"]}},
				{"position":{"key":"transactionTypes","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get all swap related transactions (buy, sell, add liquidity & remove liquidity)",
		            "chain": "eth",
		            "address": "0xa43fe16908251ee70ef74718545e4fe6c5ccec9f"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/wallets/:address/swaps": 		{
		    "requestMethod": "GET",
		    "description": "Get all swap related transactions (buy, sell)",
		    "route": "/wallets/:address/swaps",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"cursor","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"limit","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"fromBlock","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"toBlock","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"fromDate","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"toDate","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"order","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()","enum(ASC,DESC)"]}},
				{"position":{"key":"transactionTypes","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get all swap related transactions (buy, sell)",
		            "chain": "eth",
		            "address": "0x6982508145454ce325ddbe47a25d4ec3d2311933"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/tokens/:address/analytics": 		{
		    "requestMethod": "GET",
		    "description": "Get analytics for a token by token address",
		    "route": "/tokens/:address/analytics",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,polygon,0x89,bsc,0x38,avalanche,0xa86a,fantom,0xfa,arbitrum,0xa4b1,gnosis,0x64,base,0x2105,optimism,0xa,linea,0xe708,moonbeam,0x504,ronin,0x7e4,pulse,0x171)"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get analytics for a token by token address",
		            "chain": "eth",
		            "address": "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/erc20/:token_address/owners": 		{
		    "requestMethod": "GET",
		    "description": "Identify the major holders of an ERC20 token and understand their ownership percentages",
		    "route": "/erc20/:token_address/owners",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"limit","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"cursor","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"order","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()","enum(ASC,DESC)"]}},
				{"position":{"key":"token_address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get the major holders of an ERC20 token and understand their ownership percentages",
		            "chain": "eth",
		            "token_address": "0x6982508145454ce325ddbe47a25d4ec3d2311933"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/erc20/metadata/symbols": 		{
		    "requestMethod": "GET",
		    "description": "Get the metadata for a list of token symbols (name, symbol, decimals, logo).",
		    "route": "/erc20/metadata/symbols",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"symbols","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"array()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get the metadata for a list of token symbols.",
		            "chain": "eth",
		            "symbols": [
		                "LINK"
		            ]
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/erc20/metadata": 		{
		    "requestMethod": "GET",
		    "description": "Get the metadata for a given token contract address (name, symbol, decimals, logo).",
		    "route": "/erc20/metadata",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"addresses","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"array()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get the metadata for a given token contract address.",
		            "chain": "eth",
		            "addresses": [
		                "0x6982508145454ce325ddbe47a25d4ec3d2311933"
		            ]
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/erc20/:address/stats": 		{
		    "requestMethod": "GET",
		    "description": "Get the stats for a erc20 token",
		    "route": "/erc20/:address/stats",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get the stats for a erc20 token",
		            "chain": "eth",
		            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/erc20/:address/transfers": 		{
		    "requestMethod": "GET",
		    "description": "Get ERC20 token transactions from a contract ordered by block number in descending order.",
		    "route": "/erc20/:address/transfers",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"from_block","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"to_block","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"from_date","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"to_date","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"limit","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"order","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()","enum(ASC,DESC)"]}},
				{"position":{"key":"cursor","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get ERC20 token transactions from a contract ordered by block number in descending order.",
		            "chain": "eth",
		            "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/market-data/erc20s/top-tokens": 		{
		    "requestMethod": "GET",
		    "description": "Get the top ERC20 tokens by market cap",
		    "route": "/market-data/erc20s/top-tokens",
		    "parameters": [
		
			],
		    "tests": [
		        {
		            "_description": "Get the top ERC20 tokens by market cap"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/erc20/:address/top-gainers": 		{
		    "requestMethod": "GET",
		    "description": "Retrieves a list of the top profitable wallets for a specific ERC20 token.",
		    "route": "/erc20/:address/top-gainers",
		    "parameters": [
				{"position":{"key":"days","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,mainnet,0x1,matic,0x89,polygon,bsc,binance,0x38,fantom,ftm,0xfa,arbitrum,0xa4b1,optimism,0xa,pulsechain,0x171,base,0x2105,linea,0xe708)"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get the top profitable wallets for a specific ERC20 token.",
		            "chain": "eth",
		            "address": "0x6982508145454ce325ddbe47a25d4ec3d2311933"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/wallets/:address/approvals": 		{
		    "requestMethod": "GET",
		    "description": "Retrieve active ERC20 token approvals for the specified wallet address",
		    "route": "/wallets/:address/approvals",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"cursor","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"limit","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get active ERC20 token approvals for the specified wallet address",
		            "chain": "eth",
		            "address": "0xcB1C1FdE09f811B294172696404e88E658659905"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/wallets/:address/tokens": 		{
		    "requestMethod": "GET",
		    "description": "Get token balances for a specific wallet address and their token prices in USD.",
		    "route": "/wallets/:address/tokens",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"to_block","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"token_addresses","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"array()","options":["optional()"]}},
				{"position":{"key":"exclude_spam","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"boolean()","options":["optional()","enum(false,true)"]}},
				{"position":{"key":"exclude_unverified_contracts","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"boolean()","options":["optional()","enum(false,true)"]}},
				{"position":{"key":"cursor","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"limit","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"exclude_native","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"boolean()","options":["optional()","enum(false,true)"]}},
				{"position":{"key":"max_token_inactivity","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"min_pair_side_liquidity_usd","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get token balances for a specific wallet address and their token prices in USD.",
		            "chain": "eth",
		            "address": "0xcB1C1FdE09f811B294172696404e88E658659905"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/:address/erc20": 		{
		    "requestMethod": "GET",
		    "description": "Get token balances for a specific wallet address.",
		    "route": "/:address/erc20",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"to_block","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"token_addresses","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"array()","options":["optional()"]}},
				{"position":{"key":"exclude_spam","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"boolean()","options":["optional()","enum(false,true)"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get token balances for a specific wallet address.",
		            "chain": "eth",
		            "address": "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		},
	
		"/:address/erc20/transfers": 		{
		    "requestMethod": "GET",
		    "description": "Get ERC20 token transactions ordered by block number in descending order.",
		    "route": "/:address/erc20/transfers",
		    "parameters": [
				{"position":{"key":"chain","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["enum(eth,0x1,sepolia,0xaa36a7,holesky,0x4268,polygon,0x89,polygon amoy,0x13882,bsc,0x38,bsc testnet,0x61,avalanche,0xa86a,fantom,0xfa,palm,0x2a15c308d,cronos,0x19,arbitrum,0xa4b1,gnosis,0x64,gnosis testnet,0x27d8,chiliz,0x15b38,chiliz testnet,0x15b32,base,0x2105,base sepolia,0x14a34,optimism,0xa,linea,0xe708,linea sepolia,0xe705,moonbeam,0x504,moonriver,0x505,moonbase,0x507,flow,0x2eb,flow-testnet,0x221,ronin,0x7e4,ronin-testnet,0x7e5,lisk,0x46f,lisk-sepolia,0x106a,pulse,0x171)"]}},
				{"position":{"key":"contract_addresses","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"array()","options":["optional()"]}},
				{"position":{"key":"from_block","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"to_block","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"from_date","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"to_date","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"limit","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"number()","options":["optional()"]}},
				{"position":{"key":"order","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()","enum(ASC,DESC)"]}},
				{"position":{"key":"cursor","value":"{{USER_PARAM}}","location":"query"},"z":{"primitive":"string()","options":["optional()"]}},
				{"position":{"key":"address","value":"{{USER_PARAM}}","location":"insert"},"z":{"primitive":"string()","options":[]}}
			],
		    "tests": [
		        {
		            "_description": "Get ERC20 token transactions ordered by block number in descending order.",
		            "chain": "eth",
		            "address": "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326"
		        }
		    ],
		    "modifiers": [
		        {
		            "phase": "post",
		            "handlerName": "modifyResult"
		        }
		    ]
		}
	},
    'handlers': {
        'modifyResult': async( { struct, payload } ) => {
            return { struct, payload }
        }
    }
}
   

export { schema }
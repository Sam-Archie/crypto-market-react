
import bitcoinImage from "../../assets/images/Bitcoin.jpg";
import dogeCoinImage from "../../assets/images/Dogecoin.jpg";
import ethereumImage from "../../assets/images/Ethereum.jpg";
import binanceCoinImage from "../../assets/images/BinanceCoin.jpeg";
import tetherImage from "../../assets/images/Tether.jpg";

export const coinInfo = [
    {
        name: "Bitcoin",
        info: "Bitcoin (₿) is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009[14] when its implementation was released as open-source software. Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.",
        shortHand: "BTC",
        imagePath: bitcoinImage
    },
    {
        name: "Ethereum",
        info: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH) is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin.[1] Ethereum is the most actively used blockchain.Ethereum was proposed in 2013 by programmer Vitalik Buterin. Development was crowdfunded in 2014, and the network went live on 30 July 2015, with an initial supply of 72 million coins. The platform allows developers to build and operate decentralized applications that users can interact with. Decentralized finance (DeFi) applications provide a broad array of financial services without the need for typical financial intermediaries such as brokerages, exchanges, or banks, such as allowing cryptocurrency users to borrow against their holdings or lend them out for interest. Ethereum also allows for the creation and exchange of NFTs, which are non-interchangeable tokens that can be connected to digital works of art or other real-world items and sold as unique digital property. Additionally, many other cryptocurrencies operate as ERC-20 tokens on top of the Ethereum blockchain and have utilized it for initial coin offerings.",
        shortHand: "ETG",
        imagePath: ethereumImage
    },
    {
        name: "DogeCoin",
        info: "Dogecoin is a cryptocurrency created by software engineers Billy Markus and Jackson Palmer, who decided to create a payment system as a joke, making fun of the wild speculation in cryptocurrencies at the time. Dogecoin features the face of the Shiba Inu dog from the \"Doge\" meme as its logo and namesake. It was introduced on December 6, 2013, and quickly developed its own online community, reaching a market capitalization of US$85,314,347,523 on May 5, 2021. Dogecoin.com promotes the currency as the \"fun and friendly internet currency\", referencing its origins as a joke.",
        shortHand: "DOGE",
        imagePath: dogeCoinImage
    },
    {
        name: "Binance-Coin",
        info: "Binance is a Cayman Islands-domiciled cryptocurrency exchange that provides a platform for trading various cryptocurrencies founded in 2017. As of April 2021, Binance was the largest cryptocurrency exchange in the world in terms of trading volume.Binance was founded by Changpeng Zhao, commonly known as \"CZ\", a developer who had previously created high frequency trading software. Binance was initially based in China, but later moved its headquarters out of China due to China's increasing regulation of cryptocurrency.",
        shortHand: "BNB",
        imagePath: binanceCoinImage
    },
    {
        name: "Tether",
        info: "Tether is a controversial cryptocurrency with tokens issued by Tether Limited. It formerly falsely claimed that each token was backed by one United States dollar, but on 14 March 2019 changed the backing to include loans to affiliate companies. The Bitfinex exchange was the subject of a lawsuit by the New York Attorney General of using Tether's funds to cover up $850 million in funds missing since mid-2018. The investigation found that iFinex — the operator of Bitfinex and Tether made false statements about the backing of the Tether and about the movement of hundreds of millions of dollars between the two companies to cover up the truth about massive losses by Bitfinex. According to the New York Attorney General, \"Tether’s claims that its virtual currency was fully backed by U.S. dollars at all times was a lie\".",
        shortHand: "USDT",
        imagePath: tetherImage
    },
]

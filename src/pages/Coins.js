// import React from 'react'
// import CoinInfo from '../components/Coins/CoinInfo';

// const Coin = ( {crypto, search, name, image, symbol, price, priceChange } ) => {
//     return (
//         <div className="App" key={crypto}>
//         <h1>All Cryptocurrencies</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           onChange={(e) => {
//             search(e.target.value);
//           }}
//         />
//         <table>
//           <thead>
//             <tr>
//               <td>Rank</td>
//               <td>Name</td>
//               <td>Symbol</td>
//               <td>Market Cap</td>
//               <td>Price</td>
//               <td>Available Supply</td>
//               <td>Volume(24hrs)</td>
//             </tr>
//           </thead>
  
//           <tbody>
         
//                     <tr key={crypto.id}>
//                       <td className="rank">{crypto.rank}</td>
//                       <td className="logo">
//                         <a href={crypto.websiteUrl}>
//                           <img src={crypto.icon} alt="logo" width="30px" />
//                         </a>
                         
//   <p>{crypto.name}</p>
   
//                       </td>
//                       <td className="symbol">{crypto.symbol}</td>
//                       <td>₹{crypto.marketCap}</td>
//                       <td>₹{crypto.price.toFixed(2)}</td>
//                       <td>{crypto.availableSupply}</td>
//                       <td>{crypto.volume.toFixed(0)}</td>
//                     </tr>
                  
            
            
//           </tbody>
//         </table>
  
//       </div>
     
//     )
// }

// export default Coin;
import React from 'react';
import { Component } from 'react';
import CoinInfo from '../Coins/CoinInfo';

function Exchange (crypto) {
console.log(crypto)
      
        return (
            <div>
                          {/* {crypto.map((crypto) => ( 
              <div>
                <div>
                  <div
                    showArrow={false}
                    key={crypto.id}
                    header={`${crypto.name} ${(crypto.volume)} ${(crypto.symbol)}`}
    
                  >
                    {(`${crypto.rank}`)}
                  </div>
                </div>
                
              </div>
              ))} */}
            </div>
        );
    }
    

export default Exchange;
import React from 'react';


function Exchange(crypto) {
    console.log(crypto)

    return (
        <div>
                      {/* {crypto.map((crypto) => ( 
          <div>
            <div>
              <div
                showArrow={false}
                key={crypto.id}
                header={`${crypto.name} ${(crypto.volume)} ${(crypto.numberOfMarkets)}`}

              >
                {(`${crypto.description}`)}
              </div>
            </div>
            
          </div>
          ))} */}
        </div>
    );
}

export default Exchange;
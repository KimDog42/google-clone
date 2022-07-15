import React from 'react'
import CarbonNeutralLogo from './../Assetts/CarbonNeutralLogo';

function PageInfoBottom() {
  return (
    <div>
        <div className="bg-black text-white">
            <h2>United Kingdom</h2>
            <hr></hr>
            <div className="flex space-x-5">
            <h2>Advertising</h2>
            <h2>Business</h2>
            <h2>How Search Works</h2>

            <div className='itmes-center flex justify-center'>
                <CarbonNeutralLogo/>
            </div>
            </div>

        </div>
    </div>
  )
}

export default PageInfoBottom
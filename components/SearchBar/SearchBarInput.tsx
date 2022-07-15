import { SearchIcon } from '@heroicons/react/solid'
import React from 'react'
import { Grid, Input, Loading } from '@nextui-org/react';
import GoogleMicIcon from '../../Assetts/GoogleMicIcon';
import GoogleLogo from '../../Assetts/GoogleLogo';

function SearchBarInput() {
  return (
    <div className="flex justify-center pt-8 text-white">
        <Grid>
          <Input
            clearable
            bordered
            color="primary"
            contentLeft={<GoogleLogo/>}
            labelPlaceholder="Search With Google..."
            contentRight={<GoogleMicIcon/>}
          />
        </Grid>
    </div>
  )
}

export default SearchBarInput
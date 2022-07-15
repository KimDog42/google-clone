import { Collapse, Text } from "@nextui-org/react";
import React from 'react'

function AccountCollapseMenu() {
  return (
    <div className="w-80 font-bold items-center pt-20">
        <div>
            <h2>Looking for something else?</h2>
        </div>
         <Collapse.Group accordion={false}>
      <Collapse title="Search Google Account">
        <Text>
         Text Coming Soon...
        </Text>
      </Collapse>
      <Collapse title="See help options">
        <Text>
         Text Coming Soon...
        </Text>
      </Collapse>
      <Collapse title="Send feedback">
        <Text>
         Text Coming Soon...
        </Text>
      </Collapse>
      
    </Collapse.Group>
    </div>
  )
}

export default AccountCollapseMenu
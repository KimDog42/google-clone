import { UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { Dropdown, Avatar, Text, Grid, User, Input, Spacer } from "@nextui-org/react";

function Profile() {
  return (
    <div className="pr-4 pl-0">
        <div className="text-white pr-4">
        <Grid.Container className="flex-start" gap={2}>
      <Grid>
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <Avatar
              size="lg"
              as="button"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d13ba675122137.5c44239685eb3.gif"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu aria-label="Avatar Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                1234@gmail.com
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
             Mange Your Google Account
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
      </Grid.Container>
        </div>
    </div>
  )
}

export default Profile
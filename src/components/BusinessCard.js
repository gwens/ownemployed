import React from 'react'
import { Card, Avatar } from 'antd'
import avatar from '../static/avatars/business/Captain_Planet.png'

const { Meta } = Card

const BusinessCard = ({ business }) => (
  <Card style={{ height: '220px', width: '300px', margin: '8px' }} title={business.name}>
    <Meta
      avatar={<Avatar src={avatar}/>}
      title={business.name}
      description={business.tagline}
    />
    <div
      style={{
        fontSize: '10px',
        borderTop: '1px solid lightgray',
        padding: '8px 24px',
        height: '32px',
        width: '100%',
        position: 'absolute',
        bottom: '10px',
        left: '0px'
        }}
        >
        {business.status && business.status === 'open'
        ? 'Status: Open for collaborators'
        : 'Status: Closed'
        }
    </div>
  </Card>
)

export default BusinessCard
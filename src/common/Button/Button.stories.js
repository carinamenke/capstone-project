import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    withKnobs,
    renderButton => (
      <div style={{ padding: 20, width: 400 }}>{renderButton()}</div>
    ),
  ],
}

export const Primary_Button = () => (
  <Button
    label={text('Label', 'See Translation')}
    onClick={action('Opens Translation')}
    width="100%"
    degree="primary"
    type="button"
  />
)
export const Secondary_Button = () => (
  <Button
    label={text('Label', 'Cancel')}
    onClick={action('Cancel deletion of vocab card')}
    width="50%"
    degree="secondary"
    type="button"
  />
)

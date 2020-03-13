import React from 'react'
import { action } from '@storybook/addon-actions'
import AudioButton from './AudioButton'

export default {
  title: 'Components/AudioButton',
  component: AudioButton,
  decorators: [
    renderAudioButton => (
      <div style={{ padding: 20, width: 400 }}>{renderAudioButton()}</div>
    ),
  ],
}

export const Default_Audio_Button = () => (
  <AudioButton
    buttonLabel="Listen to Audio"
    audioSrc="./audio/porte.mp3"
    onClick={action('Audio plays')}
  />
)

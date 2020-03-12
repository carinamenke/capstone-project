import React, { useRef } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { FiVolume1 } from 'react-icons/fi'

AudioButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  audioSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default function AudioButton({ buttonLabel, audioSrc }) {
  const audioEl = useRef()

  return (
    <AudioButtonStyled onClick={playAudio} audioSrc={audioSrc}>
      <FiVolume1 className="icon" />
      <audio ref={audioEl} src={audioSrc} preload="auto"></audio>
      <span className="label">{buttonLabel}</span>
    </AudioButtonStyled>
  )

  function playAudio() {
    audioEl.current.play()
  }
}

const AudioButtonStyled = styled.button`
  ${props => (props.audioSrc ? 'display: flex;' : 'display: none;')}
  border: solid var(--grey-color-dark) 1.5px;
  border-radius: 4px;
  background: var(--background-color);
  padding: 5px 8px;

  .label,
  .icon {
    color: var(--grey-color-dark);
  }

  .label {
    font-size: 14px;
    margin-left: 3px;
  }

  :hover {
    background: var(--grey-color-mid1);
    border: solid var(--grey-color-mid1) 1px;

    .label,
    .icon {
      color: var(--text-color-white);
    }
  }

  :active {
    background: var(--grey-color-mid2);
    border: solid var(--grey-color-mid2) 1px;
  }
`

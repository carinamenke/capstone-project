import PropTypes from 'prop-types'
import React from 'react'
import VocabList from './VocabList'
import LearnStatusFilter from './LearnStatusFilter'

ListPage.propTypes = {
  vocabs: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onLearnStatusClick: PropTypes.func.isRequired,
  learnStatus: PropTypes.bool.isRequired,
  learnedVocabs: PropTypes.array.isRequired,
  toBeLearnedVocabs: PropTypes.array.isRequired,
  deleteVocab: PropTypes.func.isRequired,
}

export default function ListPage({
  vocabs,
  onClick,
  learnStatus,
  onLearnStatusClick,
  learnedVocabs,
  toBeLearnedVocabs,
  deleteVocab,
}) {
  return (
    <>
      <LearnStatusFilter
        onClick={onClick}
        learnStatus={learnStatus}
        learnedVocabs={learnedVocabs}
        toBeLearnedVocabs={toBeLearnedVocabs}
      />
      <VocabList
        vocabs={vocabs}
        onLearnStatusClick={onLearnStatusClick}
        learnStatus={learnStatus}
        deleteVocab={deleteVocab}
      />
    </>
  )
}

import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search/Search'
import VocabList from '../components/VocabList/VocabList'

SearchPage.propTypes = {
  vocabs: PropTypes.array.isRequired,
  onLearnStatusClick: PropTypes.func.isRequired,
  learnStatus: PropTypes.bool.isRequired,
}

export default function SearchPage({
  vocabs,
  onLearnStatusClick,
  learnStatus,
}) {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    let allVocabs = vocabs.map(vocab => {
      return {
        ...vocab,
        wordTitle: vocab.wordTitle.toLowerCase(),
        translation: vocab.translation.toLowerCase(),
      }
    })
    if (searchInput !== '') {
      let filteredVocabs = []
      filteredVocabs = allVocabs.filter(
        vocab =>
          vocab.wordTitle.includes(searchInput.toLowerCase()) ||
          vocab.translation.includes(searchInput.toLowerCase())
      )
      setSearchResult(filteredVocabs)
    } else {
      setSearchResult([])
    }
  }, [searchInput, vocabs])

  return (
    <>
      <Search
        searchInput={searchInput}
        handleSearch={handleSearch}
        handleReset={handleReset}
        searchResult={searchResult}
      />
      {searchResult && (
        <VocabList
          vocabs={searchResult}
          onLearnStatusClick={onLearnStatusClick}
          learnStatus={learnStatus}
        />
      )}
    </>
  )

  function handleSearch(event) {
    setSearchInput(event.target.value)
  }

  function handleReset(event) {
    const inputField = event.target
    inputField.focus()
    return setSearchInput('')
  }
}

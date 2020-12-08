import React, { useState } from 'react'

export const useMemo = () => {
  const [characters, setCharactaers] = useState<null | string[]>(['Juan', 'Esteban', 'Deossa', 'Pertuz'])
  const [search, setSearch] = useState<string>('')

  const filteredValue = React.useMemo(() => characters?.filter(name => name.toLowerCase().includes(search.toLowerCase())), [characters, search])

  return (
    <div>
      {
        filteredValue?.map(name => (
          <p>{name}</p>
        ))
      }
    </div>
  )
}

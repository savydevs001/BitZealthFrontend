import { useMemo, useState } from 'react'

export function useFilter(items, getCategories) {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return items
    return items.filter((item) => getCategories(item).includes(filter))
  }, [items, filter, getCategories])

  return { filter, setFilter, filtered }
}

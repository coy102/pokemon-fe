import { useEffect, useMemo } from 'react'

import { useGetAllTypesLazyQuery } from '~/gqlservices/hooks/pokemon'

const useHooks = ({ open }) => {
  const [loadGetAllTypes, typesData] = useGetAllTypesLazyQuery({
    fetchPolicy: 'cache-and-network',
  })

  useEffect(() => {
    if (open) {
      loadGetAllTypes()
    }
  }, [open])

  const memoTypes = useMemo(() => typesData?.data?.types || [], [typesData])

  return {
    memoTypes,
  }
}

export default useHooks

import React from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const StockListSkeletonLoader = () => (
  <SkeletonTheme baseColor="#808080" highlightColor="#9a9a9a">
    <div>
      <Skeleton width={'600px'} height={'25px'}/>
      <Skeleton width={'600px'} height={'10px'} count={10} />
    </div>
  </SkeletonTheme>
)

export default StockListSkeletonLoader
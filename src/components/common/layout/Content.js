import React from 'react'
import cn from 'classnames'

export default function Content({className, children}) {

  return (
    <div
      className={cn(
        'flex flex-col relative',
        'pt-6 pb-12',
        className
      )}
    >
        {children}
    </div>
  )
}
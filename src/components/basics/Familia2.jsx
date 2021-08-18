import React, { cloneElement, Children } from 'react'

export default props => {
  return (
    <div>
      {/* { cloneElement(props.children, { ...props }) } // when it's only one item */}
      {/* { for more than one element */}
      {
        Children.map(props.children, (item, i) =>
          cloneElement(item, { ...props, key: i })
        )
      }
    </div>
  )
}
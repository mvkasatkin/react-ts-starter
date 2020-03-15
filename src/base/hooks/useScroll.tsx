import * as React from 'react'

function useScroll() {
  const [scrollTop, setScrollTop] = React.useState(window.pageYOffset)

  React.useEffect(() => {
    function scrollHandler() {
      setScrollTop(window.pageYOffset)
    }

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return scrollTop
}

export { useScroll }

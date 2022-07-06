import React from 'react'
import Header from '../Header';
import Footer from '../Footer';

const PageTemplate = (props) => {
  const { title, description, children } = props;

  return (
    <> 
      <Header />
      <main style={{
        margin: "40px 30px"
      }}>
        <h1>{title}</h1>
        <p>{description}</p>
          { children }
      </main>
      <Footer />
    </>
  )
}

export default PageTemplate
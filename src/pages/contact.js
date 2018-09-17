import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './contact.module.css'

class Contant
 extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>
          Email: Pyrros2000@gmail.com
        </div>
      </div>
    )
  }
}

export default Contant


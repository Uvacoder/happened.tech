import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import matter from 'gray-matter'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

import Layout from '../../containers/Layout'

import './style.scss'

function JoinedStory({ data, content }) {
  const frontmatter = data
  const { name, title, twitter, avatar } = frontmatter

  return (
    <Layout>
      <div className="back-button">
        <Link href="/joined">
          <a>←</a>
        </Link>
      </div>

      <Head>
        <title>{name}</title>
      </Head>

      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <img className="story__avatar" src={avatar} />

            <div className="story__title">
              {name}
            </div>

            <div className="story__subtitle">
              {title}
              {twitter && (
                <>
                  {' '} • {' '}
                  <a href={`https://twitter.com/${twitter}`} target="_blank">
                    <span className="underline">@{twitter}</span>
                  </a>
                </>
              )}
            </div>

            <div className="story__content">
              <ReactMarkdown source={content} />
            </div>
          </Col>
        </Row>
      </Grid>
    </Layout>
  )
}

JoinedStory.getInitialProps = async function(context) {
  const { story } = context.query
  const content = await import(`../../content/joined/${story}.md`)
  const data = matter(content.default)

  return {
    ...data,
  }
}

export default JoinedStory

import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../../containers/Layout'
import { loadMarkdown } from '../../utils/loadMarkdown'

import './style.scss'

function Joined({ data }) {
  return (
    <Layout>
      <Head>
        <title>Joined the tech world</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@telmo" />
        <meta name="twitter:title" content="How I joined the tech world" />
        <meta name="twitter:description" content="Stories on how people joined the amazing world of tech. Tell yours 🙂" />
        <meta name="twitter:image" content="https://happened.tech/images/twitter-card.png" />
      </Head>

      <div className="back-button">
        <Link href="/">
          <a>// home</a>
        </Link>
      </div>

      <Grid>
        <Row>
          <Col>
            <div className="main__title">
              Joined the tech world
            </div>

            <div className="main__subtitle">
              Stories of how people <span className="underline">joined</span> {' '}
              the amazing tech world.
            </div>
          </Col>
        </Row>

        <Row>
          {data.map(({ slug, document }) => (
            <Col md={4} key={slug}>
              <Link href={`/joined/${slug}`}>
                <a className="joined-person">
                  <img className="joined-person__avatar" src={document.data.avatar} />

                  <h4 className="joined-person__name">
                    {document.data.name}
                  </h4>

                  <div className="joined-person__title">
                    {document.data.title}
                  </div>
                </a>
              </Link>
            </Col>
          ))}
        </Row>
      </Grid>
    </Layout>
  )
}

Joined.getInitialProps = async function() {
  const data = (
    context => loadMarkdown(context)
  )(
    require.context('../../content/joined', true, /\.md$/)
  )

  return {
    data,
  }
}

export default Joined


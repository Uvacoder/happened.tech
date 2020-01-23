import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Link from 'next/link'
import Head from 'next/head'

import Layout from '../containers/Layout'

import { topics } from './data/topics.json'
import './style.scss'

function Homepage() {
  return (
    <Layout>
      <Head>
        <title>Happened in Tech</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@telmo" />
        <meta name="twitter:title" content="Happened in Tech" />
        <meta name="twitter:description" content="Stories and Curated Resources for folks in tech." />
        <meta name="twitter:image" content="https://happened.tech/images/twitter-card.png" />
      </Head>

      <Grid>
        <Row>
          <Col md={12}>
            <div className="main__title">
              Happened in Tech.
            </div>

            <div className="main__subtitle">
              From the community, to the community. <br />
              <span className="underline">Resources</span> and <span className="underline">stories</span> {' '}
              of what happened in tech.
            </div>
          </Col>
        </Row>

        <Row>
          {topics.map(({ path, title, description }) => (
            <Col md={4} key={path}>
              <Link href={path}>
                <a className="category-item">
                  <h3 className="category-item__title">
                    {title}
                  </h3>

                  <div className="category-item__description">
                    {description}
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

export default Homepage

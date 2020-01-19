import React, { useEffect } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import Link from 'next/link'
import Router from 'next/router'

import Layout from '../containers/Layout'

import { topics } from './data/topics.json'
import './style.scss'

function Homepage() {
  useEffect(() => {
    // Will leave this here until there's (hopefully)
    // more topics to add here
    Router.push('/joined')
  }, [])

  return (
    <Layout>
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

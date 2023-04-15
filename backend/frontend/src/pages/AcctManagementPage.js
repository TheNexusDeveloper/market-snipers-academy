import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'

import ment1 from '../media/ment1.jpg'
import invest from '../media/invest.jpg'


function AcctManagementPage() {
  return (
    <div>

        <Container>
        <Row className='my-3 text-center'>
            <Col sm={12} md={12} lg={12} xl={6} className='p-3'>
                <div>
                    <img src={ment1} alt='acct' className='rounded-3' width='100%'/>
                </div>
            </Col>

            <Col sm={12} md={12} lg={12} xl={6} className='my-3'>
                <h2>Not sure how to Trade?</h2>
                <h4>Let us help you manage your portfolio</h4>
                <Row className='my-3'>
                    <Col sm={12} md={6}>
                        <h5>Secure</h5> 
                        <p>
                            Your investment are secured 
                            with our up to date openAI comodo security
                        </p>
                    </Col>

                    <Col sm={12} md={6}>
                        <h5>Profitable Returns </h5>
                        <p>
                            You can never go broke with market snipers.
                            You get 100% profit on every investment made
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col sm={12} md={6}>
                        <h5> Investment Opportunities</h5>
                        <p>
                            Get huge opportunites from top investors 
                            who have trusted our platform over the years. 
                        </p>
                    </Col>

                    <Col sm={12} md={6}>
                        <h5> Credible Track Records</h5>
                        <p>
                            Transparency is key.
                            We are verifiable on the trust pilot platform.
                        </p>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row>
            <Col>
            <h3>We manage the following Portfolios</h3>
            </Col>

            <Row className='my-3'>
                <Col sm={12} md={6} lg={4} >
                    <img src={invest} alt='mngnt' className='rounded-3' width='100%'/> 
                    <div className='my-3'>
                        <h5>Forex</h5>
                        <p>
                            Get profitable returns on your deals 
                            made at the foreign exchange market 
                        </p>
                        <a href='https://market-snipers.com/' style={{textDecoration: 'inherit'}}><Button variant='outline-warning'>Sign Up</Button></a>
                    </div>
                </Col>

                <Col sm={12} md={6} lg={4}>
                    <img src={invest} alt='mngnt' className='rounded-3' width='100%'/> 
                    <div className='my-3'>
                        <h5>Crypto</h5>
                        <p>
                            Get profitable returns on your deals 
                            made at the foreign exchange market 
                        </p>
                        <a href='https://market-snipers.com/' style={{textDecoration: 'inherit'}}><Button variant='outline-warning'>Sign Up</Button></a>
                    </div>
                </Col>

                <Col sm={12} md={6} lg={4}>
                    <img src={invest} alt='mngnt' className='rounded-3' width='100%'/> 
                    <div className='my-3'>
                        <h5>Stocks</h5>
                        <p>
                            Get profitable returns on your deals 
                            made at the foreign exchange market 
                        </p>
                        <a href='https://market-snipers.com/' style={{textDecoration: 'inherit'}}><Button variant='outline-warning'>Sign Up</Button></a>
                    </div>
                </Col>

            </Row>
        </Row>
        </Container>
        
    </div>
  )
}

export default AcctManagementPage
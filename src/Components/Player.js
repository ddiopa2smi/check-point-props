import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Player({ name, imageURL, age, team, jerseyNumber, nationality }) {

    return (
        <>

            <Card className='shadow' style={{ width: '19rem', marginBottom: '20px' }}>
                <Card.Img variant="top" src={imageURL} style={{ width: 'auto', height: 275 }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col style={{ textAlign: 'right', fontWeight: 'bold' }}>Age :</Col>
                            <Col style={{ textAlign: 'left' }}>{age} ans</Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'right', fontWeight: 'bold' }}>Nationality :</Col>
                            <Col style={{ textAlign: 'left' }}>{nationality}</Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'right', fontWeight: 'bold' }}>Team :</Col>
                            <Col style={{ textAlign: 'start' }}>{team}</Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: 'right', fontWeight: 'bold' }}>JerseyNumber :</Col>
                            <Col style={{ textAlign: 'start' }}>{jerseyNumber}</Col>
                        </Row>
                        {/* <div>
                            <span style={{ fontWeight: 'bold' }}>Age : </span>  {age} ans
                        </div>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>Nationality : </span>  {nationality}
                        </div>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>Team : </span>  {team}
                        </div>
                        <div>
                            <span style={{ fontWeight: 'bold' }}>JerseyNumber : </span>  {jerseyNumber}
                        </div> */}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Player
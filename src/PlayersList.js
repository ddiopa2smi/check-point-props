import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { playersList } from './players'
import Player from './Components/Player'
import Alert from 'react-bootstrap/Alert';

const PlayersList = () => {
    return (
        <div>
            <Container>
                <Alert key='primary' variant='primary' style={{ fontWeight: 'bolder' }}>
                    Top 12 des meilleurs joueurs internationaux !!!
                </Alert>
                <Row style={{ padding: '10px' }}>
                    {[...playersList].map((p) =>
                        <Col sm={12} md={6} xs={4} xl={3}>
                            <Player
                                name={p.name}
                                imageURL={p.imageURL}
                                age={p.age}
                                nationality={p.nationality}
                                jerseyNumber={p.jerseyNumber}
                                team={p.team} />
                        </Col>
                    )}
                </Row>



            </Container>

        </div>
    )
}

export default PlayersList
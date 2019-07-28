/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import Cast from './Cast';
import Description from './Description';
import Awards from './Awards';


const DetailModal = (props) => {

    return (
        <div>
            <Modal size={props.size} isOpen={props.modal} toggle={props.toggle} className={props.className}>
                <ModalHeader toggle={props.toggle}>{props.selectedTitle.TitleName} Released {props.selectedTitle.ReleaseYear}</ModalHeader>
                <ModalBody>
                    <Row className="d-flex justify-content-around mb-5">
                        <Col sm="10" md="3">
                            <Button className={(props.selected === 'awards') ? 'btnCategory active' : 'btnCategory'} color="primary" name="awards" size="lg" data-state="" onClick={props.selectCategory} >Awards</Button>{' '}
                        </Col>

                        <Col sm="10" md="3">
                            <Button className={(props.selected === 'cast') ? 'btnCategory active' : 'btnCategory'} color="primary" size="lg" name="cast" data-state="" onClick={props.selectCategory} >Cast</Button>{' '}
                        </Col>

                        <Col sm="10" md="3">
                            <Button className={(props.selected === 'info') ? 'btnCategory active' : 'btnCategory'} color="primary" size="lg" name="info" data-state="" onClick={props.selectCategory} >Info</Button>{' '}
                        </Col>

                    </Row>
                    {props.selected === 'cast' ?
                        <Cast {...props} /> :
                        props.selected === 'info' ? <Description {...props} />
                            : props.selected === 'awards' ?
                                <Awards {...props} /> : null}

                </ModalBody>
                <ModalFooter>
                    {/* <Button color="primary" onClick={props.toggle}>Do Something</Button>{' '} */}
                    <Button color="secondary" onClick={props.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default DetailModal
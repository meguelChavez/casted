/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const contentGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto'
}

const subContentGrid = {
    display: 'grid'
}
const DetailModal = (props) => {
    const sortedCast = props.selectedTitle.Participants ? props.selectedTitle.Participants.sort((a, b) => a.RoleType.localeCompare(b.RoleType)) : ''
    console.log(sortedCast)
    return (
        <div>
            <Modal size={props.size} isOpen={props.modal} toggle={props.toggle} className={props.className}>
                <ModalHeader toggle={props.toggle}>{props.selectedTitle.TitleName} Released {props.selectedTitle.ReleaseYear}</ModalHeader>
                <ModalBody>
                    <div style={contentGrid}>
                        <div style={subContentGrid}> {props.selectedTitle.Storylines ? props.selectedTitle.Storylines.map(el => (
                            <p>{el.Description}</p>
                        )) : ""}
                        </div>
                        <div style={subContentGrid}>
                            <ul>
                                {sortedCast ? sortedCast.map((el, i) => (
                                    <li key={i}>{el.RoleType}  {el.Name}</li>
                                )) : null}
                            </ul>
                        </div>
                    </div>
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
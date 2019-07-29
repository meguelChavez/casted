import React from 'react'
import { Label } from 'reactstrap';


const Cast = (props) => {
    const contentGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplatedivs: 'auto',
        gridGap: '1em'
    }
    const sortedCast = props.selectedTitle.Participants ? props.selectedTitle.Participants.sort((a, b) => a.RoleType.localeCompare(b.RoleType)) : ''
    const found = {}
    const roleTypes = []
    if (sortedCast) {
        sortedCast.forEach(el => {
            if (!found[el.RoleType]) {
                found[el.RoleType] = true
                roleTypes.push(el.RoleType)
            }
        })
    }

    return (
        <div style={contentGrid}>
            {roleTypes ? roleTypes.map((role, i) => {
                return (
                    <div key={`${role.RoleType}${i}`}>
                        <Label>{role.toUpperCase()}s:</Label>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {sortedCast ? sortedCast.map((el, i) => {
                                return (
                                    (el.RoleType === role) ?
                                        (<li key={i}> {el.Name}</li>)
                                        : null
                                )

                            }) : null}
                        </ul>
                    </div>)
            }) : null}
            {(props.results.length === 0) ? (
                <React.Fragment>
                    <div>
                        <Label>Actors</Label>
                        <p>{props.selectedTitle.Actors}</p>
                    </div>
                    <div>
                        <Label>Director</Label>
                        <p>{props.selectedTitle.Director}</p>
                    </div>
                    <div>
                        <Label>Writer</Label>
                        <p>{props.selectedTitle.Writer}</p>
                    </div>
                    <div>
                        <Label>Production</Label>
                        <p>{props.selectedTitle.Production}</p>
                    </div>

                </React.Fragment>
            ) : null}
        </div>
    )
}

export default Cast
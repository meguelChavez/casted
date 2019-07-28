import React from 'react'
import { Label } from 'reactstrap';


const Cast = (props) => {
    const contentGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'auto',
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

    console.log(sortedCast)
    return (
        <div style={contentGrid}>
            {roleTypes ? roleTypes.map(role => {
                return (
                    <div>
                        <Label>{role.toUpperCase()}:</Label>
                        <ul style={{ listStyle: 'none', padding: '0' }}>
                            {sortedCast ? sortedCast.map((el, i) => {
                                return (
                                    (el.RoleType === role) ?
                                        (<li> {el.Name}</li>)
                                        : null
                                )

                            }) : null}
                        </ul>
                    </div>)
            }) : null}
        </div>
    )
}

export default Cast
import React from 'react'
import { Label } from 'reactstrap'

const AwardsView = (props) => {
    const { Awards } = props.selectedTitle


    return (
        <div>
            <Label>Awards</Label>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {props.results.length > 0 ? Awards.map((el, i) => {

                    if (el.AwardWon) {
                        return (<li key={i}>{`${el.AwardCompany} ${el.Award} ${(el.Participants) ? `Won By ${el.Participants[0]}` : ''}`}</li>)
                    }
                    return null
                }

                ) : (<React.Fragment>
                    <p>{Awards}</p>
                    <Label>BoxOffice</Label>
                    <p>{props.selectedTitle.BoxOffice}</p>
                </React.Fragment>)}
            </ul>
        </div>
    )
}

export default AwardsView
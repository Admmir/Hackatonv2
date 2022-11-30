import React from "react";


const ScheduleList = (props) => {

    return(<div className="centerDiv">
        <h2>Lista rasporeda</h2>
        <p> {props.props.razred}. Razred</p>
        <div className="rasporedGrid">
        <div>Dan</div>
        <div className="selectSubject">
          <div>1.</div>
          <div>2.</div>
          <div>3.</div>
          <div>4.</div>
          <div>5.</div>
        </div>
        <div>Pon</div>
        <div className="selectSubject">
            {props.props.Ponedjeljak.map((predmet)=> {return <div key={predmet}>{predmet}</div>})}
        </div>
        <div>Uto</div>
        <div className="selectSubject">
            {props.props.Utorak.map((predmet)=> {return <div key={predmet}>{predmet}</div>})}
        </div>
        <div>Sri</div>
        <div className="selectSubject">
            {props.props.Srijeda.map((predmet)=> {return <div key={predmet}>{predmet}</div>})}
        </div>
        <div>Cet</div>
        <div className="selectSubject">
            {props.props.Cetvrtak.map((predmet)=> {return <div key={predmet}>{predmet}</div>})}
        </div>
        <div>Pet</div>
        <div className="selectSubject">
            {props.props.Petak.map((predmet)=> {return <div key={predmet}>{predmet}</div>})}
        </div>
        </div>

    </div>)
}

export default ScheduleList;
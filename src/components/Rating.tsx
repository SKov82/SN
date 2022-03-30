import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={1 <= props.value}/>
            <Star selected={2 <= props.value}/>
            <Star selected={3 <= props.value}/>
            <Star selected={4 <= props.value}/>
            <Star selected={5 <= props.value}/>
        </div>
    );
}

type StarPropsType = { selected: boolean }

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}

export default Rating
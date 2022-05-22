import React, {FC} from 'react';

interface MovieItemProps {
    name: string,
    picture?: string
}

const MovieItem: FC<MovieItemProps> = (props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row"
            }}
        >
            <img src={props.picture}/>
            {props.name}
        </div>
    );
};

export default MovieItem

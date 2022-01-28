/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

const Heading = (props) => {
    return ( <h2 css={styles} >{props.text}</h2> );
}
    const styles = css `
        font-size: 20px;
        color: #f1356d;
        margin-bottom: 10px;
        &:hover{
            color: hotpink;
        }
        `;

export default Heading;
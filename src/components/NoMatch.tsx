import { useLocation } from "react-router-dom";
import React from "react";

const NoMatch :React.FC= () => {
    let location = useLocation();

    return (
        <div>
            <h3>
                ERRO 404! Página não encontrada. <code>{location.pathname}</code>
            </h3>
        </div>
    );
}

export default NoMatch
import { useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return(
        <>
        <div id="error-page">
            <h1>OOPs!!</h1>
            <p>Sorry, an unexpected error occurred!</p>

            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
        </>
    )
}
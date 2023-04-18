import "./DownloadButton.css";

const DownloadButton = ( { url } ) => {

    console.log(url);
    return (
        <>
            <a className = "button" href = { url } >Baixar</a>
        </>
    );
}

export default DownloadButton;
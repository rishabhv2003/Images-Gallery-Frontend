import { useEffect, useState } from 'react';


const myStyles = {
    margin: '10px',
    margin: 'auto',
    width: '50%',
    padding: '10px'
}
const imageDim = {
    height: '9em'
}
const shuffleBtn = {
    margin: 'auto',
    width: '50%',
    padding: '10px',
    marginTop: '2em'

}

function Images() {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
        const getImages = async () => {
            const resposne = await fetch("/discover/get-images/");
            const result = await resposne.json();
            const links = result.map((val) => val.imageLink)
            setBackendData(links);
        };
        getImages();
    }, []);
    console.log(backendData);
    return (
        <div class="container" style={myStyles}>
            <div class="row g-2">
                <div class="col-6">
                    <div class="p-3 border bg-light" style={imageDim}>
                        
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-3 border bg-light" style={imageDim}>

                    </div>
                </div>
                <div class="col-6">
                    <div class="p-3 border bg-light" style={imageDim}>
                        {
                            backendData.map((imageLink, i) =>
                                <img key={i} src={imageLink}></img>
                            )
                        }
                    </div>
                </div>
                <div class="col-6">
                    <div class="p-3 border bg-light" style={imageDim}>
                        {
                            backendData.map((imageLink, i) =>
                                <img key={i} src={imageLink}></img>
                            )
                        }
                    </div>
                </div>
                <button type="button" class="btn btn-outline-danger" style={shuffleBtn} >Shuffle</button>
            </div>
        </div>
    );
}

export default Images;

{
    backendData.map((imageLink, i) =>
        <img key={i} src={imageLink}></img>
    )
}
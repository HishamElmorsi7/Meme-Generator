// import memesData from '../../memesData.js';
import React from 'react'




export default function Meme() {

    // when creating a new meme we need the properties of the old one like top text and bottom text
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: ''
    })

    const [allMemes, setAllMemes] = React.useState([])
    // * make an API call to "https://api.imgflip.com/get_memes".

    React.useEffect(() => {
        const getMemes = async () => {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllMemes(data.data.memes)
        }

        getMemes()
    }, [])

    function getRandomMeme() {
        // let memesArray = memesData.data.memes
        
        let randomIndex = Math.floor(Math.random() * allMemes.length)
        let {url} = allMemes[randomIndex]

        setMeme(prevState => ({
            ...prevState,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => 
            ({
                ...prevMeme,
                [name]: value
            })
        )
    }




    return (
        // we used div that is named a form instead of a form tag as the button 
        // that we need want only to add envent listener to it, not by default reloads the page
        <div className="meme">
            <div className="form" action="">
                <div className="form--inputs">
                    <div className="form--inputSection">
                        <label htmlFor="top-text" >Top text</label>
                        <input className="form--input" id='top-text' type="text" name="topText" placeholder="Shut up" onChange={handleChange}  />
                    </div>

                    <div className="form--inputSection">
                        <label htmlFor="bottom-text">Bottom text</label>
                        <input className="form--input" id='bottom-text' type="text" name="bottomText" placeholder="And take my money" onChange={handleChange} />
                    </div>

                </div>

                <button onClick={getRandomMeme} className="form--button">Get a new meme image  🖼</button>
            </div>

            { meme.randomImage && <div className="generated_meme">
                <img className='memeImg' src={meme.randomImage}/>
                <h2 className="generated_meme--text top">{meme.topText}</h2>
                <h2 className="generated_meme--text bottom">{meme.bottomText}</h2>
            </div> }

        </div>
    )
}
import React, {useContext} from "react"
import Image from "../components/Image"
import {getClass} from "../utilities/getClass"
import {Context} from "../../Context"

function Photos() {
    // Getting the allPhotos array from context
    const {allPhotos} = useContext(Context)

    // Maping over the allPhotos array and returning <Image /> element
    const imageElements = allPhotos.map((img, i) => ( // we need i(ndex) of the images as well, because we want to set some custom function on them
        <Image key={img.id} img={img} className={getClass(i)} /> // in "img" props we store the whole img object (img={img}), so we can access img's url in Image.js
    ))

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

export default Photos
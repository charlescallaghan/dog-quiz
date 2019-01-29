import React, { Component } from 'react'
import * as request from 'superagent'
// import DogBreedImages from './DogBreedImage'

export default class DogsImagesContainer extends Component {

    state = {
        dogBreeds: []
    }

    componentDidMount() {

        request
            .get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const breeds = Object.keys(response.body.message)
                breeds.map(breed =>
                    request.get(`https://dog.ceo/api/breed/${breed}/images`)
                        .then(response => {
                            // save name + picture(s) to state

                            const image = response.body.message[0];

                            // this "works", but react does not know,
                            //  and hence the document is not updated
                            this.state.dogBreeds.push({ breed, image })

                            // TODO

                            //let image = this.updateImages(breed, response.body.message[0])
                            //return image
                        })
                )
                // const dogBreed = this.randomBreedImages(this.state.dogBreeds)
                // console.log(this.state.images)

            })
            .catch(console.error)

        console.log(this.state)
    }


    // updateBreeds = (breeds, image) => {
    //     this.setState({
    //         dogBreeds: { breedName: breeds }
    //     })
    // }

    randomBreedImages = (breed) => {
        return breed[Math.floor(Math.random() * breed.length)]
    }

    // updateImages = (breeds, images) => {
    //     this.setState({
    //         dogBreeds: { breeds, image: images }
    //     })
    //     // console.log(this.state)
    // }

    render() {
        return (
            <div>
                {/* {this.state.dogBreeds} */}
            </div>
        )
    }
}
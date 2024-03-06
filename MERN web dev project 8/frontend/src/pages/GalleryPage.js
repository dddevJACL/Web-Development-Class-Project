import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: "./images/bamboo-heart-lantern.jpg",
        thumbnail: "./images/bamboo-heart-lantern.jpg",
        description: "Bamboo lanterns arranged in a heart shape. Kitakyushu, Japan, 2020",
        originalHeight: "390px"
    },
    {
        original: "./images/bridges-takachiho-miyazaki.jpg",
        thumbnail: "./images/bridges-takachiho-miyazaki.jpg",
        description: "A modern bridge and an old bridge at Takachiho gorge. Miyazaki, Japan, 2022",
        originalHeight: "540px"
    },
    {
        original: "./images/brownie-coffee-sapporo-cafe.jpg",
        thumbnail: "./images/brownie-coffee-sapporo-cafe.jpg",
        description: "The best brownie in Japan, from a café in Sapporo. Sapporo, Japan, 2023",
        originalHeight: "513px"
    },
    {
        original: "./images/japanese-garden-fountain.jpg",
        thumbnail: "./images/japanese-garden-fountain.jpg",
        description: "A small Japanese garden near a ryokan. Asakura, Japan, 2020",
        originalHeight: "640px"
    },
    {
        original: "./images/kammon-bridge-mojiko.jpg",
        thumbnail: "./images/kammon-bridge-mojiko.jpg",
        description: "Kammon bridge, taken from Mojiko. Mojiko, Japan, 2021",
        originalHeight: "580px"
    },
    {
        original: "./images/kokura-castle-kitakyushu-winter.jpg",
        thumbnail: "./images/kokura-castle-kitakyushu-winter.jpg",
        description: "Kokura castle dusted with a rare snow. Kitakyushu, Japan, 2020",
        originalHeight: "450px"
    },
    {
        original: "./images/niagara-falls.jpg",
        thumbnail: "./images/niagara-falls.jpg",
        description: "A picture of the Niagara Falls from a trip home to Canada. Niagara, Canada, 2022",
        originalHeight: "640px"
    },
    {
        original: "./images/sakurajima-kagoshima.jpg",
        thumbnail: "./images/sakurajima-kagoshima.jpg",
        description: "A picture of Sakurajima volcano. Kagoshima, Japan, 2022",
        originalHeight: "800px"
    },
    {
        original: "./images/sushi-dinner.jpg",
        thumbnail: "./images/sushi-dinner.jpg",
        description: "A picture of a great sushi dinner. Fukuoka, Japan, 2023",
        originalHeight: "390px"
    },
    {
        original: "./images/takachiho-gorge-miyazaki.jpg",
        thumbnail: "./images/takachiho-gorge-miyazaki.jpg",
        description: "A picture of Takachiho gorge from a paddle boat. Miyazaki, Japan, 2022",
        originalHeight: "535px"
    }
];

function GalleryPage() {
    return (
        <>
            <h2>Gallery</h2>
            <p>A selection of photos I've taken mostly in my time spent living in Japan.</p>
            <article class = "gallery">
            <ImageGallery items={images} />
            </article>
        </>
    );
}

export default GalleryPage;
document.getElementById('start-button').addEventListener('click', () => {
    const selectedPokemon = document.getElementById('pokemon-select').value;
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = '';

    // URLs de las imágenes para cada Pokémon
    const pokemonImages = {
        spheal: [
            'https://i.pinimg.com/564x/0a/b1/5c/0ab15c772252d1e6bd950427b112afe1.jpg',
            'https://i.pinimg.com/564x/92/3e/08/923e0873519b2143b2f68d536e252049.jpg',
            'https://i.pinimg.com/564x/67/1c/e9/671ce9b9d9bd2dbf964158574a4c14ca.jpg',
            'https://i.pinimg.com/736x/e1/68/4d/e1684d86d53c090f3465441c0e12201c.jpg',
            'https://i.pinimg.com/564x/85/18/2d/85182df76ea930a159e61cf057e4497c.jpg'
        ],
        absol: [
            'https://i.pinimg.com/564x/06/47/24/064724f7c95503842ca71bcd8b7a75bc.jpg',
            'https://i.pinimg.com/564x/71/b2/ad/71b2ad086cda935a62624dd3564d4c0d.jpg',
            'https://i.pinimg.com/564x/88/1f/07/881f0742f67e13ac6fa0dadd557cc66b.jpg',
            'https://i.pinimg.com/564x/44/0d/5f/440d5f0ebcaaf2529a0a68a7c6424743.jpg',
            'https://i.pinimg.com/564x/33/75/f6/3375f609b6049acd0c9bf4b806ad4e8d.jpg'
        ],
        vaporeon: [
            'https://i.pinimg.com/564x/1e/cd/04/1ecd04c9298759683980e51e6bedb80f.jpg',
            'https://i.pinimg.com/736x/dd/ca/54/ddca544d3cda08256c926ef52a01bfd8.jpg',
            'https://i.pinimg.com/564x/c0/84/66/c08466039562b681093b45da4e46639b.jpg',
            'https://i.pinimg.com/564x/dc/e3/ab/dce3aba9f4f47f153a043624b95caece.jpg',
            'https://i.pinimg.com/564x/d2/e8/d1/d2e8d1c3f88396b57f8b3dade5f17988.jpg'
        ],
        mudkip: [
            'https://i.pinimg.com/564x/14/65/07/1465079f46358f78fc90c7853eb5dc1d.jpg',
            'https://i.pinimg.com/564x/9a/ab/24/9aab24b88626066511f5a7692e41f20b.jpg',
            'https://i.pinimg.com/736x/5e/ee/79/5eee79329578391832d6d45f3d438ed6.jpg',
            'https://i.pinimg.com/564x/5e/8c/d8/5e8cd8ae085fb97a84b494e0cc926785.jpg',
            'https://i.pinimg.com/564x/75/47/0e/75470e0a2cf6738f905ebbf67f24f52d.jpg'
        ],
        bulbasaur: [
            'https://i.pinimg.com/564x/24/19/0b/24190b08068720c1b8e89296fef0fdce.jpg',
            'https://i.pinimg.com/736x/75/60/0a/75600a39e1972cce46ec7025e8043d75.jpg',
            'https://i.pinimg.com/564x/a3/a0/f9/a3a0f9575807146f9e81a06309e52afa.jpg',
            'https://i.pinimg.com/564x/24/a4/eb/24a4eb20a4d0fbb1362dcbbc899920f8.jpg',
            'https://i.pinimg.com/564x/de/2c/cc/de2cccc70af890cd1011df5d82fd7757.jpg'
        ],
        totodile: [
            'https://i.pinimg.com/736x/85/26/ba/8526bac39753b99a42a71eca3328d6f2.jpg',
            'https://i.pinimg.com/564x/c8/b9/56/c8b956a5ebda87a5e08c4ff6ace97eb5.jpg',
            'https://i.pinimg.com/564x/d1/b1/c3/d1b1c3bb3802737953dcd54574e5c699.jpg',
            'https://i.pinimg.com/564x/2a/fa/f7/2afaf7945222d28f99b7533c9fa9f67d.jpg',
            'https://i.pinimg.com/564x/c3/08/90/c30890078d3553d08f7d2c5940d164a0.jpg'
        ],
        milotic: [
            'https://i.pinimg.com/564x/1e/9c/2d/1e9c2d766098450747876ddf4ce6d93a.jpg',
            'https://i.pinimg.com/564x/41/66/7c/41667c3451d9e08441722e0ea827b191.jpg',
            'https://i.pinimg.com/564x/5e/dd/12/5edd125576bb8a40e4ddc9372077648b.jpg',
            'https://i.pinimg.com/564x/d2/db/f0/d2dbf0bd9a3b891d78fa7e0fe219c206.jpg',
            'https://i.pinimg.com/564x/3e/47/b1/3e47b110ccb315af85876a5cb0e43257.jpg'
        ],
        piplup: [
            'https://i.pinimg.com/564x/f6/47/f5/f647f5f19849aaf3044f32e2ac1bfe52.jpg',
            'https://i.pinimg.com/564x/3f/41/c7/3f41c7b1b723dbb56efa1c63a7260b7e.jpg',
            'https://i.pinimg.com/564x/08/9b/dc/089bdc311346cee15a50126f9badfb39.jpg',
            'https://i.pinimg.com/564x/9b/15/66/9b1566f5f4ef719d650a230fcc534d9d.jpg',
            'https://i.pinimg.com/564x/a4/82/78/a482787e52590606d05a9cea7472efa3.jpg'
        ],
        oshawott: [
            'https://i.pinimg.com/736x/4d/a5/76/4da57693d99a8bf8eb87651218758389.jpg',
            'https://i.pinimg.com/564x/fb/bf/19/fbbf19f8c1ba92a9e8273b7e34daca5f.jpg',
            'https://i.pinimg.com/564x/d6/ad/1c/d6ad1c07dcef895aea8b3f7d1972cc7d.jpg',
            'https://i.pinimg.com/564x/d6/b6/2a/d6b62a276abf4ce5f19d5f90b9dcf8e8.jpg',
            'https://i.pinimg.com/564x/b3/3c/fd/b33cfd6d519b2b87f048f422515c6d1e.jpg'
        ],
        lapras: [
            'https://i.pinimg.com/564x/b0/3d/6f/b03d6fd0d59d00c90923ab9fe00dc8b4.jpg',
            'https://i.pinimg.com/564x/8c/fd/c5/8cfdc5f5a8c8cd527734a7246ac33e31.jpg',
            'https://i.pinimg.com/564x/ae/df/be/aedfbe0c287f168e945e69ace9814c12.jpg',
            'https://i.pinimg.com/564x/de/6a/5f/de6a5f9107457bb85635652ed708e850.jpg',
            'https://i.pinimg.com/564x/21/fd/ae/21fdae5a766cfe139c4cdf49a9b4bb75.jpg'
        ],
        empoleon: [
            'https://i.pinimg.com/564x/74/6d/16/746d16181e8b645aa7fea51b3578148c.jpg',
            'https://i.pinimg.com/564x/34/75/e4/3475e49bed2560ab950bb893ae31687f.jpg',
            'https://i.pinimg.com/564x/17/54/bd/1754bdffeb838618c8feb22d26374245.jpg',
            'https://i.pinimg.com/564x/06/04/3a/06043ab80a35fddc7059e5ec20bbe2a8.jpg',
            'https://i.pinimg.com/564x/18/31/77/1831773ae9836f700fefbe1a82f21d91.jpg'
        ],
        ducklet: [
            'https://i.pinimg.com/564x/08/00/4d/08004dd9e7134df0a15cdbadd1b2e001.jpg',
            'https://i.pinimg.com/564x/5c/62/59/5c6259bca2daa7c83471dc4178d35b1f.jpg',
            'https://i.pinimg.com/564x/2c/9d/b4/2c9db4c3795bcafa7caaa7fa5bc4d35a.jpg',
            'https://i.pinimg.com/564x/34/03/fc/3403fcba808233766408ab6901830139.jpg',
            'https://i.pinimg.com/736x/ad/54/70/ad5470f1d162a466d762a6c0521c99d2.jpg'
        ]


    };

    let currentImageIndex = 0;
    const intervalId = setInterval(() => {
        if (currentImageIndex >= 5) {
            clearInterval(intervalId);
            setTimeout(() => {
                imageContainer.innerHTML = ''; // Remove the last image after 5 seconds
            }, 2500);
            return;
        }

        const img = document.createElement('img');
        img.src = pokemonImages[selectedPokemon][currentImageIndex];
        
        imageContainer.innerHTML = '';
        imageContainer.appendChild(img);

        currentImageIndex++;
    }, 2500);
});

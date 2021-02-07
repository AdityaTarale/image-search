import React from 'react';
import { BsHeartFill } from 'react-icons/bs';
function Image({ images }) {
    return (
        <div className='ImageCard'>
            {images.map((image) => {
                const {
                    id,
                    webformatURL,
                    user,
                    views,
                    downloads,
                    pageURL,
                    likes,
                } = image;

                const tags = image.tags.split(',');

                return (
                    <figure key={id}>
                        <a href={pageURL}>
                            <img src={webformatURL} alt={user} />
                        </a>
                        <summary>
                            <span>
                                <strong>
                                    <BsHeartFill className='icon'></BsHeartFill>
                                </strong>
                                <p>{likes}</p>
                            </span>
                            <span>
                                <strong>Photo by</strong>
                                <p>{user}</p>
                            </span>

                            <span>
                                <strong>Downloads</strong>
                                <p>{downloads}</p>
                            </span>
                        </summary>

                        <section className='tags'>
                            {tags.map((tag) => {
                                return <p>#{tag.trim()}</p>;
                            })}
                        </section>
                    </figure>
                );
            })}
        </div>
    );
}

export default Image;

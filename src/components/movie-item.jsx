import Genres from './genres/genres';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './rating';
import { getPicture, formatDate } from '../utils';
import Title from './title';

const MovieItem = ({ item, media_type, extended }) => {
    return (
        <div className="border-violet-200 border-t-2 my-5  lg:mx-10 lg:min-w-max flex flex-col flex-wrap">
            <Title title={item.name ?? item.title} />
            <div className="grid justify-items-center lg:grid-cols-2 lg:flex lg:justify-start">
                <div className="lg:mb-10 lg:mr-10">
                    <Link
                        to={`/${
                            item.media_type === undefined
                                ? media_type
                                : item.media_type
                        }/${item.id}`}
                    >
                        <div
                            className="flex m-10 h-60 w-40 bg-cover"
                            style={{
                                backgroundImage: `url(
                                            ${getPicture(
                                                item.poster_path,
                                                'movie'
                                            )}
                                        )`,
                            }}
                        />
                    </Link>
                </div>
                <div className="flex flex-col justify-between">
                    {item.character ||
                        (item.job && (
                            <div className="lg:self-start">
                                {item.character || item.job}
                            </div>
                        ))}

                    <Genres
                        data={item}
                        media_type={item.media_type ?? media_type}
                    />

                    <div>
                        {extended && (
                            <p>
                                📅
                                <span>
                                    {formatDate(
                                        item.release_date ?? item.first_air_date
                                    )}
                                </span>
                            </p>
                        )}

                        <Rating
                            number={item.vote_count}
                            rating={item.vote_average}
                        />
                    </div>
                    <div className="text-sm font-semibold ">
                        <Link
                            to={`/${item.media_type ?? media_type}/${item.id}`}
                        >
                            <button
                                type="button"
                                className="underline hover:cursor-pointer hover:text-slate-300"
                            >
                                Show more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

MovieItem.propTypes = {
    item: PropTypes.shape({
        vote_count: PropTypes.number,
        vote_average: PropTypes.number,
        title: PropTypes.string,
        name: PropTypes.string,
        media_type: PropTypes.string,
        id: PropTypes.number.isRequired,
        poster_path: PropTypes.string,
        character: PropTypes.string,
        job: PropTypes.string,
        release_date: PropTypes.instanceOf(Date),
        first_air_date: PropTypes.instanceOf(Date),
    }),
    media_type: PropTypes.string,
    extended: PropTypes.bool,
};

export default MovieItem;

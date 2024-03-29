import propTypes from 'prop-types';
import BriefInfoMovie from '../pages/movie-series-page/movie-page/components/brief-info-movie';
import BriefInfoSeries from '../pages/movie-series-page/series-page/components/brief-info-series';
import { getPicture } from '../utils';

const PicAndInfo = ({ data, media_type }) => {
    return (
        <div className="grid grid-cols-2 gap-5 mb-5  lg:col-start-1">
            <div className="self-end">
                <img
                    className="lg:h-96"
                    src={getPicture(data.poster_path, 'movie')}
                />
            </div>
            <div>
                {media_type === 'movie' ? (
                    <BriefInfoMovie data={data} />
                ) : (
                    <BriefInfoSeries data={data} />
                )}
            </div>
        </div>
    );
};

PicAndInfo.propTypes = {
    data: propTypes.object.isRequired,
    media_type: propTypes.string.isRequired,
};
export default PicAndInfo;

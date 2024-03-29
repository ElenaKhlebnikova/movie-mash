import propTypes from 'prop-types';
import { formatDate, getPicture } from '../../../../utils';

const BriefInfoPerson = ({ data, device }) => {
    return (
        <div className="mb-20">
            <h3 className="mb-5 font-semibold text-xl">{data.name}</h3>
            <div className="grid grid-cols-2 lg:grid-cols-5 ">
                <div
                    className="lg:justify-self-end lg:mr-5 bg-no-repeat bg-contain w-36  mr-3 rounded-md"
                    style={{
                        backgroundImage: `url(${getPicture(
                            data.profile_path,
                            'person'
                        )})`,
                    }}
                ></div>
                <div className="lg:flex ">
                    <div className="lg:mx-5">
                        <ul className="text-start ml-5">
                            <li className="m-1">
                                🎂 {formatDate(data.birthday)}
                            </li>
                            {data.deathday && (
                                <li className="m-1">
                                    ✝️ {formatDate(data.deathday)}
                                </li>
                            )}
                            <li className="m-1">🏠 {data.place_of_birth}</li>

                            <li className="m-1">
                                <p>👥 {data.popularity}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:mx-5 lg:col-span-3 col-start-3">
                    {device === 'desktop' && <p>{data.biography}</p>}
                </div>
            </div>
        </div>
    );
};

BriefInfoPerson.propTypes = {
    data: propTypes.object.isRequired,
    device: propTypes.string.isRequired,
};

export default BriefInfoPerson;

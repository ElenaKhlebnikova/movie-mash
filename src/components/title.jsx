import propTypes from 'prop-types';

const Title = ({ title, original_title }) => {
    return (
        <div className="flex flex-col my-5 lg:col-span-2 lg:row-start-1">
            <h3 className="text-base lg:text-lg inline break-all">{title}</h3>
            <h3 className="text-xs lg:text-lg inline">{original_title}</h3>
        </div>
    );
};

Title.propTypes = {
    title: propTypes.string.isRequired,
    original_title: propTypes.string,
};
export default Title;

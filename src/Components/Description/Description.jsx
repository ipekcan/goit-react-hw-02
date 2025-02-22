import stylesDesc from './Description.module.css';

const Description = () => {
    return (
    <div>
        <h1 className={`${stylesDesc.h1}`}>Sip Happens Café</h1>
        <h2 className={`${stylesDesc.h2}`}>Please leave your feedback about our service by selecting one of the options below.</h2>
    </div>
)};

export default Description;
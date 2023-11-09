import{ useBoxCountContext } from './BoxCountProvider';
import App from './App';


const BoxParent = () => {
    const {countState} =useBoxCountContext();

    return (
        <div>
            <div id="title">Boxes Turn On: {countState} </div>
                <div className="grid">
                    <App idx={0} />
                    <App idx={1} />
                    <App idx={2} />
                    <App idx={3} />
                </div>
        </div>
    )

};

export default BoxParent;
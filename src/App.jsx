import './App.css';
import{ useBoxCountContext } from './BoxCountProvider';

// eslint-disable-next-line react/prop-types
export default function App({idx}) {

  const {blackState, BoxOnStates} =useBoxCountContext();
  const isOn = blackState[idx];
  const singleBox = isOn ? 'box blackBackground' : 'box';

  return (
    <div>
      <div className={singleBox} onClick={() => BoxOnStates(idx)}>
      </div>
    </div>
  )
}

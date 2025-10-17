import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClear = () => {
    setSelectedGood('');
  };

  const handleAddButton = good => {
    setSelectedGood(good);
  };

  const RemoveButton = (
    <button
      data-cy="RemoveButton"
      onClick={handleClear}
      type="button"
      className="button is-info"
    >
      -
    </button>
  );

  const noGoodsSelected = (
    <h1 className="title is-flex is-align-items-center">No goods selected</h1>
  );

  const goodsSelected = (
    <h1 className="title is-flex is-align-items-center">
      {`${selectedGood} is selected`}
      {selectedGood && (
        <button
          data-cy="ClearButton"
          type="button"
          onClick={handleClear}
          className="delete ml-3"
        />
      )}
    </h1>
  );

  return (
    <main className="section container">
      {selectedGood !== '' ? goodsSelected : noGoodsSelected}

      <table className="table">
        <tbody>
          {goods.map(good => {
            let buttonToRender = null;

            if (good === selectedGood) {
              buttonToRender = RemoveButton;
            } else if (selectedGood === '') {
              buttonToRender = (
                <button
                  data-cy="AddButton"
                  onClick={() => handleAddButton(good)}
                  type="button"
                  className="button"
                >
                  +
                </button>
              );
            }

            return (
              <tr
                key={good}
                data-cy="Good"
                className={
                  good === selectedGood ? 'has-background-success-light' : ''
                }
              >
                <td>{buttonToRender}</td>
                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

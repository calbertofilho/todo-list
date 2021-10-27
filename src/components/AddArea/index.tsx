import React from 'react';
import * as C from './styles';

type Props = {
	propEnter: (taskName: string) => void
}

export const AddArea = ({ propEnter }: Props) => {
  const [inputText, setText] = React.useState('');

  const handleKey = (e: React.KeyboardEvent) => {
	if(e.code === `Enter` && inputText !== ``) {
	  propEnter(inputText);
	  setText('');
	}
  }

  return (
	<C.Container>
	  <div className="image">➕</div>
	  <input type="text" placeholder="Adicione uma tarefa" value={inputText} onChange={e => setText(e.target.value)} onKeyUp={handleKey} />
	</C.Container>
  );
};
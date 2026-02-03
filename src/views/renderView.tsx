import {useState} from 'react';

function RenderView() {
  const [name, setName] = useState<string | null>(null);

  console.log('rendering');

  return (
    <div>
      <p>You entered: {name}</p>
      <input
        type="text"
        value={name ?? ''}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default RenderView;
